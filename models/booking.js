import { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
    firstname: {
    type: String,
    required: [true, 'Name is required.'],
    },
  email: {
    type: String,
    required: [true, 'Email is required.'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
  location: {
    type: String,
    required: [true, 'Nearest Bus-stop is required.'],
  },
  city: {
    type: String,
    required: [true, 'City is required.'],
  },
  country: {
    type: String,
    required: [true, 'Nationality is required.'],
  },
});

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;