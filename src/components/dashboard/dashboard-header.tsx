"use client";

import { ArrowLeft } from "lucide-react";

import Link from "next/link";

import { UserMenu } from "@/components/dashboard/user-menu";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
	user: {
		name: string | null;
		email: string;
		image: string | null;
	};
	backHref: string;
	backText: string;
}

export function DashboardHeader({
	user,
	backHref,
	backText,
}: DashboardHeaderProps) {
	return (
		<div className="absolute top-4 right-4 left-4 z-10 flex shrink-0 items-center justify-between px-4 pt-4 pb-2 md:px-6">
			<Button variant="ghost" asChild>
				<Link href={backHref}>
					<ArrowLeft className="h-4 w-4" />
					{backText}
				</Link>
			</Button>
			<UserMenu user={user} />
		</div>
	);
}

