import { SignInForm } from "@/components/auth/sign-in-form";

interface SignInPageProps {
	searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
	const { callbackUrl } = await searchParams;
	return <SignInForm callbackURL={callbackUrl} />;
}
