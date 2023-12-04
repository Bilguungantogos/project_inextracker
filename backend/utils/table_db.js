const { sql } = require("../config/pgDb");

// const createTables = async () => {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`CREATE TABLE IF NOT EXISTS users(
//         id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
//         email VARCHAR(50) UNIQUE NOT NULL,
//         name VARCHAR(50) NOT NULL,
//         password TEXT NOT NULL,
//         avatarImg TEXT,
//         createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;
// };

// const createTablesforcategory = async () => {
//   await sql`CREATE TABLE IF NOT EXISTS usercategory(
//     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
//     name VARCHAR(100),
//     description TEXT,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     categoryImg TEXT ,
//     categoryColor TEXT)`;
// };

const createTablesfortransaction = async () => {
  console.log("creating table............");
  await sql`CREATE TABLE IF NOT EXISTS usertransaction(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    name TEXT,
    amount REAL NOT NULL,
    transaction_type transaction_type,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id UUID REFERENCES usercategory(id)
  )`;
  console.log("created table............");
};

// const insertData = async () => {
//   await sql``;
// };

// createTables();
// createTablesforcategory();
createTablesfortransaction();
