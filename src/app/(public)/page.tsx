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
