import { SignInForm } from "@/components/auth/sign-in-form";

interface SignInPageProps {
	searchParams: Promise<{ callbackUrl?: string; accountCreated?: string }>;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
	const { callbackUrl, accountCreated } = await searchParams;
	return (
		<SignInForm
			callbackURL={callbackUrl}
			showAccountCreatedMessage={accountCreated === "true"}
		/>
	);
}
