interface IMailConfig {
  driver: 'mailtrap' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'mailtrap',

  defaults: {
    from: {
      email: 'gustavo@harff.dev',
      name: 'Gustavo',
    },
  },
} as IMailConfig;
