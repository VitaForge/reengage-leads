"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

import { useState } from "react";

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
import { AuthSuccessState } from "./auth-success-state";

export function RequestPasswordResetForm() {
	const [loading, setLoading] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const resetSchema = z.object({
		email: z
			.string()
			.min(1, "Email is required")
			.email("Invalid email address"),
	});

	const form = useForm({
		defaultValues: {
			email: "",
		},
		validators: {
			onChange: resetSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				setLoading(true);
				const result = await (authClient as any).forgotPassword({
					email: value.email,
				});

				if (result?.error) {
					toast.error(result?.error?.message || "Failed to send reset email", {
						duration: 5000,
					});
					return;
				}

				setEmailSent(true);
			} catch (error: any) {
				console.error("Password reset error:", error);
				toast.error(error?.message || "Failed to send reset email", {
					duration: 5000,
				});
			} finally {
				setLoading(false);
			}
		},
	});

	if (emailSent) {
		return (
			<AuthSuccessState
				icon="mail"
				title="Check your email"
				description="We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password."
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
				subtitle="Enter your email address and we'll send you a link to reset your password"
			/>

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

				<Field orientation="horizontal">
					<Button
						type="submit"
						variant="default"
						size="lg"
						className="w-full bg-[rgb(var(--st-orange))] text-white hover:bg-[rgb(var(--st-orange-hover))]"
						disabled={loading || !form.state.isValid}
					>
						{loading ? "Sending..." : "Send Reset Link"}
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
