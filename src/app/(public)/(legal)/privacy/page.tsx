import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";

export const metadata = {
	title: "Privacy Policy - ReEngage",
	description: "Privacy Policy for ReEngage - AI-powered customer re-engagement platform",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
				<div className="mx-auto max-w-4xl">
					<h1 className="mb-8 font-bold text-4xl">Privacy Policy</h1>
					<p className="mb-8 text-gray-600 text-sm">
						Last updated: {new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					<div className="prose prose-lg max-w-none">
						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">1. Introduction</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								Welcome to ReEngage ("we," "our," or "us"). We are committed to
								protecting your privacy and ensuring you have a positive experience
								on our website and in using our products and services. This Privacy
								Policy explains how we collect, use, disclose, and safeguard your
								information when you visit our website or use our services.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								2. Information We Collect
							</h2>
							<h3 className="mb-3 font-semibold text-xl">
								2.1 Information You Provide
							</h3>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We collect information that you provide directly to us, including:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>Name, email address, phone number, and other contact information</li>
								<li>Company name and business information</li>
								<li>Payment and billing information</li>
								<li>Customer data and information you upload to our platform</li>
								<li>Communications with us, including support requests</li>
							</ul>

							<h3 className="mb-3 font-semibold text-xl">
								2.2 Automatically Collected Information
							</h3>
							<p className="mb-4 text-gray-700 leading-relaxed">
								When you use our services, we automatically collect certain
								information, including:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>Device information and IP address</li>
								<li>Browser type and version</li>
								<li>Usage data and analytics</li>
								<li>Cookies and similar tracking technologies</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								3. How We Use Your Information
							</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We use the information we collect to:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>Provide, maintain, and improve our services</li>
								<li>Process transactions and send related information</li>
								<li>Send you technical notices, updates, and support messages</li>
								<li>Respond to your comments, questions, and requests</li>
								<li>Monitor and analyze trends, usage, and activities</li>
								<li>Detect, prevent, and address technical issues and security threats</li>
								<li>Comply with legal obligations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								4. Information Sharing and Disclosure
							</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We do not sell, trade, or rent your personal information to third
								parties. We may share your information only in the following
								circumstances:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>
									<strong>Service Providers:</strong> With trusted third-party
									service providers who assist us in operating our platform
								</li>
								<li>
									<strong>Legal Requirements:</strong> When required by law or to
									protect our rights and safety
								</li>
								<li>
									<strong>Business Transfers:</strong> In connection with a merger,
									acquisition, or sale of assets
								</li>
								<li>
									<strong>With Your Consent:</strong> When you have given us explicit
									permission to share your information
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">5. Data Security</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We implement appropriate technical and organizational security measures
								to protect your personal information against unauthorized access,
								alteration, disclosure, or destruction. However, no method of
								transmission over the Internet or electronic storage is 100% secure,
								and we cannot guarantee absolute security.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">6. Your Rights</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								Depending on your location, you may have certain rights regarding your
								personal information, including:
							</p>
							<ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
								<li>The right to access your personal information</li>
								<li>The right to correct inaccurate information</li>
								<li>The right to delete your personal information</li>
								<li>The right to restrict or object to processing</li>
								<li>The right to data portability</li>
								<li>The right to withdraw consent</li>
							</ul>
							<p className="mb-4 text-gray-700 leading-relaxed">
								To exercise these rights, please contact us using the information
								provided in the "Contact Us" section below.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">7. Cookies and Tracking</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We use cookies and similar tracking technologies to collect and use
								personal information about you. You can control cookies through your
								browser settings, but disabling cookies may limit your ability to use
								certain features of our services.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								8. Third-Party Links
							</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								Our services may contain links to third-party websites or services.
								We are not responsible for the privacy practices of these third
								parties. We encourage you to review their privacy policies before
								providing any personal information.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								9. Children's Privacy
							</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								Our services are not intended for individuals under the age of 18. We
								do not knowingly collect personal information from children. If you
								become aware that a child has provided us with personal information,
								please contact us, and we will take steps to delete such information.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">
								10. Changes to This Privacy Policy
							</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								We may update this Privacy Policy from time to time. We will notify
								you of any changes by posting the new Privacy Policy on this page and
								updating the "Last updated" date. You are advised to review this
								Privacy Policy periodically for any changes.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl">11. Contact Us</h2>
							<p className="mb-4 text-gray-700 leading-relaxed">
								If you have any questions about this Privacy Policy or our privacy
								practices, please contact us at:
							</p>
							<div className="mb-4 rounded-lg bg-gray-50 p-4">
								<p className="text-gray-700">
									<strong>Email:</strong> privacy@reengage.com
								</p>
								<p className="text-gray-700">
									<strong>Address:</strong> [Your Company Address]
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

