const express = require("express");
const app = express();
const cors = require("cors");
const { tncsSchema, searchIdSchema } = require("./ZOD/zod");
const { Tncs } = require("./DB/db");
const { date } = require("zod");

const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/Tncs", async (req, res) => {
  const allTransactions = await Tncs.find({});
  res.json({
    Tncs: allTransactions,
  });
});

app.get("/Tncs:id", async (req, res) => {
  const id = req.params.id;
  const response = searchIdSchema.safeParse({
    id,
  });
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid Id",
    });
  }

  const Transaction = await Tncs.findById(id);
  if (Transaction) {
    res.json({
      Transaction,
    });
  } else {
    res.json({
      msg: "Transaction Not Found!",
    });
  }
});

app.post("/create", async (req, res) => {
  const createPayLoad = req.body;
  const response = tncsSchema.safeParse({
    money: parseInt(createPayLoad.money),
    description: createPayLoad.description,
    date: createPayLoad.date,
  });
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
      response: response.success,
    });
    return;
  }

  const trns = await Tncs.create({
    money: createPayLoad.money,
    description: createPayLoad.description,
    date: createPayLoad.date,
  });

  res.json({
    msg: "Transaction Saved",
    response: response.success,
    id: trns._id,
  });
});

app.listen(3000);
