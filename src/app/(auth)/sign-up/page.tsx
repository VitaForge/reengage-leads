import { SignUpForm } from "@/components/auth/sign-up-form";

interface SignUpPageProps {
	searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
	const { callbackUrl } = await searchParams;
	return <SignUpForm callbackURL={callbackUrl} />;
}
