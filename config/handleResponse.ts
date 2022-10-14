import _ from "lodash"

export const handleSuccess = (data: any) => {
    const obj = {
        errorCode: 0,
        message: "Success"
    }
    const dataRes = _.merge({ ...data }, obj)
    return dataRes
}

export const handleError = (error: string) => {
    const obj = {
        errorCode: 1,
        message: error
    }
    return obj
}