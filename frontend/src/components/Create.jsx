import React, { useEffect, useState } from "react";
import "./Create.css";
import Track from "./Track";

const Create = () => {
  const [expenditure, setExpenditure] = useState(0);
  const [money, setMoney] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [Tncs, setTncs] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Tncs").then((resp) => {
      resp.json().then((data) => {
        setTncs(data.Tncs);
      });
    });
  }, []);

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
      a = a + parseInt(Tncs[i].money);
    }
    setExpenditure(a);
  }, [Tncs]);
  return (
    <>
      <div className="Inputdata">
        <h1>₹{expenditure}</h1>
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
            // addTransaction(description, money, date);
            fetch("http://localhost:3000/create", {
              method: "POST",
              body: JSON.stringify({
                money: money,
                description: description,
                date: date,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then((response) => {
              response.json().then((data) => {
                if (data.response) {
                  // setExpenditure(parseInt(expenditure + parseInt(money)));
                  addTransaction(description, money, date);
                  alert(`Your Transaction ID is: ${data.id}`);
                } else {
                  alert(data.msg);
                }
              });
            });
          }}
        >
          Update
        </button>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "2px" }}
        className="box"
      >
        <h3 style={{ textAlign: "center" }}>Transactions</h3>
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <input
            type="text"
            placeholder="Enter ID"
            onChange={(e) => {
              setId(e.target.value);
            }}
            style={{ paddingLeft: "10px", marginLeft: "125px" }}
          />
          <button
            onClick={() => {
              fetch("http://localhost:3000/Tncs" + id).then((response) => {
                response.json().then((data) => {
                  setTncs([data.Transaction]);
                });
              });
            }}
          >
            Search
          </button>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default Create;
