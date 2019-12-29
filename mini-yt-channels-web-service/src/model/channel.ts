import {
  object, number, string,
} from 'yup';

export interface Channel {
  id?: Number;
  name: String;
}

const validationSchema = object({
  id: number().positive(),
  name: string().trim().required(),
});

export function validate(channel: Channel): Promise<Channel> {
  return validationSchema.validate(channel);
}
