import { injectable } from "inversify";
import {UserRepository} from '../repositories/user.repository';

@injectable()

export class UserService {

    constructor(
        private userRepository: UserRepository
    ) { }

    getUserData(req: any, res: any) {
        return this.userRepository.getAllUsers(req, res);
    }
};