declare namespace NodeJS {
  interface ProcessEnv {
    DB_TYPE: 'mysql' | 'sqlite';
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
  }
} 