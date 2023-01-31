import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import swal from "sweetalert";

export const PaymentAdminPanel = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    fetch_transaction(-1);
  }, []);

  const handleApprove = (id, status) => {
    console.log("This is Id =>", id);
    swal({
      title: "Are you Sure! want to Approve",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willApprove) => {
      if (willApprove) {
        await fetch(
          `http://localhost/Backend/api_win_game/transaction/transaction.php`,
        //   localhost\Backend\api_win_game\transaction\transaction.php
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
                id,
                status
              }),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setTransactionData(response.data);
            swal(status === 1 ? "Successfully approved" : "Transaction Decline", {
                icon: status === 1 ?  "success" : "warning",
              });
          })
          .catch((err) => {
            console.log(err);
          });
       
      } else {
        swal("Hey this transaction not approved!!");
      }
    });
  };

  // Api Call to fetch the Transaction Data
  const fetch_transaction = async (status) => {
    await fetch(
      `http://localhost/Backend/api_win_game/transaction/transaction.php?status=${status}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTransactionData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeValue = (event) => {
    setIsChecked(false);
    fetch_transaction(event.target.value);
  };
  return (
    <div style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
      <h1 className="m-2">Payment Status Approval</h1>
      <div
        className="d-flex flex-row justify-content-between m-3"
        onChange={onChangeValue}
      >
        <div>
          <input
            type="radio"
            id="all"
            name="transaction"
            value="-1"
            checked={isChecked}
          />
          <label for="all"> All</label>
        </div>
        <div>
          <input type="radio" id="pending" name="transaction" value="0" />
          <label for="pending"> Pending</label>
        </div>
        <div>
          <input type="radio" id="approved" name="transaction" value="1" />
          <label for="approved"> Approved</label>
        </div>
        <div>
          <input type="radio" id="failed" name="transaction" value="2" />
          <label for="failed"> Failed</label>
        </div>
      </div>
      {transactionData !== "No Data Found" ? (
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionData?.map((e) => {
              return (
                <tr>
                  <th scope="row">{e.name}</th>
                  <td>{e.amount}</td>
                  <td>{e.created_at}</td>
                 <td>
                    <div className="btn btn-sm btn-secondary m-1">View</div>
                   { e.status == 0 ? <><div
                      className="btn btn-sm btn-success m-1"
                      onClick={() => {
                        handleApprove(e.id, 1);
                      }}
                    >
                      Approve
                    </div>
                    <div className="btn btn-sm btn-danger m-1" 
                    onClick={() => {
                        handleApprove(e.id, 2);
                      }}
                    >Decline</div>
                    </> 
                      : 
                      e.status == 1 ?  <div className="btn btn-sm btn-primary m-1">Approved</div> : <div className="btn btn-sm btn-danger m-1">Failed</div>
                } 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div>
          <h2 className="text-center">No Data Found</h2>
        </div>
      )}
    </div>
  );
};
