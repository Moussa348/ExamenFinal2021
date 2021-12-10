import React, { useState } from "react";
import ButtonFetchClients from "./ButtonFetchClients";
import ButtonfetchMens from "./ButtonfetchMens";
import ButtonFetchOntarians from "./ButtonFetchOntarians";

const Table = () => {
  const url = "http://localhost:8080/examen";
  const [clients, setClients] = useState([]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonFetchClients url={url} setClients={setClients} />
        <ButtonfetchMens url={url} setClients={setClients} />
        <ButtonFetchOntarians url={url} setClients={setClients} />
      </div>

      <div style={{ display: "grid", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((value, key) => (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.gender}</td>
                <td>{value.birthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
