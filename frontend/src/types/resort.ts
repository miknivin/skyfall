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

export interface IEventSpaceAvailability {
  date: Date;
  status: "available" | "booked" | "temporaryClosed";
}

export interface IEventSpace {
  _id?: string;
  name: string;
  type: string;
  capacity: number;
  pricePerEvent: number;
  description?: string;
  images?: string[];
  availability?: IEventSpaceAvailability[];
  bookings?: Types.ObjectId[];
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
  eventSpaces?: IEventSpace[];
  bookings?: Types.ObjectId[];
  availability?: IBookingAvailability[];
  createdAt?: Date;
  updatedAt?: Date;
}
