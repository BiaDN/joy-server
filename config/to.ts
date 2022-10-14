const to = async (request: any): Promise<any> => {
    try {
        const result = await request;
        return [null, result]
    } catch (error: any) {
        return [error.message, null]
    }
}

export default to;