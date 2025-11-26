import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt =
	"ReEngage - Never Let a Customer Forget Their Annual Service Again";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
					fontFamily: "system-ui, -apple-system, sans-serif",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Background gradient overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)",
					}}
				/>

				{/* Main content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "80px 60px",
						textAlign: "center",
						maxWidth: "1000px",
						zIndex: 1,
					}}
				>
					{/* Logo/Brand */}
					<div
						style={{
							fontSize: "32px",
							fontWeight: "bold",
							color: "#ffffff",
							marginBottom: "40px",
							letterSpacing: "-0.5px",
						}}
					>
						ReEngage
					</div>

					{/* Main headline */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: "30px",
						}}
					>
						<div
							style={{
								fontSize: "64px",
								fontWeight: "bold",
								color: "#ffffff",
								lineHeight: "1.1",
								textAlign: "center",
								marginBottom: "20px",
								letterSpacing: "-1px",
							}}
						>
							Turn forgotten appointments into
						</div>
						<div
							style={{
								fontSize: "72px",
								fontWeight: "bold",
								color: "#FF6B35",
								lineHeight: "1.1",
								textAlign: "center",
								position: "relative",
							}}
						>
							recurring revenue
							{/* Underline decoration */}
							<div
								style={{
									position: "absolute",
									bottom: "-8px",
									left: "50%",
									transform: "translateX(-50%)",
									width: "90%",
									height: "8px",
									background:
										"linear-gradient(90deg, transparent, #FF6B35, transparent)",
									borderRadius: "4px",
								}}
							/>
						</div>
					</div>

					{/* Subtitle */}
					<div
						style={{
							fontSize: "28px",
							color: "#d1d5db",
							lineHeight: "1.5",
							textAlign: "center",
							maxWidth: "900px",
							marginTop: "20px",
						}}
					>
						AI-powered voice and SMS reminders that automatically re-engage your
						customers and drive repeat bookings.
					</div>

					{/* Decorative elements */}
					<div
						style={{
							display: "flex",
							gap: "12px",
							marginTop: "50px",
							alignItems: "center",
						}}
					>
						<div
							style={{
								width: "12px",
								height: "12px",
								borderRadius: "50%",
								background: "#FF6B35",
								boxShadow: "0 0 20px rgba(255, 107, 53, 0.5)",
							}}
						/>
						<div
							style={{
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								background: "#FF6B35",
								opacity: 0.7,
							}}
						/>
						<div
							style={{
								width: "4px",
								height: "4px",
								borderRadius: "50%",
								background: "#FF6B35",
								opacity: 0.5,
							}}
						/>
					</div>
				</div>

				{/* Bottom accent line */}
				<div
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: "6px",
						background: "linear-gradient(90deg, #FF6B35, #FF8C42, #FF6B35)",
					}}
				/>
			</div>
		),
		{
			...size,
		}
	);
}
