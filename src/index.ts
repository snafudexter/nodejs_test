import express from "express";
import bodyParser from "body-parser";

import { prepareSummarizedResponse } from "./summary";
import router from "./router";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
