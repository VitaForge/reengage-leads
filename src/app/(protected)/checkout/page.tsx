"use client";

import { Clock } from "lucide-react";

import { useEffect, useState } from "react";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { authClient } from "@/server/better-auth/client";

export default function CheckoutPage() {
	const [user, setUser] = useState<{
		name: string | null;
		email: string;
		image: string | null;
	} | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const session = await authClient.getSession();
				if (session?.data?.user) {
					setUser({
						name: session.data.user.name || null,
						email: session.data.user.email || "",
						image: session.data.user.image || null,
					});
				}
			} catch (error) {
				console.error("Failed to get session:", error);
			}
		})();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header with Back Button and Profile Icon */}
			{user && (
				<DashboardHeader
					user={user}
					backHref="/dashboard"
					backText="Back to Plans"
				/>
			)}
			<main className="flex min-h-screen items-center justify-center py-12">
				<div className="container mx-auto max-w-2xl px-4 text-center md:px-6">
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
						<Clock className="h-8 w-8 text-[rgb(var(--st-orange))]" />
					</div>
					<h1 className="mb-4 text-2xl font-semibold">Waitlist</h1>
					<p className="text-gray-600">
						Apologies but we are experiencing high load and added you to our
						waitlist, we will send you a payment link over the next days
					</p>
				</div>
			</main>
		</div>
	);
}
