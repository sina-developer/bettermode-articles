import { CustomField } from '../types/global';

export const getCustomFieldValue = (fields: CustomField[], key: string) => {
  return (
    JSON.parse(fields.find((field) => field.key === key)?.value || '""') || ''
  );
};
