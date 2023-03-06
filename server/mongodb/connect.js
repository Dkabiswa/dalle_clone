import mongoose from 'mongoose'

const connnectDb = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.error(err))
}

export default connnectDb
