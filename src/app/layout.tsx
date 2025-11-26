import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { PostHogProvider } from "@/app/providers";
import { CookieManagerWrapper } from "@/components/cookie-manager-wrapper";
import { env } from "@/env";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

const baseUrl = env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
	title: {
		default:
			"ReEngage - Never Let a Customer Forget Their Annual Service Again",
		template: "%s | ReEngage",
	},
	description:
		"AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings. Turn forgotten service appointments into revenue without lifting a finger.",
	keywords: [
		"customer re-engagement",
		"appointment reminders",
		"AI voice calls",
		"SMS reminders",
		"service business",
		"customer retention",
		"automated reminders",
	],
	authors: [{ name: "ReEngage" }],
	creator: "ReEngage",
	publisher: "ReEngage",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(baseUrl),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		siteName: "ReEngage",
		title: "ReEngage - Never Let a Customer Forget Their Annual Service Again",
		description:
			"AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings. Turn forgotten service appointments into revenue without lifting a finger.",
		images: [
			{
				url: `/og-image.png`,
				width: 1200,
				height: 630,
				alt: "ReEngage - AI-Powered Customer Re-engagement",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "ReEngage - Never Let a Customer Forget Their Annual Service Again",
		description:
			"AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings.",
		images: [`/og-image.png`],
		creator: "@reengage",
		site: "@reengage",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body>
				<PostHogProvider>
					<TRPCReactProvider>
						<CookieManagerWrapper>{children}</CookieManagerWrapper>
						<Toaster position="top-center" richColors />
					</TRPCReactProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}
