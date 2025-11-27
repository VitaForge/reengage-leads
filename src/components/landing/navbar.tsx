"use client";

import { Menu, X } from "lucide-react";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Logo } from "@/components/branding/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { openTallyForm } from "@/lib/tally";

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const navigationLinks = [
		{ href: "#how-it-works", label: "How it Works" },
		{ href: "#faq", label: "FAQ" },
	];

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-colors duration-300",
				isScrolled
					? "border-b border-gray-200 bg-white text-gray-900 shadow-md"
					: "bg-[rgb(var(--st-dark-darker))] text-white"
			)}
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex h-16 items-center justify-between">
					{/* Logo and Navigation */}
					<div className="flex items-center gap-8">
						<Logo
							href="/"
							textClassName={cn(
								"leading-none transition-colors",
								isScrolled ? "text-gray-900" : "text-white"
							)}
						/>

						{/* Desktop Navigation */}
						<nav className="hidden items-center justify-center space-x-6 md:flex">
							{navigationLinks.map((link) => (
								<Link
									className={cn(
										"flex items-center text-sm leading-none font-semibold transition-colors",
										isScrolled
											? "text-gray-700 hover:text-[rgb(var(--st-orange))]"
											: "text-white hover:text-[rgb(var(--st-orange))]"
									)}
									href={link.href}
									key={link.href}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Right Side */}
					<div className="flex items-center gap-3">
						<Button
							className={cn(
								"hidden border-2 bg-transparent px-6 font-semibold text-white hover:bg-white/10 md:inline-flex",
								isScrolled
									? "border-gray-900 text-gray-900 hover:bg-gray-100"
									: "border-white"
							)}
							variant="outline"
							onClick={openTallyForm}
						>
							Get Started
						</Button>

						{/* Mobile Menu Button */}
						<button
							type="button"
							aria-label="Toggle menu"
							className="p-2 md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X
									className={cn(
										"h-6 w-6 transition-colors",
										isScrolled ? "text-gray-900" : "text-white"
									)}
								/>
							) : (
								<Menu
									className={cn(
										"h-6 w-6 transition-colors",
										isScrolled ? "text-gray-900" : "text-white"
									)}
								/>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div
						className={cn(
							"py-4 md:hidden",
							isScrolled
								? "border-t border-gray-200 bg-white"
								: "bg-[rgb(var(--st-dark-darker))]"
						)}
					>
						<nav className="flex flex-col space-y-4">
							{navigationLinks.map((link) => (
								<Link
									className={cn(
										"py-2 text-sm font-semibold transition-colors hover:text-[rgb(var(--st-orange))]",
										isScrolled ? "text-gray-700" : "text-white"
									)}
									href={link.href}
									key={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<Button
								className={cn(
									"mt-2 w-full border-2 bg-transparent font-semibold text-white hover:bg-white/10",
									isScrolled
										? "border-gray-900 text-gray-900 hover:bg-gray-100"
										: "border-white"
								)}
								variant="outline"
								onClick={() => {
									setIsMobileMenuOpen(false);
									openTallyForm();
								}}
							>
								Get Started
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
