import mongoose from 'mongoose';

const { Schema } = mongoose;

const AdminRequestSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    requestDetails: {
      motivation: {
        type: String,
      },
      resorts: [
        {
          name: { type: String, required: true },
          location: { type: String, required: true },
          description: { type: String },
          documents: [{ type: String }],
        },
      ],
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

AdminRequestSchema.index({ userId: 1, status: 1 });


export default mongoose.models.AdminRequest || mongoose.model('AdminRequest', AdminRequestSchema);