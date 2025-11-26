"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

import { useState } from "react";

import { cn } from "@/lib/utils";

interface CardSwapProps {
	cards: Array<{
		id: string;
		title: string;
		content: React.ReactNode;
		highlighted?: boolean;
	}>;
	className?: string;
}

export function CardSwap({ cards, className }: CardSwapProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!cards || cards.length === 0) return null;

	const activeCard = cards[activeIndex];

	return (
		<div className={cn("relative", className)}>
			{/* Card Container */}
			<div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 p-8">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCard.id}
						initial={{ opacity: 0, x: 100, scale: 0.9 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: -100, scale: 0.9 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="h-full"
					>
						<div
							className={cn(
								"relative rounded-lg border-0 bg-white p-6",
								activeCard.highlighted ? "shadow-xl" : "shadow-lg"
							)}
						>
							{activeCard.highlighted && (
								<div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]">
									<Check className="h-5 w-5 text-white" />
								</div>
							)}
							<h4 className="mb-4 font-semibold text-gray-900">
								{activeCard.title}
							</h4>
							{activeCard.content}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Navigation Dots */}
			{cards.length > 1 && (
				<div className="mt-4 flex justify-center gap-2">
					{cards.map((card, index) => (
						<button
							type="button"
							key={card.id}
							onClick={() => setActiveIndex(index)}
							className={cn(
								"h-2 rounded-full transition-all",
								index === activeIndex
									? "w-8 bg-[rgb(var(--st-orange))]"
									: "w-2 bg-gray-300 hover:bg-gray-400"
							)}
							aria-label={`Switch to ${card.title}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
