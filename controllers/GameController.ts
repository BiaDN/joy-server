import { StatusCodes } from "http-status-codes";
import { handleError, handleSuccess } from "../config/handleResponse";

import to from "../config/to"
import GameService from "../services/GameService"
const gameService = new GameService()
export default class GameController {
    async getListCharacter() {

    }

    async createPlayer(req: any, res: any) {
        const { name, avatar } = req.body
        const [err, user] = await to(gameService.createPlayer(name, avatar))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(user))
    }

    async createCharacter(req: any, res: any) {
        const { name, avatar, idUser } = req.body
        const [err, character] = await to(gameService.createCharacter(name, avatar, idUser))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async createItem(req: any, res: any) {
        const { idCharacter, avatar, name } = req.body
        const [err, character] = await to(gameService.createItem(idCharacter, avatar, name))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async equipCharacter(req: any, res: any) {
        const { idCharacter, idUser } = req.body
        const [err, character] = await to(gameService.equipCharacter(idCharacter, idUser))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async equipItemCharacter(req: any, res: any) {
        const { idCharacter, idItem } = req.body
        const [err, character] = await to(gameService.equipItemCharacter(idCharacter, idItem))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async getAllItemsCharacter(req: any, res: any) {
        const { idCharacter } = req.query
        const [err, character] = await to(gameService.getAllItemsCharacter(idCharacter))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async getAllCharacterUser(req: any, res: any) {
        const { idUser } = req.query
        const [err, character] = await to(gameService.getAllCharacterUser(idUser))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }

    async getInfoUser(req: any, res: any) {
        const { idUser } = req.query
        const [err, character] = await to(gameService.getInfoUser(idUser))
        if (err) return res.status(StatusCodes.BAD_REQUEST).json(handleError(err))
        return res.status(StatusCodes.OK).json(handleSuccess(character))
    }
}