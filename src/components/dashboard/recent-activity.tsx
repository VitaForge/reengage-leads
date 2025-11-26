"use client";

import { Calendar, CheckCircle2, MessageSquare, Phone } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const activities = [
	{
		type: "call",
		icon: Phone,
		title: "AI Call Completed",
		description: "John Smith - HVAC Service",
		time: "2 minutes ago",
		status: "success",
	},
	{
		type: "booking",
		icon: Calendar,
		title: "Service Booked",
		description: "Sarah Johnson - Annual Maintenance",
		time: "15 minutes ago",
		status: "success",
	},
	{
		type: "sms",
		icon: MessageSquare,
		title: "SMS Sent",
		description: "Mike Davis - Follow-up reminder",
		time: "1 hour ago",
		status: "success",
	},
	{
		type: "call",
		icon: Phone,
		title: "AI Call Completed",
		description: "Emily Wilson - Plumbing Service",
		time: "2 hours ago",
		status: "success",
	},
	{
		type: "booking",
		icon: Calendar,
		title: "Service Booked",
		description: "Robert Brown - AC Tune-up",
		time: "3 hours ago",
		status: "success",
	},
];

export function RecentActivity() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
				<CardDescription>
					Latest calls, messages, and bookings from your customers
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{activities.map((activity, index) => {
						const Icon = activity.icon;
						return (
							<div
								key={index}
								className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--st-orange))]/10">
									<Icon className="h-5 w-5 text-[rgb(var(--st-orange))]" />
								</div>
								<div className="flex-1 space-y-1">
									<div className="flex items-center justify-between">
										<p className="text-sm font-medium">{activity.title}</p>
										<span className="text-muted-foreground text-xs">
											{activity.time}
										</span>
									</div>
									<p className="text-muted-foreground text-sm">
										{activity.description}
									</p>
								</div>
								<CheckCircle2 className="h-5 w-5 text-green-600" />
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
