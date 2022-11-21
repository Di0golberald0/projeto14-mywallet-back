import transferSchema from '../schemas/transferSchema.js';

export function transferMiddleware(req, res, next) {
  const { value, description, type } = req.body;

  const validation = transferSchema.validate({ value, description, type });
  if (validation.error) {
    return res.sendStatus(422);
  }
  if(type === 'exit' && value >= 0) {
    return res.status(422).send("Valor precisa ser negativo para saidas")
  }
  if(type === 'entry' && value <= 0) {
    return res.status(422).send("Valor precisa ser positivo para entradas")
  }

  res.locals.transfer = { value, description, type };
  next();
}