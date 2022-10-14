import { Aggregate, Types } from "mongoose";
import { Characters } from "../models/Character";
import { Items } from "../models/Items";
import { Users } from "../models/User";

export default class GameService {
    async getListCharacter() {

    }

    async createPlayer(name: string, avatar: string): Promise<any> {
        const user = await Users.create({ name, avatar });
        return user.toJSON();
    }

    async createCharacter(name: string, avatar: string, user: any): Promise<any> {
        const userFound: any = await Users.findOne({ _id: user });
        console.log({ userFound })
        const character = await Characters.create({ name, avatar, user: userFound._id });
        return character.toJSON();
    }

    async equipCharacter(idCharacter: any, idUser: string): Promise<any> {
        const character = await Users.findOneAndUpdate({ _id: idUser }, { characterEquipment: idCharacter }, { new: true })
        return character?.toJSON();
    }

    async equipItemCharacter(idCharacter: string, idItem: string): Promise<any> {
        const character = await Characters.findOneAndUpdate({ _id: idCharacter }, { itemEquipment: idItem }, { new: true })
        return character?.toJSON();
    }

    async createItem(idCharacter: string, avatar: string, name: string): Promise<any> {
        const characterFOund: any = await Characters.findOne({ _id: idCharacter });
        const items = await Items.create({ character: characterFOund._id, avatar, name })
        return items.toJSON();
    }

    async getAllItemsCharacter(idCharacter: string): Promise<any> {
        const character: any = await Characters.findOne({ _id: idCharacter });
        console.log({ idCharacter })
        if(!character) throw new Error("No character found")
        const listItem = await Items.find({ character: character._id });
        if (!listItem[0]) throw new Error("No listItem found")
        return { listItem };
    }

    async getAllCharacterUser(idUser: string): Promise<any> {
        const user: any = await Users.findOne({ _id: idUser })
        if(!user) throw new Error("No user found")
        console.log({ idUser, user })
        const listCharacter = await Characters.find({ user: user._id });
        if (!listCharacter[0]) throw new Error("No listItem found")
        return { listCharacter };
    }

    async getInfoUser(idUser: string): Promise<any> {
        const aggregate: any = [
            {
                $match: {
                    "_id": new Types.ObjectId(idUser),
                }
            },
            {
                $lookup: {
                    from: "characters",
                    let: { "id": "$_id" },
                    pipeline: [
                        {
                            "$match": { "$expr": { "$eq": ["$user", "$$id"] } }
                        },
                        { "$sort": { "createdAt": -1 } },
                        // { "$limit": 1 }
                    ],
                    as: "character"
                }
            },
        ]
        const infoUser = await Users.aggregate(aggregate);
        if(!infoUser[0]) throw new Error(`User not found`);
        console.log({ idUser, infoUser })
        return { data: infoUser[0] };
    }
}