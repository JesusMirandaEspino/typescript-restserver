import express, { Application } from 'express';



class Server {

    private app: Application;

    constructor(){
        this.app = express();
    }

}