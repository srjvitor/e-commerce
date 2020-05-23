module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'yourpassword',
  database: 'ecommerce',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};