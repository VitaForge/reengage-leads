"use client";

import type { CustomerStateSubscription } from "@polar-sh/sdk/models/components/customerstatesubscription.js";
import { Calendar, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface SettingsSubscriptionCardProps {
	subscription: CustomerStateSubscription | undefined;
}

export function SettingsSubscriptionCard({
	subscription,
}: SettingsSubscriptionCardProps) {
	if (!subscription) {
		return (
			<Card className="border border-gray-300 shadow-md">
				<CardHeader>
					<CardTitle>Subscription</CardTitle>
					<CardDescription>
						You don't have an active subscription
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button asChild className="w-full">
						<a href="/checkout">Subscribe Now</a>
					</Button>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="border border-gray-300 shadow-md">
			<CardHeader>
				<CardTitle>Subscription</CardTitle>
				<CardDescription>Manage your subscription plan</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center gap-3">
					<CreditCard className="text-muted-foreground h-5 w-5" />
					<div className="flex-1">
						<p className="font-medium">
							{subscription.product?.name || "Active Plan"}
						</p>
						<p className="text-muted-foreground text-sm">
							{subscription.status === "active"
								? "Active subscription"
								: subscription.status}
						</p>
					</div>
				</div>
				{subscription.current_period_end && (
					<div className="flex items-center gap-3">
						<Calendar className="text-muted-foreground h-5 w-5" />
						<div className="flex-1">
							<p className="text-sm font-medium">Next billing date</p>
							<p className="text-muted-foreground text-sm">
								{new Date(subscription.current_period_end).toLocaleDateString()}
							</p>
						</div>
					</div>
				)}
				<Button variant="outline" className="w-full">
					Manage Subscription
				</Button>
			</CardContent>
		</Card>
	);
}
