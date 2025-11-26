import { Loader2 } from "lucide-react";

interface AuthLoadingStateProps {
	message: string;
}

export function AuthLoadingState({ message }: AuthLoadingStateProps) {
	return (
		<div className="w-full max-w-md">
			<div className="flex flex-col items-center gap-4">
				<Loader2 className="h-8 w-8 animate-spin text-[rgb(var(--st-orange))]" />
				<p className="text-sm text-gray-600">{message}</p>
			</div>
		</div>
	);
}
