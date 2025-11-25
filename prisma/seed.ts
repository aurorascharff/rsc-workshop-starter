/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

const CONTACTS = [
  {
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQFrYA7kjR4Wqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668631096577?e=1765411200&v=beta&t=XEqorlyJkp1D4iCXMzl7CA4EM-P4nMrBhCewPGBWm3M',
    email: 'devlin.duldulao@inmeta.no',
    favorite: true,
    first: 'Devlin',
    github: 'webmasterdevlin',
    id: '0649cf60-ab42-4309-aaff-38c5677653d4',
    last: 'Duldulao',
    notes:
      'Recognized as a Microsoft MVP for developer technologies for five consecutive years, Devlin is a seasoned full-stack web developer specializing in front-end technologies. With broad experience encompassing mobile development and cloud technology, he stands as an authority in his field, which is showcased by his accomplishments as a conference speaker and author of three developer-focused books published by Packt and Apress.',
    position: 'Chief Consultant',
  },
  {
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQFcCDu4ygJMvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731698370320?e=1765411200&v=beta&t=kKIEmrQj5YiVRM_KVOmkDH-5kQ0raexNmm_roOWK73E',
    email: 'aurora.scharff@inmeta.no',
    favorite: false,
    first: 'Aurora',
    github: 'aurorascharff',
    id: '1cd89022-64e8-4a76-aec6-43433478e32f',
    last: 'Scharff',
    notes:
      'Aurora is a skilled frontend developer and consultant at Crayon Consulting. With several years of experience in the workforce, she has handled complex projects and worked with a wide range of technologies, including handling large amounts of data and focusing on scalability.',
    position: 'Consultant',
  },
  {
    avatar:
      'https://media.licdn.com/dms/image/v2/C5103AQEW-xbR-2s5UA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516466254031?e=1765411200&v=beta&t=Xyj_LGQ6OuWsAkg4uA5QVLxEArtW0pjAjp1XQnJDBVM',
    email: 'caspar.hoegh@inmeta.no',
    favorite: false,
    first: 'Caspar',
    id: '2b3b3b3b-64e8-4a76-aec6-43433478e32f',
    last: 'Høegh',
    notes:
      'Caspar is an experienced architect, developer, and technical lead in the MSDev department at Crayon Consulting, with 13 years of work experience as a full-stack developer and a BcS from HiBu (2013).',
    position: 'Senior Consultant / Architect',
  },
];

const USERS: User[] = [
  {
    id: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
    name: 'Jane Doe',
  },
  {
    id: '3ea4ae6c-adda-40eb-b254-9cfe0c8e8113',
    name: 'John Doe',
  },
];

const MESSAGES = [
  {
    contactId: '1cd89022-64e8-4a76-aec6-43433478e32f',
    content: 'Hello, how are you doing?',
    createdById: '3ea4ae6c-adda-40eb-b254-9cfe0c8e8113',
  },
  {
    contactId: '0649cf60-ab42-4309-aaff-38c5677653d4',
    content: 'Hi, how are you!',
    createdById: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
  },
  {
    contactId: '2b3b3b3b-64e8-4a76-aec6-43433478e32f',
    content: 'Hello :)',
    createdById: '2bccacd4-64de-4f1d-97ed-9722cdf99cd9',
  },
];

async function seed() {
  await Promise.all(
    CONTACTS.map(contact => {
      return prisma.contact.create({
        data: {
          avatar: contact.avatar,
          email: contact.email,
          favorite: contact.favorite,
          first: contact.first,
          github: contact.github,
          id: contact.id,
          last: contact.last,
          notes: contact.notes,
          position: contact.position,
        },
      });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create contact records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create contact records', e);
    });

  await Promise.all(
    USERS.map(user => {
      return prisma.user.create({ data: { id: user.id, name: user.name } });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create user records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create user records', e);
    });

  await Promise.all(
    MESSAGES.map(message => {
      return prisma.message.create({
        data: {
          contactId: message.contactId,
          content: message.content,
          createdById: message.createdById,
        },
      });
    }),
  )
    .then(() => {
      return console.info('[SEED] Successfully create message records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create message records', e);
    });
}

seed();
