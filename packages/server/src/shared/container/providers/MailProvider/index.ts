import { container } from 'tsyringe';

import mailConfig from '@config/mail';

import IMailProvider from './models/IMailProvider';

import MailTrapProvider from './implementations/MailTrapProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  mailtrap: MailTrapProvider,
  ses: SESMailProvider,
};

container.registerSingleton<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
