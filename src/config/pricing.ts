export type PlanName = "Starter" | "Growth";

export interface PricingPlan {
	name: PlanName;
	price: number;
	period: string;
	description: string;
	features: string[];
	highlighted: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
	{
		name: "Starter",
		price: 79,
		period: "month",
		description: "For businesses that only need SMS + email reminders",
		features: [
			"Up to 150 reminders (SMS/email only)",
			"AI-generated personalized messages",
			"Basic dashboard",
			"Email support",
		],
		highlighted: false,
	},
	{
		name: "Growth",
		price: 199,
		period: "month",
		description: "For businesses that want AI voice calls + higher usage",
		features: [
			"Up to 300 reminders total",
			"Up to 100 AI voice calls / month",
			"SMS + email + voice automation",
			"Instant booking during AI call",
			"Conversion dashboard",
			"Priority email support",
		],
		highlighted: true,
	},
];

export function getPlanByName(planName: string): PricingPlan | undefined {
	return PRICING_PLANS.find((plan) => plan.name === planName);
}


