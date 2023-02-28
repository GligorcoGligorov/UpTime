export default async (req, res) => {
    const url = req.query.url;

    const response =
        await fetch(url)
            .then(response => {
                if (response.status === 200) {
                    res.send({ status: response.status });
                } else {
                    res.send({ status: 'Bad Request' });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).send({ status: "Bad Request", error: error.message });
            });
}