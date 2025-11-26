"use client";

import { Calendar, Database, Mail, Phone, Settings } from "lucide-react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function IntegrationsSection() {
	return (
		<section className="relative bg-white py-20" id="integrations">
			{/* Dot Grid Background */}
			<div className="pointer-events-none absolute inset-0 hidden lg:block">
				<svg className="h-full w-full" fill="none">
					<defs>
						<pattern
							id="dots"
							height="20"
							patternUnits="userSpaceOnUse"
							width="20"
							x="0"
							y="0"
						>
							<circle cx="2" cy="2" fill="#e5e7eb" r="1" />
						</pattern>
					</defs>
					<rect fill="url(#dots)" height="100%" width="100%" />
				</svg>
			</div>

			<div className="relative container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-4xl">
					<div className="mb-12 text-center">
						<div className="mb-4 inline-block rounded-full bg-[rgb(var(--st-orange))]/10 px-4 py-1.5">
							<span className="text-sm font-medium text-[rgb(var(--st-orange))]">
								COMING SOON
							</span>
						</div>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
							Integrations
						</h2>
						<p className="text-lg text-gray-600">
							Connect ReEngage with your favorite tools and platforms. Native
							integrations and modern webhooks let you easily connect with CRMs,
							calendars, and more.
						</p>
					</div>

					{/* Orbiting Circles */}
					<div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
						<OrbitingCircles
							iconSize={40}
							radius={140}
							duration={20}
							path={true}
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Phone className="h-8 w-8 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Mail className="h-8 w-8 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Calendar className="h-8 w-8 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Database className="h-8 w-8 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Settings className="h-8 w-8 text-[rgb(var(--st-orange))]" />
							</div>
						</OrbitingCircles>
						<OrbitingCircles
							iconSize={30}
							radius={100}
							reverse
							speed={2}
							duration={15}
							path={true}
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Phone className="h-6 w-6 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Mail className="h-6 w-6 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Calendar className="h-6 w-6 text-[rgb(var(--st-orange))]" />
							</div>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
								<Database className="h-6 w-6 text-[rgb(var(--st-orange))]" />
							</div>
						</OrbitingCircles>
					</div>
				</div>
			</div>
		</section>
	);
}
