import useMediaQuery from "@hooks/useMediaQuery"
import { getToken } from '@api/twitch';
import { getData } from '@api/igdb';

export const isMobile = () => {
    const matches = useMediaQuery('(max-width: 959px)')

    if (matches) return true;
    return false;
} 

export const getProps = async (endpoint: string = 'games', fields: string = 'fields *; limit 9;') => {
    let token, data: object | undefined;
    if (!token) {
        token = await getToken();
    }
    if (token) {
        data = await getData(endpoint, token, fields)
    }

    return {
        props: {
        data: data || {}
        },
        revalidate: 1
    }
}