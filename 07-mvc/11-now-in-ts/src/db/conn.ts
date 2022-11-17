import { Sequelize } from "sequelize-typescript";
import { Task } from "../models/Task";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host:'localhost',
    username:'root',
    password:'',
    database:'nodemvc',
    models: [Task]    
})

export default sequelize;
