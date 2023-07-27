import type { VercelRequest, VercelResponse } from '@vercel/node'

const fetchData = async () => {
    try {
        const response = await fetch(
            "https://oku.club/api/collections/user/mikhailarden/reading?format=json"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here, you can return an error object or throw an error.
        // For simplicity, let's return an empty object in case of an error.
        return {};
    }
};

export default async function handler(req, res) {
    try {
        const data = await fetchData();
        res.status(200).json(data); // Sending the data in the response
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" }); // Sending an error response
    }
}
