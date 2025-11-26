import * as React from "react";
import { cn } from "@/lib/utils";

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function FieldGroup({ className, children, ...props }: FieldGroupProps) {
	return (
		<div className={cn("space-y-4", className)} {...props}>
			{children}
		</div>
	);
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	"data-invalid"?: boolean;
	orientation?: "horizontal" | "vertical";
}

export function Field({
	className,
	children,
	"data-invalid": dataInvalid,
	orientation = "vertical",
	...props
}: FieldProps) {
	return (
		<div
			className={cn(
				orientation === "horizontal"
					? "flex items-center gap-2"
					: "space-y-2",
				dataInvalid && "text-destructive",
				className,
			)}
			data-invalid={dataInvalid}
			{...props}
		>
			{children}
		</div>
	);
}

export interface FieldLabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

export function FieldLabel({
	className,
	children,
	...props
}: FieldLabelProps) {
	return (
		<label
			className={cn(
				"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className,
			)}
			{...props}
		>
			{children}
		</label>
	);
}

export interface FieldErrorProps extends React.HTMLAttributes<HTMLDivElement> {
	errors?: string[] | string | unknown;
}

function extractErrorMessage(error: unknown): string {
	if (!error) return "";
	if (typeof error === "string") return error;
	if (typeof error === "object") {
		// Check for message property
		if ("message" in error && typeof error.message === "string") {
			return error.message;
		}
		// Check for other common error properties
		if ("error" in error && typeof error.error === "string") {
			return error.error;
		}
		// Try to get the first string value from the object
		const errorObj = error as Record<string, unknown>;
		for (const key in errorObj) {
			if (typeof errorObj[key] === "string" && errorObj[key]) {
				return errorObj[key] as string;
			}
		}
		// Last resort: try to stringify
		try {
			const stringified = JSON.stringify(error);
			// If it's just an empty object or array, return generic message
			if (stringified === "{}" || stringified === "[]") {
				return "An error occurred";
			}
			return stringified;
		} catch {
			return "An error occurred";
		}
	}
	return String(error);
}

export function FieldError({ className, errors, ...props }: FieldErrorProps) {
	if (!errors) return null;

	const errorMessages = Array.isArray(errors)
		? errors.map(extractErrorMessage).filter(Boolean)
		: [extractErrorMessage(errors)].filter(Boolean);

	if (errorMessages.length === 0) return null;

	return (
		<div
			className={cn("text-sm text-red-600", className)}
			{...props}
		>
			{errorMessages.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</div>
	);
}

