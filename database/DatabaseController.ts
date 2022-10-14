import { connect } from "mongoose"
import "dotenv/config"

export class DatabaseController {
    static async connectDb() {
        try {
            await connect(process.env.MONGO_URI as string, {
            })
            console.log("Database connected")
        } catch (error) {
            console.log("Error connecting to database")
        }
    }

    
}