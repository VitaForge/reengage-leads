import type { Metadata } from "next";

import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { env } from "@/env";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Terms of Service for ReEngage - AI-powered customer re-engagement platform",
	alternates: {
		canonical: "/terms",
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
				<div className="mx-auto max-w-4xl">
					<h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
					<p className="mb-8 text-sm text-gray-600">
						Last updated:{" "}
						{new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					<div className="prose prose-lg max-w-none">
						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								1. Agreement to Terms
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								By accessing or using ReEngage ("the Service"), you agree to be
								bound by these Terms of Service ("Terms"). If you disagree with
								any part of these terms, then you may not access the Service.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								2. Description of Service
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								ReEngage is an AI-powered platform that provides automated voice
								and SMS reminders to help businesses re-engage customers and
								drive repeat bookings. The Service includes features such as
								automated scheduling, CRM integration, and customer
								communication tools.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>
							<h3 className="mb-3 text-xl font-semibold">
								3.1 Account Creation
							</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								To use certain features of the Service, you must create an
								account. You agree to:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>Provide accurate, current, and complete information</li>
								<li>Maintain and promptly update your account information</li>
								<li>Maintain the security of your password and account</li>
								<li>
									Accept responsibility for all activities under your account
								</li>
								<li>Notify us immediately of any unauthorized use</li>
							</ul>

							<h3 className="mb-3 text-xl font-semibold">
								3.2 Account Termination
							</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								We reserve the right to suspend or terminate your account at any
								time for violation of these Terms or for any other reason we
								deem necessary.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">4. Use of Service</h2>
							<h3 className="mb-3 text-xl font-semibold">4.1 Permitted Use</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								You may use the Service only for lawful purposes and in
								accordance with these Terms. You agree not to:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>Violate any applicable laws or regulations</li>
								<li>Infringe upon the rights of others</li>
								<li>Transmit any harmful, offensive, or illegal content</li>
								<li>Interfere with or disrupt the Service</li>
								<li>Attempt to gain unauthorized access to the Service</li>
								<li>
									Use the Service to send spam or unsolicited communications
								</li>
								<li>Reverse engineer, decompile, or disassemble the Service</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">5. Payment Terms</h2>
							<h3 className="mb-3 text-xl font-semibold">
								5.1 Subscription Fees
							</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								Access to certain features of the Service requires payment of
								subscription fees. Fees are billed in advance on a monthly or
								annual basis, as selected by you.
							</p>

							<h3 className="mb-3 text-xl font-semibold">
								5.2 Payment Processing
							</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								All payments are processed through secure third-party payment
								processors. You agree to provide current, complete, and accurate
								payment information.
							</p>

							<h3 className="mb-3 text-xl font-semibold">5.3 Refunds</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								Refund policies are determined on a case-by-case basis. Contact
								us for more information about our refund policy.
							</p>

							<h3 className="mb-3 text-xl font-semibold">5.4 Price Changes</h3>
							<p className="mb-4 leading-relaxed text-gray-700">
								We reserve the right to modify subscription fees at any time. We
								will provide notice of any price changes, and you may cancel
								your subscription before the changes take effect.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								6. Intellectual Property
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								The Service and its original content, features, and
								functionality are owned by ReEngage and are protected by
								international copyright, trademark, patent, trade secret, and
								other intellectual property laws.
							</p>
							<p className="mb-4 leading-relaxed text-gray-700">
								You retain ownership of any content you submit to the Service.
								By submitting content, you grant us a worldwide, non-exclusive,
								royalty-free license to use, reproduce, modify, and distribute
								your content solely for the purpose of providing the Service.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								7. Data and Privacy
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								Your use of the Service is also governed by our Privacy Policy.
								Please review our Privacy Policy to understand how we collect,
								use, and protect your information.
							</p>
							<p className="mb-4 leading-relaxed text-gray-700">
								You are responsible for ensuring that any customer data you
								upload to the Service complies with applicable privacy laws and
								regulations, including obtaining necessary consents.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								8. Service Availability
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								We strive to provide reliable service but do not guarantee that
								the Service will be available at all times. The Service may be
								unavailable due to maintenance, updates, or circumstances beyond
								our control.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">9. Disclaimers</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								The service is provided "as is" and "as available" without
								warranties of any kind, either express or implied, including but
								not limited to implied warranties of merchantability, fitness
								for a particular purpose, or non-infringement.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								10. Limitation of Liability
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								To the maximum extent permitted by law, ReEngage shall not be
								liable for any indirect, incidental, special, consequential, or
								punitive damages, or any loss of profits or revenues, whether
								incurred directly or indirectly, or any loss of data, use,
								goodwill, or other intangible losses.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								11. Indemnification
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								You agree to indemnify and hold harmless ReEngage, its officers,
								directors, employees, and agents from any claims, damages,
								losses, liabilities, and expenses (including legal fees) arising
								out of your use of the Service or violation of these Terms.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">12. Termination</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								We may terminate or suspend your account and access to the
								Service immediately, without prior notice, for any reason,
								including breach of these Terms. Upon termination, your right to
								use the Service will cease immediately.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">13. Governing Law</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								These Terms shall be governed by and construed in accordance
								with the laws of [Your Jurisdiction], without regard to its
								conflict of law provisions.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								14. Changes to Terms
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								We reserve the right to modify these Terms at any time. We will
								notify you of any changes by posting the new Terms on this page
								and updating the "Last updated" date. Your continued use of the
								Service after such changes constitutes acceptance of the new
								Terms.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 text-2xl font-semibold">
								15. Contact Information
							</h2>
							<p className="mb-4 leading-relaxed text-gray-700">
								If you have any questions about these Terms of Service, please
								contact us at:
							</p>
							<div className="mb-4 rounded-lg bg-gray-50 p-4">
								<p className="text-gray-700">
									<strong>Email:</strong>{" "}
									<a
										href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}
										className="text-[rgb(var(--st-orange))] hover:underline"
									>
										{env.NEXT_PUBLIC_CONTACT_EMAIL}
									</a>
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
