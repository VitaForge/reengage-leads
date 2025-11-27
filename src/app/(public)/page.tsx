import type { Metadata } from "next";

import { CTASection } from "@/components/landing/cta-section";
import { CTASectionVariant } from "@/components/landing/cta-section-variant";
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
		"We handle your customer re-engagement with AI voice calls, SMS, and email reminders that drive repeat bookings. A done-for-you service that turns forgotten appointments into recurring revenue.",
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
				<CTASectionVariant />
				{/* <TestimonialsSection /> */}
				{/* <PricingSection /> */}
				<FAQSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}
