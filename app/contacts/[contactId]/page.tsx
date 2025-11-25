import Image from 'next/image';
import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import GithubLogo from '@/public/github-mark.svg';
import Favorite from './_components/Favorite';
import type { Contact } from '@prisma/client';

type PageProps = {
  params: Promise<{
    contactId: string;
  }>;
};

export default async function ContactPage({ params }: PageProps) {
  const contactId = (await params).contactId;

  const contact: Contact = {
    avatar: '',
    createdAt: new Date(),
    email: '',
    favorite: true,
    first: 'John',
    github: 'johndoe',
    id: contactId,
    last: 'Doe',
    notes: 'This is a note.',
    position: 'Software Engineer',
    updatedAt: new Date(),
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {contact.avatar && (
        <div className="shrink-0">
          <Image
            priority
            width={192}
            height={192}
            className="mr-8 rounded-3xl bg-gray object-cover"
            alt={`${contact.first} ${contact.last} avatar`}
            key={contact.avatar}
            src={contact.avatar}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="flex-start flex items-center gap-4 text-3xl font-bold">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>
        {contact.position && <p className="text-2xl">{contact.position}</p>}
        {contact.email && (
          <p className="text-xl">
            <a href={'mailto:' + contact.email} className="no-underline hover:underline">
              {contact.email}
            </a>
          </p>
        )}
        {contact.github && (
          <div className="flex items-center gap-2">
            <div>
              <Image width={16} height={16} src={GithubLogo} alt="Github logo" />
            </div>
            <p className="text-xl text-primary">
              <a target="_blank" className="no-underline hover:underline" href={`https://github.com/${contact.github}`}>
                {contact.github}
              </a>
            </p>
          </div>
        )}
        {contact.notes && <div className="max-h-[300px] w-full overflow-auto 2xl:w-1/2">{contact.notes}</div>}
        <div className="my-4 flex gap-2">
          <LinkButton theme="secondary" href={`/contacts/${contactId}/edit`}>
            Edit
          </LinkButton>
          <Button type="submit" theme="destroy">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
