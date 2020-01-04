import { injectable } from "inversify";
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

@injectable()

export class UserController {
    constructor(
        private userService: UserService
    ) { }

    validateUserCredentials(req: Request, res: Response) {
        console.log(" >>>>>>> ");
        return this.userService.getUserData(req, res);
    }
}
