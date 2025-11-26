import { createNavigationConfig } from 'next-safe-navigation';
import { z } from 'zod';

const searchParamsSchema = z
  .object({
    q: z.string().default(''),
  })
  .default({ q: '' });

export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(defineRoute => {
  return {
    contactId: defineRoute('/contacts/[contactId]', {
      params: z.object({
        contactId: z.string().default(''),
      }),
      search: searchParamsSchema,
    }),
    contactIdEdit: defineRoute('/contacts/[contactId]/edit', {
      params: z.object({
        contactId: z.string().default(''),
      }),
    }),
    home: defineRoute('/', {
      search: searchParamsSchema,
    }),
    intro: defineRoute('/intro'),
  };
});
