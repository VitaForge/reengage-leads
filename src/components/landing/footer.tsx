import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import Link from "next/link";

import { Logo } from "@/components/branding/logo";

export function Footer() {
	return (
		<footer className="relative bg-[rgb(var(--st-dark))] py-16 text-white">
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/20" />
			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="mb-12 grid gap-8 md:grid-cols-4">
					{/* Logo Column */}
					<div className="md:col-span-1">
						<div className="mb-4">
							<Logo href="/" size="sm" textClassName="text-white" />
						</div>
						<p className="text-sm leading-relaxed font-semibold text-gray-400">
							AI-powered voice and SMS reminders that automatically re-engage
							customers and drive repeat bookings.
						</p>
					</div>

					{/* Features Column */}
					<div>
						<h3 className="mb-4 font-semibold">Features</h3>
						<ul className="space-y-2 text-sm font-semibold text-gray-400">
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#how-it-works"
								>
									How it Works
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#solution"
								>
									Solution
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#works-best-for"
								>
									Works Best For
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#pricing"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					{/* Business Column */}
					<div>
						<h3 className="mb-4 font-semibold">Business</h3>
						<ul className="space-y-2 text-sm font-semibold text-gray-400">
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/sign-up"
								>
									Get Started
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#pricing"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#faq"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h3 className="mb-4 font-semibold">Company</h3>
						<ul className="space-y-2 text-sm font-semibold text-gray-400">
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/privacy"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/terms"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-[rgb(var(--st-border))] pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex gap-4">
							<a
								aria-label="Facebook"
								className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[rgb(var(--st-orange))]"
								href="#"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								aria-label="Instagram"
								className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[rgb(var(--st-orange))]"
								href="#"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								aria-label="Twitter"
								className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[rgb(var(--st-orange))]"
								href="#"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								aria-label="LinkedIn"
								className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[rgb(var(--st-orange))]"
								href="#"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								aria-label="YouTube"
								className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[rgb(var(--st-orange))]"
								href="#"
							>
								<Youtube className="h-5 w-5" />
							</a>
						</div>
						<div className="text-center text-sm font-semibold text-gray-400 md:text-right">
							Copyright © {new Date().getFullYear()} ReEngage.{" "}
							<Link className="underline hover:text-white" href="/privacy">
								Privacy Policy
							</Link>
							.{" "}
							<Link className="underline hover:text-white" href="/terms">
								Terms of Service
							</Link>
							.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
