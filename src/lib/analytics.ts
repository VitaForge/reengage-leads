/**
 * Shared event types for PostHog analytics tracking
 */
export const AnalyticsEvent = {
	// CTA Events
	CTA_CLICK: "cta_click",

	// Authentication Events
	LOGIN: "login",
	REGISTER: "register",
	LOGOUT: "logout",

	// Account Events
	ACCOUNT_DELETE: "account_delete",

	// Plan/Pricing Events
	PLAN_SELECTED: "plan_selected",
	CHECKOUT_STARTED: "checkout_started",
} as const;

export type AnalyticsEventType =
	(typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
