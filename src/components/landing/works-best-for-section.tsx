"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { Card } from "@/components/ui/card";

const profiles = [
	{
		title: "HVAC, Heating & Mechanical Contractors",
		description:
			"Automate annual tune-up reminders and keep customers booking on schedule.",
		image: "/hvac.jpg",
		imageAlt: "HVAC, Heating & Mechanical Contractors",
	},
	{
		title: "Dental & Health Clinics",
		description:
			"Re-engage patients for annual check-ups and cleanings with automated AI reminders.",
		image: "/dental.jpg",
		imageAlt: "Dental & Health Clinics",
	},
	{
		title: "Pest Control & Home Maintenance Services",
		description:
			"Drive recurring bookings for annual inspections and seasonal treatments.",
		image: "/pest.jpg",
		imageAlt: "Pest Control & Home Maintenance Services",
	},
	{
		title: "Commercial Fleet Maintenance & Truck Service Shops",
		description:
			"Keep fleets compliant by automating reminders for DOT inspections and maintenance.",
		image: "/mechanic.jpg",
		imageAlt: "Commercial Fleet Maintenance & Truck Service Shops",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export function WorksBestForSection() {
	return (
		<section
			className="bg-[rgb(var(--st-dark-darker))] py-20 text-white"
			id="works-best-for"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-7xl">
					{/* Section Title */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={cardVariants}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
							Works best for
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-300">
							Perfect for service businesses that rely on recurring appointments
							and annual maintenance schedules.
						</p>
					</motion.div>

					{/* Cards Grid */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={containerVariants}
						className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
					>
						{profiles.map((profile, index) => {
							return (
								<motion.div key={index} variants={cardVariants}>
									<Card className="group relative overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-xl">
										{/* Background Image */}
										<div className="relative h-[480px] w-full">
											<Image
												alt={profile.imageAlt}
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
												fill
												src={profile.image}
											/>
											{/* Gradient Overlay - darker at bottom only */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
										</div>

										{/* Text Content at Bottom */}
										<div className="absolute right-0 bottom-0 left-0 flex h-[180px] flex-col justify-end p-6">
											<h3 className="mb-2 text-xl font-bold text-white">
												{profile.title}
											</h3>
											<p className="text-sm leading-relaxed text-gray-300">
												{profile.description}
											</p>
										</div>
									</Card>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
