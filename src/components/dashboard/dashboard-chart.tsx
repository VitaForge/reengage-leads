"use client";

import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const data = [
	{ name: "Mon", calls: 120, bookings: 32 },
	{ name: "Tue", calls: 145, bookings: 38 },
	{ name: "Wed", calls: 132, bookings: 35 },
	{ name: "Thu", calls: 158, bookings: 42 },
	{ name: "Fri", calls: 167, bookings: 45 },
	{ name: "Sat", calls: 98, bookings: 28 },
	{ name: "Sun", calls: 85, bookings: 24 },
];

export function DashboardChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Weekly Activity</CardTitle>
				<CardDescription>
					Calls made and bookings over the past week
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Line
							type="monotone"
							dataKey="calls"
							stroke="rgb(var(--st-orange))"
							strokeWidth={2}
							name="Calls"
						/>
						<Line
							type="monotone"
							dataKey="bookings"
							stroke="rgb(var(--st-red))"
							strokeWidth={2}
							name="Bookings"
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
