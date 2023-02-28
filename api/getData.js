export default async (req, res) => {
    const url = req.query.url;

    const response = await fetch(url);

    res.json(response.status);
}