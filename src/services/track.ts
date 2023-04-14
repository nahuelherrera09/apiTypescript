import { response } from "express";
import { Track } from "../interfaces/track.interface";
import TrackModel from "../models/track";


const insertTrack = async (track: Track ) =>{
    const responseInsert = await TrackModel.create(track);
    return responseInsert
}

const getTracks = async() =>{
    const responseItems = await TrackModel.find({});
    return responseItems
}

const getTrack = async(id: string) =>{
    const responseItem = await TrackModel.findOne({_id:id})
    return responseItem;
}

const updateTrack = async(id: string, data: Track) =>{
    const responseItem = await TrackModel.findOneAndUpdate({_id:id},data,{new:true});
    return responseItem

}

const deleteTrack = async (id: string) =>{
    const responseItem = await TrackModel.deleteOne({_id:id})
    return responseItem

}
export { insertTrack, getTracks, getTrack, updateTrack,deleteTrack }