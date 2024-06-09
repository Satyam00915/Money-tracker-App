import React, { useEffect, useState } from "react";
import "./Create.css";
import Track from "./Track";
const Create = () => {
  const [expenditure, setExpenditure] = useState(0);
  const [money, setMoney] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [Tncs, setTncs] = useState([
    {
      money: 200,
      description: "Spent on Hotel",
      date: "2024-06-01",
    },
    {
      money: 400,
      description: "Spent on Books",
      date: "2024-05-08",
    },
  ]);

  function addTransaction(description, money, date) {
    setTncs([
      ...Tncs,
      {
        money,
        description,
        date,
      },
    ]);
  }

  const totalSum = useEffect(() => {
    let a = 0;
    for (let i = 0; i < Tncs.length; i++) {
      a = a + Tncs[i].money;
    }
    setExpenditure(a);
  }, []);
  return (
    <>
      <div className="Inputdata">
        <h1>{expenditure}₹</h1>
        <input
          type="text"
          name="data"
          id="data"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setMoney(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setExpenditure(parseInt(expenditure + parseInt(money)));
            addTransaction(description, money, date);
          }}
        >
          Update
        </button>
      </div>

      <div className="box">
        <h3 style={{ textAlign: "center" }}>Transactions</h3>
        {Tncs.map((transaction) => {
          return (
            <Track
              key={parseInt(Math.random() * 100)}
              money={transaction.money}
              date={transaction.date}
              description={transaction.description}
            ></Track>
          );
        })}
      </div>
    </>
  );
};

export default Create;
