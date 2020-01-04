import { injectable } from "inversify";
import express from "express";
import * as path from "path";
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import {UserRouter} from './routes/user';

@injectable()

export class App {

	public express: express.Application;
	constructor(
		private userRouter: UserRouter
	) {
		this.express = express();
		this.initializeRoute();
		this.initializeMiddlewares();
	}

	private initializeMiddlewares(): void {
		this.express.use(logger('dev'))
		this.express.use(express.json())
		this.express.use(express.urlencoded({ extended: false }))
		this.express.use(express.static(path.join(__dirname, 'public')))
		this.express.use(cookieParser());
	}

	private initializeRoute(): void {
		let router = express.Router();
		this.express.use('/', this.userRouter.router);
	}

}

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-METHOD", "GET, PUT, POST, DELETE");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
