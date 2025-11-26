import Link from "next/link";

import { Button } from "@/components/ui/button";

interface AuthFormFooterProps {
	text: string;
	linkText: string;
	linkHref: string;
}

export function AuthFormFooter({
	text,
	linkText,
	linkHref,
}: AuthFormFooterProps) {
	return (
		<div className="mt-6 text-sm text-gray-600">
			{text}{" "}
			<Button variant="link" className="h-auto p-0 underline" asChild>
				<Link href={linkHref}>{linkText}</Link>
			</Button>
		</div>
	);
}
