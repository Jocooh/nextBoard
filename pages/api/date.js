export default function dateHandler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(new Date().toLocaleString());
  }
}
