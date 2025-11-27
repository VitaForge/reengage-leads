"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { usePostHog } from "posthog-js/react";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { AnalyticsEvent } from "@/lib/analytics";
import { openTallyForm } from "@/lib/tally";

const conversation = [
	{
		id: 1,
		sender: "agent",
		message: "Hey there! Mark from ReEngage here. How's it going?",
	},
	{
		id: 2,
		sender: "user",
		message: "Hi Mark! Doing well, thanks for asking.",
	},
	{
		id: 3,
		sender: "agent",
		message:
			"Great to hear! I noticed we installed your AC system about a year ago. It's time for your annual maintenance to keep it running smoothly.",
	},
	{
		id: 4,
		sender: "user",
		message: "Oh right, that makes sense. What does the maintenance include?",
	},
	{
		id: 5,
		sender: "agent",
		message:
			"We'll clean the filters, check the refrigerant levels, inspect the coils, and make sure everything is working efficiently. Takes about an hour.",
	},
	{
		id: 6,
		sender: "user",
		message: "Sounds good! When can you come by?",
	},
	{
		id: 7,
		sender: "agent",
		message:
			"How does next Tuesday or Wednesday work for you? I have slots available both mornings and afternoons.",
	},
	{
		id: 8,
		sender: "user",
		message: "Tuesday afternoon would be perfect!",
	},
	{
		id: 9,
		sender: "agent",
		message:
			"Perfect! I've got you scheduled for Tuesday at 2 PM. You'll get a reminder the day before. See you then!",
	},
	{
		id: 10,
		sender: "user",
		message: "Awesome, thanks Mark! Looking forward to it.",
	},
];

export function HeroSection() {
	const posthog = usePostHog();
	const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
	const nextMessageIndexRef = useRef(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleCTAClick = () => {
		posthog?.capture(AnalyticsEvent.CTA_CLICK, {
			location: "hero_section",
			cta_text: "Start Re-engaging Leads",
		});
		openTallyForm();
	};

	useEffect(() => {
		const showNextMessage = () => {
			const currentIndex = nextMessageIndexRef.current;

			if (currentIndex < conversation.length) {
				setVisibleMessages((prev) => {
					// Keep max 5 messages, remove first if adding 6th
					if (prev.length >= 5) {
						return [...prev.slice(1), currentIndex];
					}
					return [...prev, currentIndex];
				});
				nextMessageIndexRef.current += 1;

				// Schedule next message
				timeoutRef.current = setTimeout(() => {
					showNextMessage();
				}, 2500);
			} else {
				// Conversation complete, wait then restart
				timeoutRef.current = setTimeout(() => {
					nextMessageIndexRef.current = 0;
					setVisibleMessages([]);
					showNextMessage();
				}, 3000);
			}
		};

		// Start showing messages
		showNextMessage();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);
	return (
		<section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-visible bg-[rgb(var(--st-dark-darker))] py-12 text-white md:py-16">
			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="grid items-center gap-12 md:grid-cols-2">
					{/* Left Content */}
					<div className="space-y-6 text-center md:text-left">
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.2,
							}}
							className="text-5xl leading-tight font-bold md:text-5xl lg:text-6xl"
						>
							Turn forgotten appointments into{" "}
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.6,
									delay: 0.8,
								}}
							>
								<Highlighter
									action="underline"
									color="rgb(var(--st-orange))"
									strokeWidth={8}
									animationDuration={800}
									iterations={1}
								>
									recurring revenue
								</Highlighter>
							</motion.span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.5,
							}}
						className="text-lg text-gray-300 md:text-xl"
					>
						A done-for-you service that turns forgotten appointments into recurring revenue.
					</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.8,
							}}
							className="mt-16 flex max-w-md md:justify-start justify-center"
						>
							<Button
								className="h-12 bg-[rgb(var(--st-red))] px-8 text-base font-semibold text-white hover:bg-[rgb(var(--st-red-hover))]"
								size="lg"
								onClick={handleCTAClick}
							>
								<span className="flex items-center gap-2">
									Get Started
									<Rocket className="h-5 w-5" />
								</span>
							</Button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Right Image - positioned absolutely from screen edge */}
			<div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-visible md:block">
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						ease: [0.16, 1, 0.3, 1],
						delay: 0.3,
					}}
					className="relative h-full w-full"
				>
					<div className="relative h-full w-full overflow-hidden">
						<Image
							alt="AI-Powered Customer Re-engagement"
							className="h-full w-full scale-110 object-cover object-[60%_center]"
							fill
							src="/hero.jpg"
						/>
						{/* Fade overlays to blend with background */}
						{/* Top fade */}
						<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgb(var(--st-dark-darker))] to-transparent" />
						{/* Bottom fade */}
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgb(var(--st-dark-darker))] to-transparent" />
						{/* Left fade */}
						<div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgb(var(--st-dark-darker))] to-transparent" />
					</div>

					{/* Conversation Chat Bubbles */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.6,
							ease: [0.16, 1, 0.3, 1],
							delay: 1.2,
						}}
						className="pointer-events-none absolute top-32 -left-16 z-30 max-w-md"
					>
						<div className="flex flex-col gap-3">
							<AnimatePresence mode="popLayout">
								{visibleMessages.map((messageIndex) => {
									const message = conversation[messageIndex];
									if (!message) return null;

									const isAgent = message.sender === "agent";

									return (
										<motion.div
											key={message.id}
											initial={{
												opacity: 0,
												y: 10,
												scale: 0.95,
												x: isAgent ? -20 : 20,
											}}
											animate={{
												opacity: 1,
												y: 0,
												scale: 1,
												x: 0,
											}}
											exit={{
												opacity: 0,
												scale: 0.9,
												transition: {
													duration: 0.2,
												},
											}}
											transition={{
												duration: 0.5,
												type: "spring",
												stiffness: 300,
												damping: 25,
											}}
											className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
										>
											<div
												className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-lg ${
													isAgent
														? "bg-white text-gray-900"
														: "bg-[rgb(var(--st-orange))] text-white"
												}`}
											>
												<p className="text-sm leading-relaxed">
													{message.message}
												</p>
											</div>
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
