"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface SettingsProfileFormProps {
	user: {
		id: string;
		name: string;
		email: string;
		image: string | null;
	};
}

export function SettingsProfileForm({ user }: SettingsProfileFormProps) {
	return (
		<Card className="border border-gray-300 shadow-md">
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>Your account profile information</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Name
						</label>
						<Input
							id="name"
							value={user.name}
							disabled
							placeholder="Your name"
							className="bg-muted cursor-not-allowed"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Email
						</label>
						<Input
							id="email"
							type="email"
							value={user.email}
							disabled
							placeholder="your.email@example.com"
							className="bg-muted cursor-not-allowed"
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
