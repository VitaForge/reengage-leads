import { Separator } from "@/components/ui/separator";

interface AuthDividerProps {
	text: string;
}

export function AuthDivider({ text }: AuthDividerProps) {
	return (
		<div className="relative my-6 flex items-center">
			<Separator className="flex-1 bg-gray-300" />
			<span className="bg-white px-4 text-xs text-gray-500">{text}</span>
			<Separator className="flex-1 bg-gray-300" />
		</div>
	);
}
