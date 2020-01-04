import { injectable } from "inversify";

@injectable()
export class ResponseMessageUtility {
    constructor() {

    }

    errorMessage(msgCode: string){
        const responseMessages: any = [{
            'INVALIDSCHEMA': 'Schema not valid',
        }];
        return responseMessages[0][msgCode] as string;
    }

    generateResponse() {
        
    }

    generateErrorResponse() {

    }
}