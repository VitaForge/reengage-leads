import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PricingSection } from "@/components/landing/pricing-section";
import { getSession } from "@/server/better-auth/server";

export default async function DashboardPage() {
	const session = await getSession();

	const user = {
		name: session?.user?.name || null,
		email: session?.user?.email || "",
		image: session?.user?.image || null,
	};

	return (
		<div className="flex h-screen max-h-screen flex-col overflow-hidden">
			<DashboardHeader user={user} backHref="/" backText="Back Home" />
			<div className="flex min-h-0 flex-1 items-center overflow-y-auto pt-4">
				<div className="w-full">
					<PricingSection />
				</div>
			</div>
		</div>
	);
}
