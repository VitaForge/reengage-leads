"use client";

import { motion } from "framer-motion";
import { Bell, Repeat, Zap } from "lucide-react";

import { WorkflowVisualization } from "./workflow-visualization";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export function SolutionSection() {
	return (
		<section className="bg-gray-50 pt-20 pb-12" id="solution">
			<div className="container mx-auto px-4 md:px-6">
				{/* Solution Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={itemVariants}
					className="mx-auto mb-12 max-w-3xl text-center"
				>
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Win more business, automatically.
					</h2>
					<p className="text-lg text-gray-600">
						Automate customer re-engagement with AI voice calls, SMS, and email
						reminders that drive repeat bookings—all on autopilot.
					</p>
				</motion.div>

				{/* Workflow Visualization */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={itemVariants}
					className="mx-auto mb-16 max-w-5xl"
				>
					<WorkflowVisualization />
				</motion.div>

				{/* Benefits Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="mx-auto mb-20 max-w-6xl"
				>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{/* Benefit 1 */}
						<motion.div variants={itemVariants} className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
									<Repeat className="h-8 w-8 text-[rgb(var(--st-orange))]" />
								</div>
							</div>
							<h3 className="mb-3 text-xl font-bold text-gray-900">
								Repeat jobs = efficient revenue
							</h3>
							<p className="text-sm text-gray-600">
								Repeat customers are more valuable because trust is already
								built and they spend more on average than one-time customers.
							</p>
						</motion.div>

						{/* Benefit 2 */}
						<motion.div variants={itemVariants} className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
									<Zap className="h-8 w-8 text-[rgb(var(--st-orange))]" />
								</div>
							</div>
							<h3 className="mb-3 text-xl font-bold text-gray-900">
								No more manual follow-ups
							</h3>
							<p className="text-sm text-gray-600">
								Launch automated campaigns with just a few clicks, freeing you
								up to focus on delivering top-notch service.
							</p>
						</motion.div>

						{/* Benefit 3 */}
						<motion.div variants={itemVariants} className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
									<Bell className="h-8 w-8 text-[rgb(var(--st-orange))]" />
								</div>
							</div>
							<h3 className="mb-3 text-xl font-bold text-gray-900">
								Perfectly timed service reminders
							</h3>
							<p className="text-sm text-gray-600">
								Send friendly messages to each client encouraging them to
								re-book after a set time, making it simple for them to return.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
