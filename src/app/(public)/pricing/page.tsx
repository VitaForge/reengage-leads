import { PricingSection } from "@/components/landing/pricing-section";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PricingPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<PricingSection />
			</main>
			<Footer />
		</div>
	);
}

