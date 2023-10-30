import Joi from 'joi';

const productParams = Joi.object({
  sku: Joi.string().label('sku').optional().allow('', null),
});

export const auditTrailValidator = {
  productParams,
};
