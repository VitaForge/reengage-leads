"use client";

import { Input } from "@/components/ui/input";

interface SettingsProfileSectionProps {
	user: {
		id: string;
		name: string;
		email: string;
		image: string | null;
	};
}

export function SettingsProfileSection({ user }: SettingsProfileSectionProps) {
	return (
		<div>
			<div className="mb-4">
				<h3 className="text-lg font-semibold">Profile</h3>
				<p className="text-sm text-muted-foreground">
					Your account profile information
				</p>
			</div>
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
		</div>
	);
}


