import { Email, EmailAddress } from '@clerk/nextjs/server';
import {Schema, model, models} from 'mongoose'

export interface IUser extends Document {
    clerkId: string,
    email:string,
    user_name: string,
    photo:string,
    first_name: string,
    last_name: string,
    planId: string,
    creditBalance: number,
    createdAt:  Date,
    updatedAt: Date
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true,unique: true},
    user_name: {type: String, required:true, unique: true},
    photo:{type: String},
    first_name: {type: String},
    last_name: {type: String},
    planId: {type: String, default: 1},
    creditBalance: {type: Number, default: 10},
    createdAt:  {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}

});

const User = models.User || model('User', UserSchema);
 
 export default User