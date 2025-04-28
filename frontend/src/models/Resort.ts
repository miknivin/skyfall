import mongoose from "mongoose";

const { Schema } = mongoose;

const ResortSchema = new Schema(
  {
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Links to Admin who manages this resort
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: [
      {
        type: String, // URLs to photos (e.g., AWS S3)
      },
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending", // Super Admin must approve for listing
    },
    rooms: [
      {
        roomType: {
          type: String, // e.g., "Deluxe", "Suite"
          required: true,
        },
        capacity: {
          type: Number, // Max guests per room
          required: true,
        },
        pricePerNight: {
          type: Number,
          required: true,
        },
        roomCount: {
          type: Number, // Number of rooms of this type
          required: true,
        },
      },
    ],
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Booking", // Links to Booking collection
      },
    ],
    availability: [
      {
        date: {
          type: Date,
          required: true,
        },
        availableRooms: [
          {
            roomType: { type: String },
            count: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Resort", ResortSchema);
