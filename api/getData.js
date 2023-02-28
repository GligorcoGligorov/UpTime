export default async (req, res) => {
    const url = req.query.url;

    const response =
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200 && data.data.length > 0) {
                    res.send({ status: data.status });
                } else {
                    res.send({ status: 'Bad Request' });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).send({ status: "Bad Request", error: error.message });
            });
}