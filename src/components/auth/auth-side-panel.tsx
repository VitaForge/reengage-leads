import { Logo } from "@/components/branding/logo";

interface AuthSidePanelProps {
	title: string;
	description: string;
	bgColor?: "blue" | "red";
}

export async function AuthSidePanel({
	title,
	description,
	bgColor = "blue",
}: AuthSidePanelProps) {
	const bgClass =
		bgColor === "red"
			? "bg-gradient-to-br from-[rgb(var(--st-red))]/10 to-[rgb(var(--st-orange))]/10"
			: "bg-gradient-to-br from-[rgb(var(--st-orange))]/10 to-[rgb(var(--st-blue))]/10";

	return (
		<div
			className={`relative hidden ${bgClass} lg:flex lg:w-2/5 lg:flex-col lg:px-12`}
		>
			<div className="relative z-10 mb-8 pt-6">
				<Logo />
			</div>
			<div className="relative z-10 flex flex-1 flex-col justify-center">
				<div className="max-w-md">
					<h2 className="mb-4 text-4xl font-semibold text-gray-900">{title}</h2>
					<p className="text-lg leading-relaxed text-gray-700">{description}</p>
				</div>
			</div>
		</div>
	);
}
