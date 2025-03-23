const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if(conn){
      console.log('MongoDB Connected...');
    }
  } catch (err) {
    console.error('MongoDB Connection Failed:',err.message);
    process.exit(1);
    
  }
};

module.exports = connectDB;
