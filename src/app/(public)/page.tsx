import type { Metadata } from "next";

import { CTASection } from "@/components/landing/cta-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { PricingSection } from "@/components/landing/pricing-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WorksBestForSection } from "@/components/landing/works-best-for-section";
import { env } from "@/env";

export const metadata: Metadata = {
	title: {
		default:
			"ReEngage - Never Let a Customer Forget Their Annual Service Again",
		template: "%s | ReEngage",
	},
	description:
		"AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings. Turn forgotten service appointments into revenue without lifting a finger.",
	keywords: [
		"customer re-engagement",
		"appointment reminders",
		"AI voice calls",
		"SMS reminders",
		"service business",
		"customer retention",
		"automated reminders",
	],
	authors: [{ name: "ReEngage" }],
	creator: "ReEngage",
	publisher: "ReEngage",
};

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<HeroSection />
				<SolutionSection />
				<FeaturesSection />
				<WorksBestForSection />
				{/* <TestimonialsSection /> */}
				<PricingSection />
				<FAQSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}
