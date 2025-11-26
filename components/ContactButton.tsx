import Link from 'next/link';
import React from 'react';
import { cn } from '@/utils/cn';
import type { Contact } from '@prisma/client';

export default function ContactButton({ contact }: { contact: Contact }) {
  const isActive = false;

  return (
    <Link
      className={cn(
        isActive ? 'bg-primary text-white' : 'hover:bg-gray',
        'flex w-full items-center justify-between gap-4 overflow-hidden rounded-lg p-2 whitespace-pre hover:no-underline!',
      )}
      href={`/contacts/${contact.id}`}
    >
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i className={cn(isActive ? 'text-white' : 'text-gray-500')}>No Name</i>
      )}
      {contact.favorite ? (
        <span className={cn('float-right', isActive ? 'text-white' : 'text-yellow-500')}>★</span>
      ) : null}
    </Link>
  );
}
