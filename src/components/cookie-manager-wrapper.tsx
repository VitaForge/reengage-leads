"use client";

import React, { type ReactNode } from "react";
import { CookieManager } from "react-cookie-manager";

interface CookieManagerWrapperProps {
	children: ReactNode;
}

export function CookieManagerWrapper({ children }: CookieManagerWrapperProps) {
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
