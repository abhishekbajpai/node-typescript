const connection = require('../config/connection');
import { injectable } from "inversify";

@injectable()

export class UserRepository {

    constructor() { }

    getAllUsers(req:any , res: any) {
        return res.json({
            "code": 200,
            "data": "api response"
        });
    }

}