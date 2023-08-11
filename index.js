import express from "express";
import router from "./routes/user.js";
import taskRouter from "./routes/tasks.js";

const app = express();

const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

app.use("/api", router);
app.use("/api", taskRouter);
