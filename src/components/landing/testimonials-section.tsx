"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		quote:
			"Our customers never forget their HVAC tune-ups anymore — and our bookings have increased 30%.",
		author: "Local HVAC Owner",
		company: "HVAC Services Inc.",
	},
	{
		quote:
			"This tool saves me hours every week. The AI calls actually sound like a real person and convert way better than emails.",
		author: "Pool Maintenance Business Owner",
		company: "Crystal Clear Pools",
	},
	{
		quote:
			"We've recovered thousands in lost revenue from forgotten annual service appointments. This is a game-changer.",
		author: "Pest Control Service Owner",
		company: "Bug-Free Services",
	},
];

export function TestimonialsSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goToPrevious = () => {
		setActiveIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	const goToNext = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};

	return (
		<section className="bg-gray-50 py-20" id="testimonials">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Trusted by Service Businesses
					</h2>
					<p className="text-lg text-gray-600">
						See what other service business owners are saying about ReEngage.
					</p>
				</div>

				<div className="mx-auto max-w-4xl">
					<div className="relative">
						<div className="overflow-hidden">
							<div
								className="flex transition-transform duration-500 ease-in-out"
								style={{
									transform: `translateX(-${activeIndex * 100}%)`,
								}}
							>
								{testimonials.map((testimonial, index) => (
									<div className="min-w-full px-4" key={index}>
										<Card className="border-0 shadow-lg">
											<CardContent className="p-8 md:p-12">
												<div className="flex items-start gap-4">
													<div className="text-5xl text-[rgb(var(--st-orange))] opacity-50">
														"
													</div>
													<div className="flex-1">
														<p className="mb-6 text-lg text-gray-700 italic md:text-xl">
															{testimonial.quote}
														</p>
														<div>
															<p className="font-semibold text-gray-900">
																— {testimonial.author}
															</p>
															<p className="text-sm text-gray-600">
																{testimonial.company}
															</p>
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									</div>
								))}
							</div>
						</div>

						{/* Navigation Buttons */}
						<div className="mt-8 flex justify-center gap-4">
							<Button
								className="rounded-full"
								onClick={goToPrevious}
								size="icon"
								variant="outline"
							>
								<ChevronLeft className="h-5 w-5" />
							</Button>
							<Button
								className="rounded-full"
								onClick={goToNext}
								size="icon"
								variant="outline"
							>
								<ChevronRight className="h-5 w-5" />
							</Button>
						</div>

						{/* Dots Indicator */}
						<div className="mt-4 flex justify-center gap-2">
							{testimonials.map((_, index) => (
								<button
									type="button"
									aria-label={`Go to testimonial ${index + 1}`}
									className={`h-2 w-2 rounded-full transition-all ${
										index === activeIndex
											? "w-8 bg-[rgb(var(--st-orange))]"
											: "bg-gray-300"
									}`}
									key={index}
									onClick={() => setActiveIndex(index)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
