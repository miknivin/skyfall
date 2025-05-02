import { Types } from "mongoose";

export interface IRoom {
  _id?: string;
  roomType: string;
  capacity: number;
  pricePerNight: number;
  roomCount: number;
  images?: string[];
}

export interface IBookingAvailability {
  date: Date;
  availableRooms: {
    roomType: string;
    count: number;
  }[];
}

export interface IResort {
  _id?: Types.ObjectId;
  adminId: Types.ObjectId;
  name: string;
  location: string;
  description?: string;
  images?: string[];
  status?: "pending" | "approved" | "rejected";
  rooms: IRoom[];
  bookings?: Types.ObjectId[];
  availability?: IBookingAvailability[];
  createdAt?: Date;
  updatedAt?: Date;
}
