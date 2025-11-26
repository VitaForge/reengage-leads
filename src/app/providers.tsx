"use client";

import { PostHogProvider as PHProvider } from "@posthog/react";
import posthog from "posthog-js";

import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
				api_host:
					process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
				defaults: "2025-05-24",
			});
		}
	}, []);

	return <PHProvider client={posthog}>{children}</PHProvider>;
}
