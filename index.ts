import type { VercelRequest, VercelResponse } from '@vercel/node'

const fetchData = async () => {
    try {
        const response = await fetch(
            "https://oku.club/api/users/profile/mikhailarden?format=json"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default function handler(req: VercelRequest, res: VercelResponse) {

    const getData = async () => {
        try {
            const data = await fetchData();
            return data;
        } catch (error) {
            return error;
        }
    };


    return getData();
}
