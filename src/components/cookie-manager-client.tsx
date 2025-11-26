"use client";
import React from "react";
// import "react-cookie-manager/style.css";
import { CookieManager } from "react-cookie-manager";

export function CookieManagerClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CookieManager
			privacyPolicyUrl="/privacy"
			displayType="banner"
			translations={{
				title: "Cookie Preferences 🍪",
				message:
					"We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled as they are necessary for the website to function properly.",
				buttonText: "Accept All",
				declineButtonText: "Decline All",
				manageButtonText: "Manage Cookies",
				privacyPolicyText: "Privacy Policy",
			}}
		>
			{children}
		</CookieManager>
	);
}
