const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("creating table............");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TABLE IF NOT EXISTS users(
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        email VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL,
        password TEXT NOT NULL,
        avatarImg TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
  console.log("created table............");
};

const insertData = async () => {
  await sql``;
};
createTables();
insertData();
