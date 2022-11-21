import db from "../db.js";

export async function authMiddleware(req, res, next) {
  console.log("entrei")
  const authorization = req.headers.authorization;
  const token = authorization?.replace('Bearer ', '')
  console.log(authorization)
  console.log(token)

  if (!token) {
    return res.sendStatus(401)
  }

  const session = await db.collection('sessions').findOne({ token });
  if (!session) {
    return res.sendStatus(401)
  }

  const user = await db.collection('users').findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  res.locals.session = session;
  res.locals.user = user;
  next();
}