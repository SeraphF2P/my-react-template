"use client";

import { useState, type FC } from "react";
import { cn } from "~/lib/cva";
import { type BtnProps, Btn } from "~/ui";

interface ToggleBtnProps extends BtnProps {
	whenToggled?: string;
	defaultToggleState?: boolean;
}

const ToggleBtn: FC<ToggleBtnProps> = ({
	defaultToggleState = false,
	className,
	whenToggled,
	children,
	onClick,
	...props
}) => {
	const [isToggled, setisToggled] = useState(defaultToggleState);

	return (
		<Btn
			onClick={(e) => {
				e.preventDefault();
				setisToggled((prev) => !prev);
				if (typeof onClick === "function") {
					onClick(e);
				}
			}}
			className={cn(className, isToggled && whenToggled)}
			data-checked={isToggled}
			{...props}
		>
			{children}
		</Btn>
	);
};

export default ToggleBtn;
