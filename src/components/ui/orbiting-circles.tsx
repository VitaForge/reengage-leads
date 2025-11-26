"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface OrbitingCirclesProps {
	children?: React.ReactNode;
	className?: string;
	reverse?: boolean;
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
	iconSize?: number;
	speed?: number;
}

export function OrbitingCircles({
	children,
	className,
	reverse = false,
	duration = 20,
	delay = 10,
	radius = 160,
	path = true,
	iconSize = 30,
	speed = 1,
}: OrbitingCirclesProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const childrenArray = Array.isArray(children)
		? children
		: children
			? [children]
			: [];

	const orbitDuration = duration / speed;
	const animationName = `orbit-${radius}-${orbitDuration}`;

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
					@keyframes ${animationName} {
						from {
							transform: rotate(0deg) translate(${radius}px) rotate(0deg);
						}
						to {
							transform: rotate(360deg) translate(${radius}px) rotate(-360deg);
						}
					}
				`,
				}}
			/>
			<div
				className={cn(
					"relative flex h-full w-full items-center justify-center",
					className
				)}
			>
				{path && (
					<svg
						className="pointer-events-none absolute inset-0 h-full w-full"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							className="stroke-gray-200"
							cx="50%"
							cy="50%"
							fill="none"
							r={radius}
							strokeWidth="1"
						/>
					</svg>
				)}
				{childrenArray.map((child, index) => {
					const angle = (360 / childrenArray.length) * index;
					return (
						<div
							key={index}
							className="absolute flex items-center justify-center"
							style={{
								transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
								animation: `${animationName} ${orbitDuration}s linear infinite`,
								animationDirection: reverse ? "reverse" : "normal",
								animationDelay: `${(delay / childrenArray.length) * index}s`,
							}}
						>
							<div
								className="flex items-center justify-center"
								style={{
									width: `${iconSize}px`,
									height: `${iconSize}px`,
								}}
							>
								{child}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
