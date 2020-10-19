import { Schema, model } from 'mongoose';

const ReservSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    house: {
        type: Schema.Types.ObjectId,
        ref:'House'
    }
});

export default model('Reserv', ReservSchema);