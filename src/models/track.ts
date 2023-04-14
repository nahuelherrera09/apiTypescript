import { Schema, Types, model, Model } from "mongoose";
import { Track } from "../interfaces/track.interface";

const TrackSchema = new Schema<Track>(
    {
        name:{
            type:String,
            required: true,
        },
        artist:{
            type: String,
            required:true
        },
        genre:{
            type:String,
            required:true
        },
        label:{
            type:String,
            required:true
        },
        bpm:{
            type: Number,
            required:true
        },
        moment:{
            type: String,
            enum: ["warmap" , "bomb" , "after" , "transition"],
            required:true
        }
    },
    {
        timestamps: true,
        versionKey:false,
    }  
)

const TrackModel = model('tracks', TrackSchema);

export default TrackModel;
