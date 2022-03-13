CREATE TABLE IF NOT EXISTS "specialists" (
  "id" SERIAL,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "education" VARCHAR(255) NOT NULL,
  "specialization" VARCHAR(255) NOT NULL
);