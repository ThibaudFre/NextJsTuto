import mongoose, { mongo } from 'mongoose';


export async function connect() {
  try {
        mongoose.connect(process.env.MONGO_URI! )
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
            });

        connection.on('error', (error) => {
          console.log('MongoDB Connection Error. Please make sure that Mongodb connection is running. ' + error);
          process.exit();
        });
    } catch (error) {
    console.log('something went wrong', error);
  }
}