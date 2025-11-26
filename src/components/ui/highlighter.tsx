"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useEffect, useRef, useState } from "react";

interface HighlighterProps {
	children: React.ReactNode;
	color?: string;
	action?: "highlight" | "underline";
	strokeWidth?: number;
	animationDuration?: number;
	iterations?: number;
	padding?: number;
}

export function Highlighter({
	children,
	color = "#ffd1dc",
	action = "highlight",
	strokeWidth = 1.5,
	animationDuration = 500,
	iterations = 2,
	padding = 2,
}: HighlighterProps) {
	const textRef = useRef<HTMLSpanElement>(null);
	const [pathData, setPathData] = useState<string>("");
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	const pathLength = useMotionValue(0);
	const opacity = useMotionValue(0);

	const pathLengthSpring = useSpring(pathLength, {
		damping: 20,
		stiffness: 90,
	});

	const opacitySpring = useSpring(opacity, {
		damping: 20,
		stiffness: 90,
	});

	const pathOpacity = useTransform(opacitySpring, [0, 1], [0, 1]);

	useEffect(() => {
		if (!textRef.current) return;

		const updatePath = () => {
			if (!textRef.current) return;

			const rect = textRef.current.getBoundingClientRect();
			setDimensions({ width: rect.width, height: rect.height });

			const p = padding;
			const w = rect.width;
			const h = rect.height;

			let path = "";

			if (action === "highlight") {
				path = `M ${p} ${h - p} Q ${p} ${h * 0.5} ${w * 0.2} ${h * 0.5} T ${w - p} ${h * 0.5} T ${w - p} ${h - p}`;
			} else if (action === "underline") {
				path = `M ${p} ${h - p} Q ${w * 0.5} ${h - p * 2} ${w - p} ${h - p}`;
			}

			setPathData(path);
		};

		updatePath();
		window.addEventListener("resize", updatePath);

		return () => window.removeEventListener("resize", updatePath);
	}, [action, padding]);

	useEffect(() => {
		if (pathData && dimensions.width > 0) {
			opacity.set(1);
			const animate = () => {
				pathLength.set(0);
				setTimeout(() => {
					pathLength.set(1);
				}, 100);
			};
			animate();
		}
	}, [pathData, dimensions.width, pathLength, opacity]);

	return (
		<span className="relative inline-block">
			<span ref={textRef} className="relative z-10">
				{children}
			</span>
			{pathData && dimensions.width > 0 && (
				<svg
					className="pointer-events-none absolute inset-0 z-0"
					style={{
						width: dimensions.width,
						height: dimensions.height,
					}}
				>
					<motion.path
						d={pathData}
						fill={action === "highlight" ? color : "none"}
						stroke={action === "underline" ? color : "none"}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
						style={{
							pathLength: pathLengthSpring,
							opacity: pathOpacity,
						}}
					/>
				</svg>
			)}
		</span>
	);
}
