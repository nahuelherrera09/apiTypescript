import { Request, Response } from "express";
import { getTrack,getTracks,updateTrack, insertTrack,deleteTrack } from "../services/track";
import { handleHttp } from "../utils/error.handler";

//Un controlador forma la orquestacion entre infraestructura y logica de negocio, solo debe saber de req y res, no debe tener lógica de negocio

const getItem = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getTrack(id)
        const data = response ? response : "NOT_FOUND";
        res.send(data)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM",e);
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getTracks();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS",e);
    }
}
const postItem = async ({ body }: Request, res: Response) => {
    try {
       const response = await insertTrack(body);
       res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM",e);
    }
}
const updateItem = async ({params,body}: Request, res: Response) => {
    try {
       const { id } = params;
       const response = await updateTrack(id, body);
       res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM",e);
    }
}
const deleteItem = async ({params}: Request, res: Response) => {
    try {
       const { id } = params;
       const response = await deleteTrack(id);
       res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM",e);
    }
}

export { getItems, updateItem, deleteItem,getItem, postItem }