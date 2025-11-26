import { Wrench } from "lucide-react";

export function UnderConstruction() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50">
			<div className="text-center">
				<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--st-orange))]/10">
					<Wrench className="h-8 w-8 text-[rgb(var(--st-orange))]" />
				</div>
				<h1 className="mb-2 text-3xl font-bold text-gray-900">
					Under Construction
				</h1>
				<p className="text-gray-600">
					We're working on something amazing. Check back soon!
				</p>
			</div>
		</div>
	);
}
