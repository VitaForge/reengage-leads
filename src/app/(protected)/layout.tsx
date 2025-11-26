import type { ReactNode } from "react";

import { redirect } from "next/navigation";

import { getSession } from "@/server/better-auth/server";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default async function DashboardLayout({
	children,
}: DashboardLayoutProps) {
	const session = await getSession();

	if (!session?.user?.id) {
		redirect(`/sign-in`);
	}

	return <>{children}</>;
}
