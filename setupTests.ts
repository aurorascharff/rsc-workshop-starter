import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { beforeEach, afterEach, vi } from 'vitest';

beforeEach(() => {
  vi.resetAllMocks();

  vi.mock('@/validations/routeSchema', () => {
    return {
      routes: {
        contactId: {
          $parseParams: () => {
            return {
              contactId: 'mockedContactId',
            };
          },
          default: () => {
            return '/contacts/mockedContactId';
          },
        },
        contactIdEdit: () => {
          return '/contacts/mockedContactId/edit';
        },
        contacts: '/contacts',
        home: '/',
        intro: '/intro',
      },
    };
  });
});

afterEach(() => {
  cleanup();
});
