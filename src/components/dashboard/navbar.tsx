"use client";

import { Menu, X } from "lucide-react";

import { ReactNode, createContext, useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarContextType {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within SidebarProvider");
	}
	return context;
}

interface DashboardTopNavProps {
	children: ReactNode;
	logo: ReactNode;
}

export default function DashboardTopNav({
	children,
	logo,
}: DashboardTopNavProps) {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<div className="flex h-screen flex-col overflow-hidden">
			{/* Top Navigation Bar */}
			<header className="flex h-16 items-center border-b bg-white px-6">
				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</Button>
					<div className="hidden md:block">{logo}</div>
				</div>
				<div className="ml-auto flex items-center gap-4">
					{/* User menu or other top nav items can go here */}
				</div>
			</header>

			{/* Main Content Area */}
			<main className="flex-1 overflow-y-auto">{children}</main>
		</div>
	);
}
