import { injectable } from "inversify";
import { iocContainer } from "../ioc-container";
import { Router, Request, Response, NextFunction } from 'express';
import { UserController }   from '../controller/user.controller';
@injectable()

export class UserRouter {

    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req:Request, res: Response, next: NextFunction){
        const userController = iocContainer.get<UserController>(UserController);
        userController.validateUserCredentials(req, res);
    }

    init(){
        this.router.get('/', this.getAll);
    }
};
