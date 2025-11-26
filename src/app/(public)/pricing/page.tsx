import type { Metadata } from "next";

import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { PricingSection } from "@/components/landing/pricing-section";

export const metadata: Metadata = {
	title: "Pricing",
	description:
		"Simple, affordable pricing for small service businesses. Choose the plan that fits your needs. No hidden fees, no long-term contracts.",
	alternates: {
		canonical: "/pricing",
	},
};

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

