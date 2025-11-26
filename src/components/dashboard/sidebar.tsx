"use client";

import {
	BarChart3,
	LayoutDashboard,
	MessageSquare,
	Phone,
	Settings,
	Users,
} from "lucide-react";

import { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebar } from "@/components/dashboard/navbar";
import { cn } from "@/lib/utils";

interface DashboardSideBarProps {
	children: ReactNode;
}

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
	{ name: "Calls", href: "/dashboard/calls", icon: Phone },
	{ name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
	{ name: "Customers", href: "/dashboard/customers", icon: Users },
	{ name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
	{ name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSideBar({ children }: DashboardSideBarProps) {
	const pathname = usePathname();
	const { isOpen } = useSidebar();

	return (
		<aside
			className={cn(
				"flex h-screen flex-col border-r bg-white transition-all duration-300",
				isOpen ? "w-64" : "w-0 overflow-hidden"
			)}
		>
			{/* Logo Section */}
			<div className="flex h-16 items-center border-b px-6">
				{isOpen && children}
			</div>

			{/* Navigation */}
			<nav className="flex-1 space-y-1 px-3 py-4">
				{navigation.map((item) => {
					const Icon = item.icon;
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
								isActive
									? "bg-[rgb(var(--st-orange))]/10 text-[rgb(var(--st-orange))]"
									: "text-gray-700 hover:bg-gray-100"
							)}
						>
							<Icon className="h-5 w-5" />
							{isOpen && <span>{item.name}</span>}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
