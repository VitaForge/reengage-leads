"use client";

import { CreditCard, Lock } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Paywall() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
			<Card className="w-full max-w-md border border-gray-300 shadow-md">
				<CardHeader className="text-center">
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
						<Lock className="h-8 w-8 text-[rgb(var(--st-orange))]" />
					</div>
					<CardTitle className="text-2xl">Subscription Required</CardTitle>
					<CardDescription>
						You need an active subscription to access the dashboard
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<h3 className="font-semibold">Features you'll get access to:</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--st-orange))]"></div>
								AI-powered voice calls
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--st-orange))]"></div>
								Automated SMS and email reminders
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--st-orange))]"></div>
								Customer management dashboard
							</li>
							<li className="flex items-center gap-2">
								<div className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--st-orange))]"></div>
								Analytics and reporting
							</li>
						</ul>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-2">
					<Button
						asChild
						className="w-full bg-[rgb(var(--st-red))] hover:bg-[rgb(var(--st-red-hover))]"
					>
						<Link href="/checkout" className="flex items-center gap-2">
							<CreditCard className="h-4 w-4" />
							Subscribe Now
						</Link>
					</Button>
					<Button variant="outline" asChild className="w-full">
						<Link href="/">Back to Home</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
