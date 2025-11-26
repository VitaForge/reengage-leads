import { Clock, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

const benefits = [
	{
		icon: TrendingUp,
		title: "Increase Revenue",
		description:
			"Turn missed appointments into booked services and recover lost recurring revenue.",
		stat: "+30%",
		statLabel: "More Bookings",
		color: "from-green-500 to-emerald-600",
	},
	{
		icon: Clock,
		title: "Save Time",
		description:
			"No more manual calls or follow-ups. Automate everything and focus on running your business.",
		stat: "15hrs",
		statLabel: "Saved Per Week",
		color: "from-blue-500 to-cyan-600",
	},
	{
		icon: Users,
		title: "Improve Customer Retention",
		description:
			"Keep customers engaged year after year with timely, personalized service reminders.",
		stat: "92%",
		statLabel: "Retention Rate",
		color: "from-purple-500 to-pink-600",
	},
	{
		icon: Zap,
		title: "Scale Your Business",
		description:
			"Reach hundreds or thousands of customers without adding extra staff or overhead.",
		stat: "∞",
		statLabel: "Unlimited Scale",
		color: "from-[rgb(var(--st-orange))] to-[rgb(var(--st-orange-hover))]",
	},
];

export function BenefitsSection() {
	return (
		<section className="bg-white py-20" id="benefits">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="mb-4 font-bold text-3xl text-gray-900 md:text-4xl">
						Benefits for Your Service Business
					</h2>
					<p className="text-gray-600 text-lg">
						Transform how you manage customer re-engagement and watch your
						business grow.
					</p>
				</div>

				{/* Benefits with Stats - Card Style */}
				<div className="mx-auto mb-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						return (
							<div
								key={index}
								className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-[rgb(var(--st-orange))] hover:shadow-xl"
							>
								{/* Gradient Background on Hover */}
								<div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>
								
								<div className="relative">
									{/* Icon with Gradient */}
									<div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg`}>
										<Icon className="h-7 w-7 text-white" />
									</div>

									{/* Stats */}
									<div className="mb-4 flex items-baseline gap-2">
										<span className="font-bold text-3xl text-gray-900">
											{benefit.stat}
										</span>
										<span className="text-sm text-gray-500">
											{benefit.statLabel}
										</span>
									</div>

									<h3 className="mb-2 font-semibold text-xl text-gray-900">
										{benefit.title}
									</h3>
									<p className="mb-4 text-gray-600 text-sm">
										{benefit.description}
									</p>

									{/* Learn More Link */}
									<div className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--st-orange))] opacity-0 transition-opacity group-hover:opacity-100">
										<span>Learn more</span>
										<ArrowRight className="h-4 w-4" />
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA Banner */}
				<div className="mx-auto max-w-5xl">
					<div className="relative overflow-hidden rounded-2xl border-2 border-[rgb(var(--st-orange))] bg-gradient-to-r from-[rgb(var(--st-orange))]/10 via-white to-[rgb(var(--st-orange))]/5 p-8 md:p-12">
						<div className="relative z-10 text-center">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--st-orange))]/20 px-4 py-2">
								<Zap className="h-5 w-5 text-[rgb(var(--st-orange))]" />
								<span className="text-sm font-semibold text-[rgb(var(--st-orange))]">
									Key Insight
								</span>
							</div>
							<p className="mb-4 font-bold text-2xl text-gray-900 md:text-3xl">
								"Turn forgotten service appointments into revenue without lifting
								a finger."
							</p>
							<p className="text-lg text-gray-700">
								Join service businesses that are already using ReEngage to
								automate customer re-engagement and boost revenue.
							</p>
						</div>
						{/* Decorative Elements */}
						<div className="absolute bottom-0 right-0 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-[rgb(var(--st-orange))]/10 blur-3xl"></div>
						<div className="absolute left-0 top-0 h-24 w-24 translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--st-orange))]/10 blur-2xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
