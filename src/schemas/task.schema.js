import { z } from 'zod';

export const createSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
    })
    .toUpperCase(true)
    .min(2)
    .max(50),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(2)
    .max(100),
  date: z
    .string({
      required_error: 'Date is required',
    })
    .datetime()
    .optional(100),
});

export const updateSchema = z.object({
  title: z.string().min(2).max(50).optional(),
  description: z.string().min(2).max(100).optional(),
  date: z.string().datetime().optional(),
});
