module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbooks.db3',
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true,

  }
}