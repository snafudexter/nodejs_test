import express from "express";
import { prepareSummarizedResponse } from "./response.helper";

const app = express();
const PORT = 4000;

app.get("/summarize", async (req, res) => {
  const responseJson = await prepareSummarizedResponse();
  res.json({
    ...responseJson,
  });
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
