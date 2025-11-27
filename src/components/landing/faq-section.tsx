"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { env } from "@/env";
import { cn } from "@/lib/utils";

const faqs = [
	{
		question: "How does the AI voice call booking work?",
		answer:
			"We use advanced AI to make personalized voice calls to your customers on your behalf. During the call, customers can confirm or schedule their service appointment directly - no back-and-forth emails or phone tag required. Our AI handles the entire conversation naturally and can book appointments in real-time.",
	},
	{
		question: "Can I customize the voice script?",
		answer:
			"Yes, we work with you to tailor the AI voice script for each service type or customer segment. We customize the messaging to match your brand voice and specific service offerings. We can also test different scripts to find what works best for your business.",
	},
	{
		question: "What happens if a customer doesn't answer the call?",
		answer:
			"If a customer doesn't answer the AI voice call, we automatically send SMS and email follow-ups. We configure multiple reminder attempts and customize the timing of follow-ups based on your preferences. We ensure no customer falls through the cracks.",
	},
	{
		question: "How many customers can you handle?",
		answer:
			"Our service scales to handle hundreds or thousands of contacts. We can import unlimited customers via CSV upload or integrate with your existing systems. There are no hard limits on the number of customers we can manage, making it perfect for businesses of all sizes.",
	},
	{
		question: "Do you integrate with my CRM?",
		answer:
			"Yes, we can integrate with your existing CRM or accounting software. We support CSV import for easy customer upload, and we're continuously adding integrations with popular CRMs like QuickBooks, Jobber, and others. We'll work with you to set up the integration that works best for your business.",
	},
	{
		question: "How does the booking work?",
		answer:
			"Customers can confirm or schedule service directly during the AI call, or they can click a link sent via SMS/email to book their appointment. The system automatically syncs bookings with your calendar or booking software. All bookings are tracked in your dashboard in real-time.",
	},
	{
		question: "What kind of service businesses is this for?",
		answer:
			"ReEngage is perfect for any service business that relies on recurring appointments, such as HVAC companies, plumbing services, electrical contractors, landscaping services, pest control, pool maintenance, and more. If you need to remind customers about annual or periodic services, ReEngage is for you.",
	},
	{
		question: "How accurate is the AI voice?",
		answer:
			"Our AI voice technology uses advanced text-to-speech that sounds natural and human-like. Customers often can't tell they're speaking with an AI. The voice maintains a professional, friendly tone that matches your brand and builds trust with your customers.",
	},
	{
		question: "Can I set up recurring service reminders?",
		answer:
			"Absolutely! You can set up automatic reminders for annual, quarterly, bi-annual, or custom intervals. The system tracks when each customer last had service and automatically sends reminders at the appropriate time. You can customize the timing for each service type.",
	},
	{
		question: "What kind of analytics do I get?",
		answer:
			"The dashboard provides real-time insights including call completion rates, booking conversion rates, response rates by message type, customer engagement metrics, and revenue tracking. You can see which messages and calls are driving the most conversions and optimize your campaigns accordingly.",
	},
	{
		question: "How quickly can we get started?",
		answer:
			"We can typically have your service up and running within a few days. We'll handle importing your customer list, setting up your service types and reminder schedules, and configuring everything to match your business needs. Once set up, we'll start making calls and sending reminders automatically.",
	},
	{
		question: "Do customers know they're talking to an AI?",
		answer:
			"The AI introduces itself appropriately during calls, maintaining transparency while still providing a natural conversation experience. Many customers appreciate the convenience of being able to book immediately without waiting for business hours or playing phone tag.",
	},
];

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<section className="bg-gray-50 py-20" id="faq">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUp}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-600">
							Have questions? We've got answers.
						</p>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={containerVariants}
						className="space-y-4"
					>
						{faqs.map((faq, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Card
									className="cursor-pointer border border-gray-300 bg-white shadow-md transition-shadow hover:shadow-lg"
									onClick={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
								>
									<CardContent className="!p-6">
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1">
												<h3 className="text-lg font-semibold">
													{faq.question}
												</h3>
												<div
													className={cn(
														"overflow-hidden transition-all duration-300",
														openIndex === index
															? "max-h-96 opacity-100"
															: "max-h-0 opacity-0"
													)}
												>
													<p className="mt-3 pt-0 pb-0 text-gray-600">
														{faq.answer}
													</p>
												</div>
											</div>
											<ChevronDown
												className={cn(
													"h-5 w-5 flex-shrink-0 text-gray-400 transition-transform",
													openIndex === index && "rotate-180"
												)}
											/>
										</div>
									</CardContent>
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
							Still have questions?{" "}
							<a
								className="font-semibold text-[rgb(var(--st-orange))] underline hover:text-[rgb(var(--st-orange-hover))]"
								href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}
							>
								Contact us
							</a>
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
