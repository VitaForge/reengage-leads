"use client";

import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/server/better-auth/client";

import { AuthDivider } from "./auth-divider";
import { AuthFormFooter } from "./auth-form-footer";
import { AuthFormHeader } from "./auth-form-header";
import { AuthLoadingState } from "./auth-loading-state";

// import { AuthSocialButton } from "./auth-social-button";

export function SignUpForm({
	callbackURL = "/dashboard",
}: {
	callbackURL?: string;
}) {
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();

	const signUpSchema = z.object({
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
		password: z.string().min(8, "Password must be at least 8 characters"),
	});

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onChange: signUpSchema,
		},
		onSubmit: async ({ value }) => {
			// Extract name from email (part before @) as Better Auth requires name
			const nameFromEmail = value.email.split("@")[0] || value.email;

			setLoading(true);

			authClient.signUp
				.email({
					email: value.email,
					password: value.password,
					name: nameFromEmail,
					callbackURL: callbackURL,
				})
				.then((result) => {
					if (result?.error) {
						setLoading(false);
						toast.error(result.error.message || "Failed to sign up", {
							duration: 5000,
						});
						return;
					}
				})
				.catch((error: any) => {
					console.error("Authentication error:", error);
					toast.error(error?.message || "Failed to sign up", {
						duration: 5000,
					});
					setLoading(false);
				});
		},
	});

	if (loading) {
		return <AuthLoadingState message="Creating account..." />;
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
				title="Create your account"
				subtitle="Sign up to get started with ReEngage"
			/>

			{/* OAuth Provider Buttons */}
			{/* <div className="mb-6 flex flex-wrap gap-3">
				<AuthSocialButton
					provider="google"
					label="Continue with Google"
					disabled={loading}
					onLoadingChange={setLoading}
					onError={(error) => toast.error(error || "Failed to sign up")}
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
								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
								<div className="relative">
									<Input
										id={field.name}
										name={field.name}
										type={showPassword ? "text" : "password"}
										placeholder="Create a password"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										disabled={loading}
										autoComplete="new-password"
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
						{loading ? "Creating account..." : "Continue"}
					</Button>
				</Field>

				{/* Terms */}
				<div className="text-xs leading-relaxed text-gray-600">
					By signing up, you agree to our{" "}
					<Link
						href="/terms"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noreferrer"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href="/privacy"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noreferrer"
					>
						Privacy Policy
					</Link>
					.
				</div>
			</FieldGroup>

			<AuthFormFooter
				text="Already have an account?"
				linkText="Sign in"
				linkHref={`/sign-in?callbackUrl=${encodeURIComponent(callbackURL)}`}
			/>
		</form>
	);
}
