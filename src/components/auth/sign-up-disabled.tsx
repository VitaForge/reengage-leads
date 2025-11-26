import { Wrench } from "lucide-react";

export function SignUpDisabled() {
	return (
		<div className="w-full max-w-md">
			<div className="mb-8 text-center">
				<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
					<Wrench className="h-8 w-8 text-[rgb(var(--st-orange))]" />
				</div>
				<h1 className="mb-2 text-2xl font-semibold">
					Sign up is currently disabled
				</h1>
				<p className="text-sm text-gray-600">
					We're currently not accepting new sign-ups. Please check back later.
				</p>
			</div>
		</div>
	);
}
