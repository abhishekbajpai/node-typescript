import 'reflect-metadata';
import { Container } from "inversify";
import { UserRouter } from './routes/user';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { App } from './app';

const iocContainer = new Container();

iocContainer.bind<App>(App).to(App);
iocContainer.bind<UserRouter>(UserRouter).to(UserRouter);
iocContainer.bind<UserController>(UserController).to(UserController);
iocContainer.bind<UserService>(UserService).to(UserService);
iocContainer.bind<UserRepository>(UserRepository).to(UserRepository);

export { iocContainer };