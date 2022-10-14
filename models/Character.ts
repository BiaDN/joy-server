import { Schema, model } from 'mongoose';

export interface CharacterInterface {
    avatar?: string;
    name?: string;
    user?: any;
    itemEquipment?:any;
    createdAt?: Date;
    updatedAt?: Date;
}
export enum StatusUser {
    ACTIVE = "active",
    DEACTIVATED = "deactivated",
}

var schema = new Schema<CharacterInterface>({
    avatar: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    itemEquipment: {
        type: Schema.Types.ObjectId,
        ref: "items",
    }
}, { timestamps: true });


schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});


export const Characters = model<CharacterInterface>('Character', schema);