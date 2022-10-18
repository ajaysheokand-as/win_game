import React from "react";
import { Card, CardBody, Table } from "reactstrap";

export const ResultTable = () => {
  return (
    <div className="container">
    <Card className ="mt-5 ">
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Period No</th>
              <th>Number</th>
              <th>Price</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2222</td>
              <td>333</td>
              <td>red</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
    </div>
  );
};
