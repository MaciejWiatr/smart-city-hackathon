// sm: "30em",
// md: "48em",
// lg: "62em",
// xl: "80em",
// "2xl": "96em",

import { useMediaQuery } from "react-responsive";

const useChakraBreakpoints = () => {
    const isSm = useMediaQuery({ query: "(min-width: 30em)" });
    const isMd = useMediaQuery({ query: "(min-width: 48em)" });
    const isLg = useMediaQuery({ query: "(min-width: 62em)" });
    const isXl = useMediaQuery({ query: "(min-width: 80em)" });
    const is2xl = useMediaQuery({ query: "(min-width: 96em)" });

    return { isSm, isMd, isLg, isXl, is2xl };
};

export default useChakraBreakpoints;
