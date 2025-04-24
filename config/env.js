

import { config } from 'dotenv';

// Завантаження .env.<environment>.local, напр. .env.development.local
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Експортуємо PORT із process.env
export const { PORT , NODE_ENV,DB_URI,JWT_EXPIRES_IN,JWT_SECRET  ,ARCJET_ENV ,ARCJET_KEY,QSTASH_CURRENT_SIGNING_KEY,QSTASH_URL,QSTASH_TOKEN ,EMAIL_PASSWORD  } = process.env;

