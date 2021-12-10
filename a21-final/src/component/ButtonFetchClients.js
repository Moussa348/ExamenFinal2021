import React from "react";

const ButtonFetchClients = ({ url, clients, setClients }) => {
  const getListClient = () => {
    fetch(`${url}/getListClient`)
      .then((response) => response.json())
      .then((data) => setClients(data));
  };

  return (
    <>
      <button onClick={getListClient}> Fetch tous les clients</button>
    </>
  );
};

export default ButtonFetchClients;
