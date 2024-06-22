import React, { useEffect, useState, useRef } from "react";
import "./Create.css";
import Track from "./Track";

const Create = () => {
  const [expenditure, setExpenditure] = useState(0);
  const [money, setMoney] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [Tncs, setTncs] = useState([]);
  const [id, setId] = useState("");
  const transactionsRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/Tncs").then((resp) => {
      resp.json().then((data) => {
        setTncs(data.Tncs);
      });
    });
  }, []);

  useEffect(() => {
    if (transactionsRef.current) {
      transactionsRef.current.scrollTop = transactionsRef.current.scrollHeight;
    }
  }, [Tncs]);

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

  useEffect(() => {
    let a = 0;
    for (let i = 0; i < Tncs.length; i++) {
      a += parseInt(Tncs[i].money);
    }
    setExpenditure(a);
  }, [Tncs]);

  return (
    <div className="container">
      <div className="Inputdata">
        <h1>₹{expenditure}</h1>
        <button
          className="btn-success"
          onClick={() => {
            fetch("http://localhost:3000/drop", {
              method: "DELETE",
            }).then((resp) => {
              resp.json().then((data) => {
                alert(data.msg);
                setTncs([]);
              });
            });
          }}
        >
          CLEAR
        </button>

        <input
          type="text"
          name="data"
          id="data"
          placeholder="Description"
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
          placeholder="Amount"
          onChange={(e) => {
            setMoney(e.target.value);
          }}
        />
        <button
          onClick={() => {
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

      <div className="box" ref={transactionsRef}>
        <h3 style={{ textAlign: "center", color: "#02b3a4" }}>Transactions</h3>
        <div style={{ display: "flex", gap: "5px" }}>
          <input
            type="text"
            placeholder="Enter ID"
            onChange={(e) => {
              setId(e.target.value);
            }}
            style={{ paddingLeft: "10px" }}
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
        <div className="transactions-list">
          {Tncs.map((transaction) => {
            return (
              <Track
                key={transaction.date + transaction.description}
                money={transaction.money}
                date={transaction.date}
                description={transaction.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Create;
