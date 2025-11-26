import { AlertCircle, TrendingDown, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import Image from "next/image";

export function ProblemSolutionSection() {
	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4 md:px-6">
				{/* Problem Section - Pain Stack */}
				<div className="mb-20">
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
							<AlertCircle className="h-8 w-8 text-red-600" />
						</div>
						<h2 className="mb-4 font-bold text-3xl text-gray-900 md:text-4xl">
							The Hidden Cost of Forgotten Services
						</h2>
						<p className="text-gray-600 text-xl">
							Every forgotten appointment isn't just a missed booking—it's a cascade of problems that compound every month.
						</p>
					</div>

					{/* Pain Stack - Vertical Stacking */}
					<div className="mx-auto max-w-4xl">
						{/* Problem 1 - Foundation */}
						<div className="mb-6 rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-white p-8 shadow-sm">
							<div className="mb-4 flex items-start gap-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
									<DollarSign className="h-6 w-6 text-red-600" />
								</div>
								<div className="flex-1">
									<div className="mb-2 flex items-center gap-2">
										<span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
											PROBLEM #1
										</span>
										<span className="text-sm font-medium text-gray-500">The Foundation</span>
									</div>
									<h3 className="mb-3 font-bold text-2xl text-gray-900">
										Your Customers Forget Their Annual Service
									</h3>
									<p className="mb-4 text-gray-700 text-lg">
										It's not their fault—life gets busy. But when they forget to schedule their HVAC tune-up, pool maintenance, or pest control service, you lose that booking.
									</p>
									<div className="rounded-lg bg-white p-4 border border-red-200">
										<div className="text-sm text-gray-600 mb-1">Average Lost Revenue Per Customer</div>
										<div className="font-bold text-2xl text-red-600">$150 - $500</div>
										<div className="text-xs text-gray-500 mt-1">per forgotten service</div>
									</div>
								</div>
							</div>
						</div>

						{/* Arrow/Connector */}
						<div className="mb-6 flex justify-center">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
								<TrendingDown className="h-5 w-5 text-red-600" />
							</div>
						</div>

						{/* Problem 2 - Compounding */}
						<div className="mb-6 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-white p-8 shadow-sm">
							<div className="mb-4 flex items-start gap-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100">
									<Clock className="h-6 w-6 text-orange-600" />
								</div>
								<div className="flex-1">
									<div className="mb-2 flex items-center gap-2">
										<span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
											PROBLEM #2
										</span>
										<span className="text-sm font-medium text-gray-500">The Compounding Effect</span>
									</div>
									<h3 className="mb-3 font-bold text-2xl text-gray-900">
										You Spend Hours Every Week Chasing Down Customers
									</h3>
									<p className="mb-4 text-gray-700 text-lg">
										So you start making manual calls. Sending reminder emails. Texting customers. But with 200+ customers, that's 10-15 hours every week you could spend growing your business.
									</p>
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-lg bg-white p-4 border border-orange-200">
											<div className="text-sm text-gray-600 mb-1">Time Wasted Weekly</div>
											<div className="font-bold text-2xl text-orange-600">15 hours</div>
											<div className="text-xs text-gray-500 mt-1">on manual follow-ups</div>
										</div>
										<div className="rounded-lg bg-white p-4 border border-orange-200">
											<div className="text-sm text-gray-600 mb-1">Annual Cost</div>
											<div className="font-bold text-2xl text-orange-600">$15,000+</div>
											<div className="text-xs text-gray-500 mt-1">in lost productivity</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Arrow/Connector */}
						<div className="mb-6 flex justify-center">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
								<TrendingDown className="h-5 w-5 text-orange-600" />
							</div>
						</div>

						{/* Problem 3 - The Breaking Point */}
						<div className="mb-6 rounded-xl border-2 border-red-300 bg-gradient-to-r from-red-100 to-red-50 p-8 shadow-lg">
							<div className="mb-4 flex items-start gap-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-200">
									<Users className="h-6 w-6 text-red-700" />
								</div>
								<div className="flex-1">
									<div className="mb-2 flex items-center gap-2">
										<span className="rounded-full bg-red-200 px-3 py-1 text-xs font-bold text-red-800">
											PROBLEM #3
										</span>
										<span className="text-sm font-medium text-gray-500">The Breaking Point</span>
									</div>
									<h3 className="mb-3 font-bold text-2xl text-gray-900">
										Lost Customers = Lost Revenue Forever
									</h3>
									<p className="mb-4 text-gray-700 text-lg">
										When customers don't get reminded, they forget you exist. They find another service provider. You lose not just this year's booking—you lose a customer worth $1,500-$5,000 in lifetime value.
									</p>
									<div className="rounded-lg bg-white p-6 border-2 border-red-300">
										<div className="mb-4 grid gap-4 sm:grid-cols-3">
											<div className="text-center">
												<div className="text-sm text-gray-600 mb-1">Lost Bookings</div>
												<div className="font-bold text-3xl text-red-600">30-40%</div>
												<div className="text-xs text-gray-500 mt-1">of annual services</div>
											</div>
											<div className="text-center">
												<div className="text-sm text-gray-600 mb-1">Lost Revenue</div>
												<div className="font-bold text-3xl text-red-600">$15K-$50K</div>
												<div className="text-xs text-gray-500 mt-1">per year (100 customers)</div>
											</div>
											<div className="text-center">
												<div className="text-sm text-gray-600 mb-1">Customer Churn</div>
												<div className="font-bold text-3xl text-red-600">20-30%</div>
												<div className="text-xs text-gray-500 mt-1">due to poor follow-up</div>
											</div>
										</div>
										<div className="mt-4 rounded-lg bg-red-50 p-4 border border-red-200">
											<p className="text-center font-semibold text-red-900">
												The Real Cost: You're leaving $50,000+ on the table every year because customers forget to book.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Solution Section - After the Pain */}
				<div>
					{/* Header */}
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<h2 className="mb-4 font-bold text-3xl text-gray-900 md:text-4xl">
							Automate Customer Re-engagement on Autopilot
						</h2>
						<p className="text-gray-600 text-lg">
							Stop losing revenue to forgotten appointments. With ReEngage, your customers receive automated AI voice calls, SMS, and email reminders that actually get them to book—without you lifting a finger.
						</p>
					</div>

					{/* Central Image */}
					<div className="mx-auto mb-16 max-w-5xl">
						<div className="relative rounded-2xl overflow-hidden">
							<Image
								alt="ReEngage automation dashboard showing AI voice calls and customer reminders"
								className="w-full h-auto"
								height={600}
								src="/solution-image.png"
								width={1200}
							/>
						</div>
					</div>

					{/* Benefits Grid */}
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{/* Benefit 1 */}
							<div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
										<Clock className="h-6 w-6 text-[rgb(var(--st-orange))]" />
									</div>
								</div>
								<h3 className="mb-2 font-semibold text-gray-900">Save 15+ Hours Weekly</h3>
								<p className="text-gray-600 text-sm">
									No more manual calls or follow-ups. AI handles everything automatically.
								</p>
							</div>

							{/* Benefit 2 */}
							<div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
										<Users className="h-6 w-6 text-[rgb(var(--st-orange))]" />
									</div>
								</div>
								<h3 className="mb-2 font-semibold text-gray-900">95%+ Booking Rate</h3>
								<p className="text-gray-600 text-sm">
									Automated reminders ensure customers never forget their annual service.
								</p>
							</div>

							{/* Benefit 3 */}
							<div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
										<DollarSign className="h-6 w-6 text-[rgb(var(--st-orange))]" />
									</div>
								</div>
								<h3 className="mb-2 font-semibold text-gray-900">Recover $50K+ Annually</h3>
								<p className="text-gray-600 text-sm">
									Turn forgotten appointments into predictable recurring revenue.
								</p>
							</div>

							{/* Benefit 4 */}
							<div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
										<TrendingUp className="h-6 w-6 text-[rgb(var(--st-orange))]" />
									</div>
								</div>
								<h3 className="mb-2 font-semibold text-gray-900">Scale Without Limits</h3>
								<p className="text-gray-600 text-sm">
									Handle hundreds or thousands of customers without adding staff.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
