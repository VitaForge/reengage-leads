"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DemoFormSection() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		industry: "",
		numTechs: "",
		hasOfficeEmployee: "",
		jobFocus: "",
		jobTypes: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Store form data (could send to backend for lead capture)
		console.log("Form submitted:", formData);
		// Redirect to checkout page
		router.push("/checkout");
	};

	return (
		<section className="bg-[rgb(var(--st-dark))] py-20 text-white" id="demo">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid items-start gap-12 md:grid-cols-2">
					{/* Left Content */}
					<div className="space-y-6">
						<div className="font-semibold text-[rgb(var(--st-orange))] text-sm uppercase tracking-wider">
							Get a Demo
						</div>
						<h2 className="font-bold text-3xl md:text-4xl">
							ReEngage is helping service businesses thrive. See how.
						</h2>
						<p className="text-gray-300 text-lg">
							ReEngage is not just a software platform—it's the technology
							partner that can help your commercial, construction or residential
							contracting business thrive by automating customer re-engagement
							and driving repeat bookings.
						</p>
					</div>

					{/* Right Form */}
					<Card className="bg-white text-gray-900">
						<CardHeader>
							<CardTitle className="text-2xl">
								Request a personalized demo
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form className="space-y-4" onSubmit={handleSubmit}>
								<div>
									<label htmlFor="industry" className="mb-2 block font-medium text-sm">
										Select industry
									</label>
									<select
										id="industry"
										className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
										onChange={(e) =>
											setFormData({ ...formData, industry: e.target.value })
										}
										value={formData.industry}
									>
										<option value="">Select...</option>
										<option value="hvac">HVAC</option>
										<option value="plumbing">Plumbing</option>
										<option value="pest-control">Pest Control</option>
										<option value="pool-maintenance">Pool Maintenance</option>
										<option value="electrical">Electrical</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label htmlFor="numTechs" className="mb-2 block font-medium text-sm">
										Select number of techs
									</label>
									<select
										id="numTechs"
										className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
										onChange={(e) =>
											setFormData({ ...formData, numTechs: e.target.value })
										}
										value={formData.numTechs}
									>
										<option value="">Select...</option>
										<option value="1-5">1-5</option>
										<option value="6-10">6-10</option>
										<option value="11-20">11-20</option>
										<option value="21+">21+</option>
									</select>
								</div>

								<div>
									<fieldset>
										<legend className="mb-2 block font-medium text-sm">
											Do you have at least one full-time office employee?
										</legend>
										<div className="flex gap-4">
										<label className="flex items-center gap-2">
											<input
												checked={formData.hasOfficeEmployee === "yes"}
												name="hasOfficeEmployee"
												onChange={(e) =>
													setFormData({
														...formData,
														hasOfficeEmployee: e.target.value,
													})
												}
												type="radio"
												value="yes"
											/>
											Yes
										</label>
										<label className="flex items-center gap-2">
											<input
												checked={formData.hasOfficeEmployee === "no"}
												name="hasOfficeEmployee"
												onChange={(e) =>
													setFormData({
														...formData,
														hasOfficeEmployee: e.target.value,
													})
												}
												type="radio"
												value="no"
											/>
											No
										</label>
										</div>
									</fieldset>
								</div>

								<div>
									<fieldset>
										<legend className="mb-2 block font-medium text-sm">
											What kind of jobs does your company focus on?
										</legend>
										<div className="flex gap-4">
										<label className="flex items-center gap-2">
											<input
												checked={formData.jobFocus === "residential"}
												name="jobFocus"
												onChange={(e) =>
													setFormData({
														...formData,
														jobFocus: e.target.value,
													})
												}
												type="radio"
												value="residential"
											/>
											Residential
										</label>
										<label className="flex items-center gap-2">
											<input
												checked={formData.jobFocus === "commercial"}
												name="jobFocus"
												onChange={(e) =>
													setFormData({
														...formData,
														jobFocus: e.target.value,
													})
												}
												type="radio"
												value="commercial"
											/>
											Commercial
										</label>
										</div>
									</fieldset>
								</div>

								<div>
									<fieldset>
										<legend className="mb-2 block font-medium text-sm">
											Select job types
										</legend>
										<div className="flex gap-4">
										<label className="flex items-center gap-2">
											<input
												checked={formData.jobTypes === "service-replacement"}
												name="jobTypes"
												onChange={(e) =>
													setFormData({
														...formData,
														jobTypes: e.target.value,
													})
												}
												type="radio"
												value="service-replacement"
											/>
											Service and Replacement
										</label>
										<label className="flex items-center gap-2">
											<input
												checked={formData.jobTypes === "construction-remodel"}
												name="jobTypes"
												onChange={(e) =>
													setFormData({
														...formData,
														jobTypes: e.target.value,
													})
												}
												type="radio"
												value="construction-remodel"
											/>
											Construction or Remodel
										</label>
										</div>
									</fieldset>
								</div>

								<Button
									className="w-full bg-[rgb(var(--st-dark))] text-white hover:bg-[rgb(var(--st-dark-darker))]"
									size="lg"
									type="submit"
								>
									Agree & Continue
								</Button>

								<p className="text-center text-gray-500 text-xs">
									By clicking "Agree & Continue", you agree to our{" "}
									<a className="underline" href="/privacy">
										Privacy Policy
									</a>{" "}
									and{" "}
									<a className="underline" href="/terms">
										Terms of Service
									</a>
									. Your data will be used to contact you about the demo.
								</p>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
