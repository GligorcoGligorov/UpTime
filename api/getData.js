import axios from 'axios'

export default async (req, res) => {
  const link = 'https://facebook.com'
  const response = await axios.get(link)
  res.json(response.data)
}