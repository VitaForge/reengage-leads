"use client";

import { Calendar, MessageSquare, Phone, TrendingUp } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const stats = [
	{
		title: "Total Customers",
		value: "1,234",
		description: "+12% from last month",
		icon: Phone,
		trend: "up",
	},
	{
		title: "Calls Made",
		value: "3,456",
		description: "+8% from last month",
		icon: MessageSquare,
		trend: "up",
	},
	{
		title: "Bookings",
		value: "892",
		description: "+15% from last month",
		icon: Calendar,
		trend: "up",
	},
	{
		title: "Conversion Rate",
		value: "25.8%",
		description: "+2.3% from last month",
		icon: TrendingUp,
		trend: "up",
	},
];

export function DashboardStats() {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat) => {
				const Icon = stat.icon;
				return (
					<Card key={stat.title}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{stat.title}
							</CardTitle>
							<Icon className="text-muted-foreground h-4 w-4" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<CardDescription className="flex items-center gap-1">
								<TrendingUp className="h-3 w-3 text-green-600" />
								{stat.description}
							</CardDescription>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
