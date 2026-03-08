const mongoose = require("mongoose");

const AvailabilitySlotSchema = new mongoose.Schema({
  type: { type: String, enum: ["weekly", "date"], default: "weekly" },
  dayOfWeek: { type: Number },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  duration: { type: Number, default: 30 },
  month: { type: Number },
  year: { type: Number },
  date: { type: Date },
});

const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
<<<<<<< HEAD
  phone: String,
=======
  phone: Number,
>>>>>>> b9929481d6390a51bf2019e34ea260180d9d7878
  specialization: String,
  image: String,
  experience: String,
  education: String,
  certifications: String,
  languages: String,
  hospital: String,
  availabilitySlots: [AvailabilitySlotSchema],
});

module.exports = mongoose.model("Doctor", doctorSchema);
