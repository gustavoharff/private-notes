import { container } from 'tsyringe';

import INotesRepository from '@modules/notes/repositories/INotesRepository';
import NotesRepository from '@modules/notes/infra/typeorm/repositories/NotesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import '@modules/users/providers';
import './providers';

container.registerSingleton<INotesRepository>(
  'NotesRepository',
  NotesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
