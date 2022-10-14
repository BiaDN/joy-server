import { Schema, model } from 'mongoose';

export interface UserInterface {
    avatar?: string;
    name?: string;
    characterEquipment?: any;
    createdAt?: Date;
    updatedAt?: Date;
}
export enum StatusUser {
    ACTIVE = "active",
    DEACTIVATED = "deactivated",
}

var schema = new Schema<UserInterface>({
    avatar: {
        type: String,
        // require: true
        default: "https://baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg"
    },
    name: {
        type: String,
        require: true,
        default: "Biaaa"
    },
    characterEquipment: {
        type: Schema.Types.ObjectId,
        ref: "characters",
    }
}, { timestamps: true });


schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});


export const Users = model<UserInterface>('User', schema);