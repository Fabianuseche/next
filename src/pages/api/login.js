export default function handler(req, res) {

  console.log(req.body)

  res.status(200).json({ message: "Hello from Next.js!" });
}
