import { createContext } from "react";

export const GeneralContext = createContext({
	isDesktop: false,
	isTablet: false,
	isMobile: false,
});
