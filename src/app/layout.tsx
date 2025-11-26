import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { PostHogProvider } from "@/app/providers";
import { CookieManagerWrapper } from "@/components/cookie-manager-wrapper";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
	title: "ReEngage - Never Let a Customer Forget Their Annual Service Again",
	description:
		"AI-powered voice and SMS reminders that automatically re-engage your customers and drive repeat bookings. Turn forgotten service appointments into revenue without lifting a finger.",
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
					</TRPCReactProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}
