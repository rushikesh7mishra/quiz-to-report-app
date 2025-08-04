export default async function handler(req, res) {
  res.setHeader("Set-Cookie", `hasPaid=true; Path=/; HttpOnly; Secure; SameSite=Strict`);
  res.status(200).json({ message: "Cookie set" });
}
