import type { MetadataRoute } from "next";

import { env } from "@/env";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = env.NEXT_PUBLIC_SITE_URL || "https://reengage-leads.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [
					"/api/",
					"/dashboard/",
					"/checkout/",
					"/sign-in/",
					"/sign-up/",
					"/reset-password/",
					"/request-password-reset/",
					"/verify-email/",
				],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
