const cors = require("cors");
const express = require("express");
const encountersRouter = require("./routes/encounter");
const entitiesRouter = require("./routes/entitity");

const app = express();
const port = 5000;

app.use(express.json());

app.use(cors());

// Routes
app.use("/encounter", encountersRouter);
app.use("/entity", entitiesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
