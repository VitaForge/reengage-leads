"use client";

import { LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";

import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/server/better-auth/client";

interface UserMenuProps {
	user: {
		name: string | null;
		email: string;
		image: string | null;
	};
}

export function UserMenu({ user }: UserMenuProps) {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const handleLogout = async () => {
		try {
			await authClient.signOut();
			toast.success("Signed out successfully");
			router.push("/");
		} catch (error) {
			console.error("Logout error:", error);
			toast.error("Failed to sign out");
		}
	};

	const getInitials = (name: string | null, email: string) => {
		if (name) {
			const parts = name.split(" ");
			if (parts.length >= 2) {
				return `${parts?.[0]?.[0]}${parts?.[parts.length - 1]?.[0]}`.toUpperCase();
			}
			return name[0]?.toUpperCase() || email[0]?.toUpperCase() || "U";
		}
		return email[0]?.toUpperCase() || "U";
	};

	return (
		<div className="relative" ref={menuRef}>
			<Button
				variant="ghost"
				size="icon"
				className="h-10 w-10 rounded-full"
				onClick={() => setIsOpen(!isOpen)}
			>
				{user.image ? (
					<img
						src={user.image}
						alt={user.name || user.email}
						className="h-10 w-10 rounded-full"
					/>
				) : (
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--st-orange))] text-sm font-semibold text-white">
						{getInitials(user.name, user.email)}
					</div>
				)}
			</Button>

			{isOpen && (
				<div className="absolute top-12 right-0 z-50 w-56 rounded-md border border-gray-200 bg-white shadow-lg">
					<div className="p-2">
						<div className="mb-2 border-b border-gray-200 px-3 py-2">
							<p className="text-sm font-semibold text-gray-900">
								{user.name || "User"}
							</p>
							<p className="text-xs text-gray-500">{user.email}</p>
						</div>
						<Button
							variant="ghost"
							className="w-full justify-start"
							onClick={() => {
								setIsOpen(false);
								router.push("/dashboard/settings");
							}}
						>
							<Settings className="mr-2 h-4 w-4" />
							Settings
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
							onClick={handleLogout}
						>
							<LogOut className="mr-2 h-4 w-4" />
							Logout
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
