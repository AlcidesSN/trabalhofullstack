module.exports = {
  development: {
    username: 'usuario',   // seu nome de usuário do PostgreSQL
    password: 'senha',     // sua senha do PostgreSQL
    database: 'api-node',  // nome do seu banco de dados
    host: 'localhost',     // host do banco de dados
    dialect: 'postgres',   // define o dialeto como postgres
  },
  test: {
    username: 'usuario',
    password: 'senha',
    database: 'api-node',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'usuario',
    password: 'senha',
    database: 'api-node',
    host: 'localhost',
    dialect: 'postgres',
  }
};
