import * as yup from 'yup';

export const netWorthValidationSchema = yup.object().shape({
  value: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
  calculated_by_user_id: yup.string().nullable().required(),
});
