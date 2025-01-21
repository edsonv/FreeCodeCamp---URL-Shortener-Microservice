const { default: mongoose } = require('mongoose');
require('dotenv').config();

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });

    console.log('Database connected successfully.');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database.');
  }
};

module.exports = { dbConnection };
