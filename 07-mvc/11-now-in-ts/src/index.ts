import express  from "express";
import exphbs from "express-handlebars";
import { json, urlencoded } from "body-parser";

const app = express();

import conn from "./db/conn";
import taskRoutes from "./routes/tasksRoutes";


// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');


app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(json());
app.use(express.json());

app.use(urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/tasks', taskRoutes);

conn
    .sync()
    .then( () => {
        app.listen(3000);
    })
    .catch((err) => console.log(err))