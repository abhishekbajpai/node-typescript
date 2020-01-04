import { injectable } from "inversify";
import { iocContainer } from "../ioc-container";
import { Router, Request, Response, NextFunction } from 'express';
import { UserCommand }   from '../command/user.command';
@injectable()

export class UserRouter {

    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req:Request, res: Response, next: NextFunction){
        const userCommand = iocContainer.get<UserCommand>(UserCommand);
        userCommand.validateUserCredentials(req, res);
    }

    init(){
        this.router.get('/', this.getAll);
    }
};
