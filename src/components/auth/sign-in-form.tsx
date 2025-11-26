"use client";

import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { z } from "zod";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AnalyticsEvent } from "@/lib/analytics";
import { authClient } from "@/server/better-auth/client";

import { AuthDivider } from "./auth-divider";
import { AuthFormFooter } from "./auth-form-footer";
import { AuthFormHeader } from "./auth-form-header";
import { AuthLoadingState } from "./auth-loading-state";

// import { AuthSocialButton } from "./auth-social-button";

export function SignInForm({
	callbackURL = "/dashboard",
}: {
	callbackURL?: string;
}) {
	const posthog = usePostHog();
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();

	const signInSchema = z.object({
		email: z.string().superRefine((val, ctx) => {
			if (val.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Email is required",
				});
				return;
			}
			if (!z.string().email().safeParse(val).success) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Invalid email address",
				});
			}
		}),
		password: z.string().min(1, "Password is required"),
	});

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onChange: signInSchema,
		},
		onSubmit: async ({ value }) => {
			setLoading(true);

			authClient.signIn
				.email({
					email: value.email,
					password: value.password,
					callbackURL: callbackURL,
				})
				.then(async (result) => {
					if (result?.error) {
						toast.error(result.error.message || "Failed to sign in", {
							duration: 5000,
						});
						setLoading(false);
						return;
					}

					// Fetch user session to get user data
					try {
						const session = await authClient.getSession();
						if (session?.data?.user) {
							const user = session.data.user;
							// Identify user in PostHog
							posthog?.identify(user.id, {
								email: user.email,
								name: user.name,
								emailVerified: user.emailVerified,
							});
						}
					} catch (error) {
						console.error(
							"Failed to get session for PostHog identification:",
							error
						);
					}

					// Track successful login
					posthog?.capture(AnalyticsEvent.LOGIN, {
						method: "email",
					});
				})
				.catch((error: any) => {
					console.error("Authentication error:", error);
					toast.error(error?.message || "Failed to sign in", {
						duration: 5000,
					});
					setLoading(false);
				});
		},
	});

	if (loading) {
		return <AuthLoadingState message="Signing in..." />;
	}

	return (
		<form
			className="w-full max-w-md"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<AuthFormHeader
				title="Welcome back"
				subtitle="Sign in to your account to continue"
			/>

			{/* OAuth Provider Buttons */}
			{/* <div className="mb-6 grid gap-3">
				<AuthSocialButton
					provider="google"
					label="Continue with Google"
					disabled={loading}
					onLoadingChange={setLoading}
					onError={(error) => toast.error(error || "Failed to sign in")}
				/>
			</div>

			<AuthDivider text="or" /> */}

			{/* Email/Password Form */}
			<FieldGroup>
				<form.Field name="email">
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									type="email"
									placeholder="Enter your email"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
									disabled={loading}
									autoComplete="email"
									aria-invalid={isInvalid}
								/>
								{isInvalid && (
									<FieldError
										errors={
											field.state.meta.errors &&
											field.state.meta.errors.length > 0
												? field.state.meta.errors
												: undefined
										}
									/>
								)}
							</Field>
						);
					}}
				</form.Field>

				<form.Field name="password">
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<div className="flex w-full items-center justify-between">
									<FieldLabel htmlFor={field.name}>Password</FieldLabel>
									<Button
										type="button"
										variant="link"
										size="sm"
										className="h-auto p-0 text-xs"
										onClick={() => router.push("/request-password-reset")}
									>
										Forgot password?
									</Button>
								</div>
								<div className="relative w-full">
									<Input
										id={field.name}
										name={field.name}
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										disabled={loading}
										autoComplete="current-password"
										className="pr-10"
										aria-invalid={isInvalid}
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4" />
										) : (
											<Eye className="h-4 w-4" />
										)}
									</button>
								</div>
								{isInvalid && (
									<FieldError
										errors={
											field.state.meta.errors &&
											field.state.meta.errors.length > 0
												? field.state.meta.errors
												: undefined
										}
									/>
								)}
							</Field>
						);
					}}
				</form.Field>

				<Field orientation="horizontal">
					<Button
						type="submit"
						variant="default"
						size="lg"
						className="w-full bg-[rgb(var(--st-orange))] text-white hover:bg-[rgb(var(--st-orange-hover))]"
						disabled={loading || !form.state.isValid}
					>
						{loading ? "Signing in..." : "Sign In"}
					</Button>
				</Field>
			</FieldGroup>

			<AuthFormFooter
				text="New to ReEngage?"
				linkText="Sign up for an account"
				linkHref={`/sign-up?callbackUrl=${encodeURIComponent(callbackURL)}`}
			/>
		</form>
	);
}
