"use client";

import { motion } from "framer-motion";
import {
	AlertCircle,
	CalendarCheck,
	CheckCircle2,
	Clock,
	Mail,
	MessageSquare,
	Phone,
} from "lucide-react";

import React from "react";

// --- Configuration Constants for Node Shifting ---
// Move nodes 20px left and 25px up relative to the central circle
const NODE_SHIFT_X = -75;
const NODE_SHIFT_Y = -50;

// --- Types ---
interface LifecycleNodeProps {
	id: string;
	label: string;
	description: string;
	icon: React.ReactNode;
	subIcons?: React.ReactNode[];
	color: string;
	subtext?: string;
}

// --- Helper Math ---
// Converts degrees to radians
const toRad = (deg: number) => (deg * Math.PI) / 180;

// Calculates X/Y on circle for a given degree
const getPointOnCircle = (
	angleInDegrees: number,
	radius: number,
	centerX: number,
	centerY: number
) => {
	const angleInRad = toRad(angleInDegrees);
	return {
		x: centerX + radius * Math.cos(angleInRad),
		y: centerY + radius * Math.sin(angleInRad),
	};
};

// --- Components ---

interface NodeDisplayProps extends LifecycleNodeProps {
	x: number;
	y: number;
	delay?: number;
}

function LifecycleNode({
	label,
	description,
	icon,
	subIcons,
	x,
	y,
	color,
	delay = 0,
	subtext,
}: NodeDisplayProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay }}
			className="absolute z-10"
			style={{
				left: x,
				top: y,
				transform: "translate(-50%, -50%)", // Centers the node on the coordinate
			}}
		>
			<div
				className="flex flex-col items-center gap-2.5"
				style={{ width: "150px" }}
			>
				{/* Main Icon Card */}
				<div
					className="relative flex h-16 w-16 items-center justify-center rounded-xl border-2 bg-white shadow-lg transition-all hover:scale-110"
					style={{
						borderColor: color,
					}}
				>
					{/* Tinted background layer */}
					<div
						className="absolute inset-0 rounded-xl opacity-10"
						style={{ backgroundColor: color }}
					/>

					<div style={{ color }}>{icon}</div>

					{/* Sub-icons */}
					{subIcons && (
						<div className="absolute -bottom-2 flex gap-1">
							{subIcons.map((subIcon, idx) => (
								<div
									key={idx}
									className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
									style={{ color }}
								>
									{subIcon}
								</div>
							))}
						</div>
					)}
				</div>

				{/* Label Card */}
				<div
					className="rounded-lg px-3 py-1 text-center shadow-md"
					style={{ backgroundColor: color }}
				>
					<div className="text-xs font-bold text-white">{label}</div>
				</div>

				{/* Description */}
				<div className="text-center">
					<p className="text-[11px] leading-relaxed text-gray-600">
						{description}
					</p>
					{subtext && (
						<p className="mt-1 text-[10px] text-gray-400 italic">{subtext}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}

// Draws a curved arrow between two angles
function ConnectorArrow({
	startAngle,
	endAngle,
	radius,
	centerX,
	centerY,
	delay,
}: {
	startAngle: number;
	endAngle: number;
	radius: number;
	centerX: number;
	centerY: number;
	delay: number;
}) {
	// Calculate SVG path for an arc
	const start = getPointOnCircle(startAngle, radius, centerX, centerY);
	const end = getPointOnCircle(endAngle, radius, centerX, centerY);

	// Large arc flag is 0 because we are drawing small segments
	const pathData = `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;

	return (
		<motion.path
			d={pathData}
			fill="none"
			stroke="#94a3b8" // Slate-400
			strokeWidth="2"
			strokeDasharray="6 4" // Dashed line
			markerEnd="url(#arrowhead)"
			initial={{
				opacity: 0,
				pathLength: 0,
			}}
			animate={{
				opacity: 1,
				pathLength: 1,
			}}
			transition={{
				duration: 1.2,
				delay,
				ease: "easeInOut",
			}}
		/>
	);
}

export function WorkflowVisualization() {
	// Configuration
	const containerWidth = 800;
	const containerHeight = 650;

	// Center coordinates for the geometric circle (used by arrows)
	const centerX = containerWidth / 2; // 400
	const centerY = containerHeight / 2; // 325

	const radius = 220; // Radius of the circle

	// Data
	const nodes: LifecycleNodeProps[] = [
		{
			id: "service-completed",
			label: "Service Completed",
			description:
				"We automatically log when each customer's last service was completed.",
			icon: <CheckCircle2 className="h-7 w-7" />,
			color: "#8b5cf6",
		},
		{
			id: "time-elapsed",
			label: "Time Elapsed",
			description:
				"The system continuously monitors time since the last service visit.",
			icon: <Clock className="h-7 w-7" />,
			color: "#3b82f6",
		},
		{
			id: "service-due",
			label: "Service Due Detected",
			description:
				"Automatically identifies customers who are due for their next service.",
			icon: <AlertCircle className="h-7 w-7" />,
			color: "#10b981",
		},
		{
			id: "automated-outreach",
			label: "Automated Outreach",
			description:
				"AI sends personalized reminders via voice calls, SMS, and email.",
			icon: <Phone className="h-7 w-7" />,
			subIcons: [
				<Phone key="voice" className="h-2.5 w-2.5" />,
				<MessageSquare key="sms" className="h-2.5 w-2.5" />,
				<Mail key="email" className="h-2.5 w-2.5" />,
			],
			color: "#FF6B35",
		},
		{
			id: "customer-rebooks",
			label: "Customer Rebooks",
			description:
				"Booking is confirmed instantly, often handled by our voice agent.",
			icon: <CalendarCheck className="h-7 w-7" />,
			color: "#8b5cf6",
		},
	];

	// Calculations
	const stepAngle = 360 / nodes.length;
	const startAngleOffset = -90; // Start at 12 o'clock

	return (
		<div className="flex justify-center">
			<div
				className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm"
				style={{ width: containerWidth, height: containerHeight }}
			>
				{/* Enhanced Grid Background */}
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `
							linear-gradient(#cbd5e1 1px, transparent 1px),
							linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
						`,
						backgroundSize: "40px 40px, 40px 40px",
						opacity: 0.2,
					}}
				/>

				<svg className="pointer-events-none absolute inset-0 h-full w-full">
					<defs>
						<marker
							id="arrowhead"
							markerWidth="10"
							markerHeight="7"
							refX="9"
							refY="3.5"
							orient="auto"
						>
							<polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
						</marker>
					</defs>

					{/* Render Arrows: These use the unshifted centerX/centerY */}
					{nodes.map((_, i) => {
						const currentAngle = startAngleOffset + i * stepAngle;
						const nextAngle = startAngleOffset + (i + 1) * stepAngle;

						// 22 degrees gap to clear the node card
						const arrowStart = currentAngle + 22;
						const arrowEnd = nextAngle - 22;

						return (
							<ConnectorArrow
								key={`arrow-${i}`}
								startAngle={arrowStart}
								endAngle={arrowEnd}
								radius={radius}
								centerX={centerX} // 400
								centerY={centerY} // 325
								delay={0.3 + i * 0.2}
							/>
						);
					})}
				</svg>

				{/* Render Nodes: These are shifted visually */}
				{nodes.map((node, i) => {
					const angle = startAngleOffset + i * stepAngle;
					// Calculate position on the TRUE circle
					const { x, y } = getPointOnCircle(angle, radius, centerX, centerY);

					return (
						<LifecycleNode
							key={node.id}
							{...node}
							// Apply the manual shift to move the node visual up and left
							x={x + NODE_SHIFT_X}
							y={y + NODE_SHIFT_Y}
							delay={i * 0.2}
						/>
					);
				})}
			</div>
		</div>
	);
}
