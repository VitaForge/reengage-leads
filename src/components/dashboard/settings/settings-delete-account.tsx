"use client";

import { AlertTriangle, Trash2 } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnalyticsEvent } from "@/lib/analytics";
import { authClient } from "@/server/better-auth/client";

interface SettingsDeleteAccountProps {
	userEmail: string;
}

export function SettingsDeleteAccount({
	userEmail,
}: SettingsDeleteAccountProps) {
	const posthog = usePostHog();
	const [isDeleting, setIsDeleting] = useState(false);
	const [confirmEmail, setConfirmEmail] = useState("");
	const [showConfirm, setShowConfirm] = useState(false);
	const router = useRouter();

	const handleDeleteAccount = async () => {
		if (confirmEmail !== userEmail) {
			toast.error(
				"Email does not match. Please enter your email address correctly."
			);
			return;
		}

		try {
			setIsDeleting(true);
			await (authClient as any).deleteUser();
			// Track account deletion
			posthog?.capture(AnalyticsEvent.ACCOUNT_DELETE);
			await authClient.signOut();
			toast.success("Account deleted successfully");
			router.push("/");
		} catch (error: any) {
			console.error("Delete account error:", error);
			toast.error(
				error?.message || "Failed to delete account. Please try again."
			);
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div>
			<div className="mb-4">
				<CardTitle className="text-destructive flex items-center gap-2">
					<Trash2 className="h-5 w-5" />
					Delete Account
				</CardTitle>
				<p className="text-muted-foreground mt-1 text-sm">
					Permanently delete your account and all associated data. This action
					cannot be undone.
				</p>
			</div>
			<div className="space-y-4">
				{!showConfirm ? (
					<>
						<div className="rounded-lg border border-red-100 bg-red-50 p-4">
							<div className="flex items-start gap-3">
								<AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
								<div className="flex-1">
									<p className="mb-1 text-sm font-medium text-red-700">
										Warning: This action is irreversible
									</p>
									<p className="text-sm text-gray-600">
										Once you delete your account, all your data, subscriptions,
										and settings will be permanently removed. You will not be
										able to recover any of this information.
									</p>
								</div>
							</div>
						</div>
						<Button
							onClick={() => setShowConfirm(true)}
							className="w-full bg-red-600 text-white hover:bg-red-700"
						>
							Delete My Account
						</Button>
					</>
				) : (
					<>
						<div className="rounded-lg border border-red-100 bg-red-50 p-4">
							<div className="flex items-start gap-3">
								<AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
								<div className="flex-1">
									<p className="mb-1 text-sm font-medium text-red-700">
										Are you absolutely sure?
									</p>
									<p className="mb-4 text-sm text-gray-600">
										To confirm, please type your email address:{" "}
										<strong>{userEmail}</strong>
									</p>
									<Input
										type="email"
										value={confirmEmail}
										onChange={(e) => setConfirmEmail(e.target.value)}
										placeholder="Enter your email to confirm"
										className="bg-background"
									/>
								</div>
							</div>
						</div>
						<div className="flex gap-2">
							<Button
								variant="outline"
								onClick={() => {
									setShowConfirm(false);
									setConfirmEmail("");
								}}
								className="flex-1"
								disabled={isDeleting}
							>
								Cancel
							</Button>
							<Button
								onClick={handleDeleteAccount}
								disabled={isDeleting || confirmEmail !== userEmail}
								className="flex-1 bg-red-600 text-white hover:bg-red-700"
							>
								{isDeleting ? "Deleting..." : "Yes, Delete My Account"}
							</Button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
