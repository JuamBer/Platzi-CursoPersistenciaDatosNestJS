import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  console.log(process.env);

  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    pgadmin: {
      default_email: process.env.PGADMIN_DEFAULT_EMAIL,
      default_password: process.env.PGADMIN_DEFAULT_PASSWORD,
    },
  };
});
