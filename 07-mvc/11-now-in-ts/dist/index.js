"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const conn_1 = __importDefault(require("./db/conn"));
const tasksRoutes_1 = __importDefault(require("./routes/tasksRoutes"));
// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use((0, body_parser_1.json)());
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(express_1.default.static('public'));
app.use('/tasks', tasksRoutes_1.default);
conn_1.default
    .sync()
    .then(() => {
    app.listen(3000);
})
    .catch((err) => console.log(err));
