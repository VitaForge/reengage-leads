import type { ReactNode } from "react";

import { redirect } from "next/navigation";

import { AuthSidePanel } from "@/components/auth/auth-side-panel";
import { getSession } from "@/server/better-auth/server";

interface AuthLayoutProps {
	children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
	const session = await getSession();

	if (session?.user?.id) {
		redirect("/dashboard");
	}

	return (
		<div className="relative flex min-h-screen bg-white">
			{/* Side Panel - Desktop only */}
			<AuthSidePanel
				title="Never Let a Customer Forget Their Annual Service Again"
				description="AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings."
			/>

			{/* Main Content */}
			<div className="flex flex-1 flex-col">
				{/* Header */}
				<div className="flex items-center justify-end p-6">
					{/* Header content can be added here if needed */}
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
					{children}
				</div>
			</div>
		</div>
	);
}
