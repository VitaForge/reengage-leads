import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
	href?: string;
	textClassName?: string;
	size?: "sm" | "md" | "lg";
}

export function Logo({ href = "/", textClassName, size = "md" }: LogoProps) {
	const sizeClasses = {
		sm: "h-8 w-8",
		md: "h-10 w-10",
		lg: "h-12 w-12",
	};

	const textSizeClasses = {
		sm: "text-xl",
		md: "text-2xl",
		lg: "text-3xl",
	};

	return (
		<Link className="flex items-center space-x-2" href={href}>
			<Image
				alt="ReEngage Logo"
				className={sizeClasses[size]}
				height={size === "sm" ? 32 : size === "md" ? 40 : 48}
				src="/logo.png"
				width={size === "sm" ? 32 : size === "md" ? 40 : 48}
			/>
			<span
				className={cn(
					"font-bold",
					textSizeClasses[size],
					textClassName || "text-gray-900"
				)}
			>
				ReEngage
			</span>
		</Link>
	);
}
