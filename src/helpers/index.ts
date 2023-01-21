import useMediaQuery from "@hooks/useMediaQuery"

export const isMobile = () => {
    const matches = useMediaQuery('(max-width: 959px)')

    if (matches) return true;
    return false;
} 
