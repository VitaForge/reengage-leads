import { SettingsDeleteAccount } from "@/components/dashboard/settings/settings-delete-account";
import { SettingsProfileSection } from "@/components/dashboard/settings/settings-profile-section";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getSession } from "@/server/better-auth/server";

export default async function SettingsPage() {
	const session = await getSession();

	const user = {
		id: session?.user?.id || "",
		name: session?.user?.name || "",
		email: session?.user?.email || "",
		image: session?.user?.image || null,
	};

	return (
		<div className="mx-auto flex max-w-4xl flex-col gap-8 p-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
				<p className="text-muted-foreground mt-2">
					View your account information
				</p>
			</div>

			<Card className="border border-gray-300 shadow-md">
				<CardContent className="space-y-6 pt-6">
					<SettingsProfileSection user={user} />
					<Separator />
					<SettingsDeleteAccount userEmail={user.email} />
				</CardContent>
			</Card>
		</div>
	);
}
