import mongoose from 'mongoose';
import config from 'config';

const db: string = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Mongo DB Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
