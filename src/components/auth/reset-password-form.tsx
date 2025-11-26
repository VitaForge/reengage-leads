"use client";

import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/server/better-auth/client";

import { AuthFormFooter } from "./auth-form-footer";
import { AuthFormHeader } from "./auth-form-header";
import { AuthLoadingState } from "./auth-loading-state";
import { AuthSuccessState } from "./auth-success-state";

export function ResetPasswordForm({ token: initialToken }: { token: string }) {
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [success, setSuccess] = useState(false);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const errorParam = searchParams.get("error");
		if (errorParam === "INVALID_TOKEN") {
			toast.error("Invalid or expired reset token");
			router.push("/request-password-reset");
			return;
		}
	}, [searchParams, router]);

	const resetSchema = z
		.object({
			password: z.string().min(8, "Password must be at least 8 characters"),
			confirmPassword: z.string().min(8, "Please confirm your password"),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Passwords do not match",
			path: ["confirmPassword"],
		});

	const form = useForm({
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
		validators: {
			onChange: resetSchema,
		},
		onSubmit: async ({ value }) => {
			setLoading(true);

			authClient
				.resetPassword({
					newPassword: value.password,
					token: initialToken,
				})
				.then((result) => {
					if (result?.error) {
						toast.error(result.error.message || "Failed to reset password", {
							duration: 5000,
						});
						return;
					}

					toast.success("Password reset successfully!", {
						duration: 3000,
					});
					setSuccess(true);
				})
				.catch((error: any) => {
					console.error("Password reset error:", error);
					toast.error(error?.message || "Failed to reset password", {
						duration: 5000,
					});
				})
				.finally(() => {
					setLoading(false);
				});
		},
	});

	if (loading) {
		return <AuthLoadingState message="Resetting password..." />;
	}

	if (success) {
		return (
			<AuthSuccessState
				icon="check"
				title="Password reset successful"
				description="Your password has been successfully reset. You can now sign in with your new password."
				buttonText="Back to Sign In"
				buttonHref="/sign-in"
			/>
		);
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
				title="Reset your password"
				subtitle="Enter your new password below"
			/>

			<FieldGroup>
				<form.Field name="password">
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>New Password</FieldLabel>
								<div className="relative">
									<Input
										id={field.name}
										name={field.name}
										type={showPassword ? "text" : "password"}
										placeholder="Enter your new password"
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

				<form.Field name="confirmPassword">
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
								<div className="relative">
									<Input
										id={field.name}
										name={field.name}
										type={showConfirmPassword ? "text" : "password"}
										placeholder="Confirm your new password"
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
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
									>
										{showConfirmPassword ? (
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
						{loading ? "Resetting..." : "Reset Password"}
					</Button>
				</Field>
			</FieldGroup>

			<AuthFormFooter
				text="Remember your password?"
				linkText="Back to Sign In"
				linkHref="/sign-in"
			/>
		</form>
	);
}
