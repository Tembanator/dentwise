import mongoose from "mongoose";

const GenderEnum = ["MALE", "FEMALE"];

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: GenderEnum,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "doctors",
  }
);

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);

export default Doctor;
