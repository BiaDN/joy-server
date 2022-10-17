import express from 'express';
import GameController from "../controllers/GameController"
const gameRouter = express.Router();

const gameController = new GameController();
gameRouter.post("/createPlayer",gameController.createPlayer);
gameRouter.post("/createCharacter",gameController.createCharacter);
gameRouter.post("/createItem",gameController.createItem);
gameRouter.post("/equipCharacter",gameController.equipCharacter);
gameRouter.post("/equipItemCharacter",gameController.equipItemCharacter);
gameRouter.post("/editNameCharacter",gameController.editNameCharacter);
gameRouter.get("/getAllItemsCharacter",gameController.getAllItemsCharacter);
gameRouter.get("/getAllCharacterUser",gameController.getAllCharacterUser);
gameRouter.get("/getInfoUser",gameController.getInfoUser);
gameRouter.get("/getInfoCharacter",gameController.getInfoCharacter);






export default gameRouter