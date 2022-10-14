import { Schema, model } from 'mongoose';

export interface ItemInterface {
    avatar?: string;
    name?: string;
    character?:any;
    createdAt?: Date;
    updatedAt?: Date;
}
export enum StatusUser {
    ACTIVE = "active",
    DEACTIVATED = "deactivated",
}

var schema = new Schema<ItemInterface>({
    avatar: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });


schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});


export const Items = model<ItemInterface>('Item', schema);