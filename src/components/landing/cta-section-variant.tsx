"use client";

import { usePostHog } from "posthog-js/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { AnalyticsEvent } from "@/lib/analytics";
import { openTallyForm } from "@/lib/tally";
import { Button } from "@/components/ui/button";

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

export function CTASectionVariant() {
	const posthog = usePostHog();

	const handleCTAClick = () => {
		posthog?.capture(AnalyticsEvent.CTA_CLICK, {
			location: "cta_section_mid",
			cta_text: "Get a Free Consultation",
		});
		openTallyForm();
	};

	return (
		<section className="bg-gradient-to-br from-[rgb(var(--st-orange))]/10 to-[rgb(var(--st-red))]/10 py-20">
			<div className="container mx-auto px-4 md:px-6">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
					className="mx-auto max-w-4xl text-center"
				>
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Ready to Turn Forgotten Appointments Into Revenue?
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
						Let us handle your customer re-engagement. Get started with a free
						consultation and see how we can turn missed bookings into predictable
						recurring revenue for your business.
					</p>
					<Button
						className="bg-[rgb(var(--st-orange))] px-8 text-base font-semibold text-white hover:bg-[rgb(var(--st-orange-hover))]"
						size="lg"
						onClick={handleCTAClick}
					>
						<span className="flex items-center gap-2">
							Get a Free Consultation
							<ArrowRight className="h-5 w-5" />
						</span>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}

