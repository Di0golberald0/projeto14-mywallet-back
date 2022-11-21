import transferSchema from '../schemas/transferSchema.js';

export function transferMiddleware(req, res, next) {
  const { value, description, type } = req.body;

  const validation = transferSchema.validate({ value, description, type });
  if (validation.error) {
    return res.sendStatus(422);
  }

  res.locals.transfer = { value, description, type };
  next();
}