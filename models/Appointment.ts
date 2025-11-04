import mongoose from "mongoose";

const AppointmentStatusEnum = ["CONFIRMED", "COMPLETED"];

const AppointmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 30,
    },
    status: {
      type: String,
      required: true,
      enum: AppointmentStatusEnum,
      default: "CONFIRMED",
    },
    notes: {
      type: String,
      required: false,
    },
    reason: {
      type: String,
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "appointments",
  }
);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
