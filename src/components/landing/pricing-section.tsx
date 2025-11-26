"use client";

import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PRICING_PLANS } from "@/config/pricing";
import { env } from "@/env";

export function PricingSection() {
	const router = useRouter();

	const handleGetStarted = (planName: string) => {
		router.push(`/checkout?plan=${encodeURIComponent(planName)}`);
	};

	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	const cardContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<section className="w-full bg-white py-12" id="pricing">
			<div className="container mx-auto px-4 md:px-6">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
					className="mx-auto mb-16 max-w-3xl text-center"
				>
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Simple pricing for small businesses
					</h2>
					<p className="text-lg text-gray-600">
						Affordable plans designed for small service businesses. No hidden
						fees, no long-term contracts.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={cardContainer}
					className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:items-stretch"
				>
					{PRICING_PLANS.map((plan) => (
						<motion.div key={plan.name} variants={fadeInUp} className="h-full">
							<Card
								className={`relative flex h-full flex-col border border-gray-300 ${
									plan.highlighted ? "shadow-xl" : "shadow-md"
								}`}
							>
								{plan.highlighted && (
									<div className="absolute -top-4 left-1/2 -translate-x-1/2">
										<span className="rounded-full bg-[rgb(var(--st-orange))] px-4 py-1 text-xs font-semibold text-white">
											Most Popular
										</span>
									</div>
								)}
								<CardHeader className="text-center">
									<CardTitle className="text-2xl">{plan.name}</CardTitle>
									<CardDescription className="mt-2 text-gray-600">
										{plan.description}
									</CardDescription>
									<div className="mt-6">
										<span className="text-4xl font-bold text-gray-900">
											${plan.price}
										</span>
										<span className="text-gray-600">/{plan.period}</span>
									</div>
								</CardHeader>
								<CardContent className="flex-1">
									<ul className="space-y-3">
										{plan.features.map((feature, index) => (
											<li key={index} className="flex items-start gap-3">
												<Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[rgb(var(--st-orange))]" />
												<span className="text-sm text-gray-700">{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Button
										onClick={() => handleGetStarted(plan.name)}
										className={`w-full ${
											plan.highlighted
												? "bg-[rgb(var(--st-red))] hover:bg-[rgb(var(--st-red-hover))]"
												: "bg-[rgb(var(--st-orange))] hover:bg-[rgb(var(--st-orange-hover))]"
										} text-white`}
										size="lg"
									>
										Get Started
										<Rocket className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
					className="mx-auto mt-12 max-w-2xl text-center"
				>
					<p className="text-base text-gray-600">
						Didn't find a plan?{" "}
						<a
							className="font-semibold text-[rgb(var(--st-orange))] underline hover:text-[rgb(var(--st-orange-hover))]"
							href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}
						>
							Contact us
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
