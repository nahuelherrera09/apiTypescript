import { Request, Response } from "express";
import { insertCar, getCars, getCar } from "../services/item";
import { handleHttp } from "../utils/error.handler";

//Un controlador forma la orquestacion entre infraestructura y logica de negocio, solo debe saber de req y res, no debe tener lógica de negocio

const getItem = async({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
         res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM",e);
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS",e);
    }
}
const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM",e);
    }
}
const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM",e);
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM",e);
    }
}

export { getItems, getItem, postItem, updateItem, deleteItem}