"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Trash2, AlertTriangle } from "lucide-react";

import { authClient } from "@/server/better-auth/client";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface SettingsDeleteAccountProps {
	userEmail: string;
}

export function SettingsDeleteAccount({ userEmail }: SettingsDeleteAccountProps) {
	const [isDeleting, setIsDeleting] = useState(false);
	const [confirmEmail, setConfirmEmail] = useState("");
	const [showConfirm, setShowConfirm] = useState(false);
	const router = useRouter();

	const handleDeleteAccount = async () => {
		if (confirmEmail !== userEmail) {
			toast.error("Email does not match. Please enter your email address correctly.");
			return;
		}

		try {
			setIsDeleting(true);
			await (authClient as any).deleteUser();
			await authClient.signOut();
			toast.success("Account deleted successfully");
			router.push("/");
		} catch (error: any) {
			console.error("Delete account error:", error);
			toast.error(error?.message || "Failed to delete account. Please try again.");
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div>
			<div className="mb-4">
				<CardTitle className="flex items-center gap-2 text-destructive">
					<Trash2 className="h-5 w-5" />
					Delete Account
				</CardTitle>
				<p className="text-sm text-muted-foreground mt-1">
					Permanently delete your account and all associated data. This action cannot be undone.
				</p>
			</div>
			<div className="space-y-4">
				{!showConfirm ? (
					<>
						<div className="rounded-lg bg-red-50 p-4 border border-red-100">
							<div className="flex items-start gap-3">
								<AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
								<div className="flex-1">
									<p className="text-sm font-medium text-red-700 mb-1">
										Warning: This action is irreversible
									</p>
									<p className="text-sm text-gray-600">
										Once you delete your account, all your data, subscriptions, and settings will be permanently removed. You will not be able to recover any of this information.
									</p>
								</div>
							</div>
						</div>
						<Button
							onClick={() => setShowConfirm(true)}
							className="w-full bg-red-600 hover:bg-red-700 text-white"
						>
							Delete My Account
						</Button>
					</>
				) : (
					<>
						<div className="rounded-lg bg-red-50 p-4 border border-red-100">
							<div className="flex items-start gap-3">
								<AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
								<div className="flex-1">
									<p className="text-sm font-medium text-red-700 mb-1">
										Are you absolutely sure?
									</p>
									<p className="text-sm text-gray-600 mb-4">
										To confirm, please type your email address: <strong>{userEmail}</strong>
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
								className="flex-1 bg-red-600 hover:bg-red-700 text-white"
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

