"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.4,
		},
	}),
};

const steps = [
	{
		step: "STEP 1",
		title: "We connect your booking data",
		description:
			"We integrate with your CRM or accounting software to track customer service history and automatically identify when customers are due for their next service.",
		mockup: (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="w-full space-y-0 rounded-lg border border-gray-200 bg-white shadow-sm"
			>
				<div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
					<h3 className="text-sm font-semibold text-gray-900">
						Connect your apps
					</h3>
					<p className="text-xs text-gray-600">
						Link your booking system to get started
					</p>
				</div>
				<div className="divide-y divide-gray-100">
					<motion.div
						variants={itemVariants}
						custom={0}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
								<span className="text-xs font-bold text-purple-600">J</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">Jobber</div>
								<div className="text-xs text-gray-500">CRM Software</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
								<Check className="h-3 w-3 text-green-600" />
							</div>
							<span className="text-xs text-gray-500">Connected</span>
						</div>
					</motion.div>
					<motion.div
						variants={itemVariants}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
								<span className="text-xs font-bold text-blue-600">QB</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">
									QuickBooks
								</div>
								<div className="text-xs text-gray-500">Accounting</div>
							</div>
						</div>
						<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
							Connect
						</button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						custom={2}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
								<span className="text-xs font-bold text-green-600">HCP</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">
									Housecall Pro
								</div>
								<div className="text-xs text-gray-500">Field Service</div>
							</div>
						</div>
						<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
							Connect
						</button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						custom={3}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
								<span className="text-xs font-bold text-orange-600">ST</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">
									ServiceTitan
								</div>
								<div className="text-xs text-gray-500">Service Management</div>
							</div>
						</div>
						<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
							Connect
						</button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						custom={4}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
								<span className="text-xs font-bold text-indigo-600">FB</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">
									FreshBooks
								</div>
								<div className="text-xs text-gray-500">Accounting</div>
							</div>
						</div>
						<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
							Connect
						</button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						custom={5}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="flex items-center justify-between px-4 py-3"
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
								<span className="text-xs font-bold text-gray-600">CSV</span>
							</div>
							<div>
								<div className="text-sm font-medium text-gray-900">
									CSV Upload
								</div>
								<div className="text-xs text-gray-500">Manual Import</div>
							</div>
						</div>
						<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
							Connect
						</button>
					</motion.div>
				</div>
			</motion.div>
		),
	},
	{
		step: "STEP 2",
		title: "We set up and manage your campaigns",
		description:
			"We configure and manage your AI voice calls, SMS, and email reminders. We customize messages and timing to match your service schedule and brand voice.",
		mockup: (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
			>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className="flex items-center gap-2 border-b border-gray-200 pb-3"
				>
					<button className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
						Voice Calls
					</button>
					<button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
						SMS
					</button>
					<button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
						Email
					</button>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="space-y-4"
				>
					<div className="flex items-center justify-between">
						<label className="text-sm font-medium text-gray-700">
							Enable AI Voice Calls
						</label>
						<div className="relative h-6 w-11 rounded-full bg-blue-600">
							<div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-xs font-medium text-gray-700">
							Reminder Timing
						</label>
						<input
							type="text"
							value="30 days after last booking"
							readOnly
							className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
						/>
					</div>
					<div className="space-y-2">
						<label className="text-xs font-medium text-gray-700">
							Service Types
						</label>
						<div className="flex flex-wrap gap-2">
							<button className="rounded-md bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700">
								Annual Tune-up
							</button>
							<button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
								Maintenance
							</button>
							<button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
								Inspection
							</button>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-xs font-medium text-gray-700">
							Call Script
						</label>
						<textarea
							readOnly
							rows={4}
							value="Hi {customer_name}, this is {company_name}. We wanted to reach out about scheduling your annual service. Would you like to book an appointment today?"
							className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700"
						/>
					</div>
					<div className="flex items-center gap-2">
						<div className="relative h-5 w-9 rounded-full bg-blue-600">
							<div className="absolute top-1 right-1 h-3 w-3 rounded-full bg-white"></div>
						</div>
						<label className="text-xs text-gray-600">
							Enable instant booking during call
						</label>
					</div>
					<div className="rounded-md border border-gray-200 bg-gray-50 p-3">
						<div className="mb-2 text-xs font-medium text-gray-700">
							Preview
						</div>
						<div className="space-y-2 text-xs text-gray-600">
							<div>• Calls will be made automatically</div>
							<div>• Customers can book instantly</div>
							<div>• Reminders sent 30 days after service</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		),
	},
	{
		step: "STEP 3",
		title: "You receive regular performance reports",
		description:
			"We track and report on the revenue earned from customers who re-book via our campaigns. You get monthly reports showing bookings, revenue, and ROI.",
		mockup: (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
			>
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="flex items-center justify-between border-b border-gray-200 pb-3"
				>
					<h3 className="text-sm font-semibold text-gray-900">
						Dashboard Overview
					</h3>
					<span className="text-xs text-gray-500">Last 7 days</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="grid grid-cols-2 gap-3"
				>
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
						<div className="mb-1 text-[10px] font-medium text-gray-500">
							Total Customers
						</div>
						<div className="text-lg font-bold text-gray-900">247</div>
						<div className="mt-1 text-[10px] text-green-600">
							+12% this week
						</div>
					</div>
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
						<div className="mb-1 text-[10px] font-medium text-gray-500">
							Calls Made
						</div>
						<div className="text-lg font-bold text-gray-900">1,234</div>
						<div className="mt-1 text-[10px] text-green-600">+8% this week</div>
					</div>
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
						<div className="mb-1 text-[10px] font-medium text-gray-500">
							Bookings
						</div>
						<div className="text-lg font-bold text-gray-900">89</div>
						<div className="mt-1 text-[10px] text-blue-600">
							7.2% conversion
						</div>
					</div>
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
						<div className="mb-1 text-[10px] font-medium text-gray-500">
							Revenue
						</div>
						<div className="text-lg font-bold text-gray-900">$12.4k</div>
						<div className="mt-1 text-[10px] text-green-600">
							+15% this week
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="h-40 rounded border border-gray-200 bg-gray-50 p-3"
				>
					<div className="mb-2 text-xs font-medium text-gray-700">
						Weekly Activity
					</div>
					<div className="flex h-full items-end justify-between gap-1.5">
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "45%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="flex-1 rounded-t bg-blue-200"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "100%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.35 }}
							className="flex-1 rounded-t bg-blue-500"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "70%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex-1 rounded-t bg-blue-300"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "55%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.45 }}
							className="flex-1 rounded-t bg-blue-200"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "85%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="flex-1 rounded-t bg-blue-500"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "60%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.55 }}
							className="flex-1 rounded-t bg-blue-300"
						></motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "40%" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex-1 rounded-t bg-blue-200"
						></motion.div>
					</div>
					<div className="mt-2 flex justify-between text-[10px] text-gray-500">
						<span>Mon</span>
						<span>Tue</span>
						<span>Wed</span>
						<span>Thu</span>
						<span>Fri</span>
						<span>Sat</span>
						<span>Sun</span>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="space-y-2 rounded-md border border-gray-200 bg-gray-50 p-3"
				>
					<div className="text-xs font-medium text-gray-700">
						Recent Activity
					</div>
					<div className="space-y-2 text-xs text-gray-600">
						<div className="flex items-center gap-2">
							<div className="h-2 w-2 rounded-full bg-green-500"></div>
							<span>John Smith booked via call • 2 min ago</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="h-2 w-2 rounded-full bg-blue-500"></div>
							<span>Sarah Johnson call completed • 5 min ago</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="h-2 w-2 rounded-full bg-purple-500"></div>
							<span>Mike Davis SMS sent • 8 min ago</span>
						</div>
					</div>
				</motion.div>
			</motion.div>
		),
	},
];

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

export function FeaturesSection() {
	return (
		<section className="bg-white pt-20 pb-24" id="how-it-works">
			<div className="container mx-auto px-4 md:px-6">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
					className="mx-auto mb-16 max-w-3xl text-center"
				>
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						How we do it
					</h2>
					<p className="text-lg text-gray-600">
						We handle everything from setup to execution. Here's how our service
						works for your business.
					</p>
				</motion.div>

				{/* Steps */}
				<div className="mx-auto max-w-7xl space-y-24">
					{steps.map((step, index) => {
						const isEven = index % 2 === 1;
						return (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUp}
								className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
									isEven ? "lg:[&>*:first-child]:order-2" : ""
								}`}
							>
								{/* Mockup */}
								<div className="relative">
									<div className="relative overflow-hidden rounded-2xl bg-gray-50">
										<div className="flex min-h-[600px] items-center justify-center p-6">
											{step.mockup}
										</div>
									</div>
								</div>

								{/* Text Content */}
								<div>
									<div className="mb-3 text-sm font-semibold text-[rgb(var(--st-orange))]">
										{step.step}
									</div>
									<h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
										{step.title}
									</h3>
									<p className="text-lg text-gray-600">{step.description}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
