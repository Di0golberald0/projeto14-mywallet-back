import joi from 'joi';

const transferSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().min(1).required(),
    type: joi.string().valid('entry', 'exit').required()
});

export default transferSchema;