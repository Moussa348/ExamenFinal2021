import React from "react";

const ButtonfetchMens = ({ url, clients, setClients }) => {
  const getListMen = () => {
    fetch(`${url}/getListMen`)
      .then((response) => response.json())
      .then((data) => setClients(data));
  };

  return (
    <>
      <button onClick={getListMen}> Fetch hommes</button>
    </>
  );
};

export default ButtonfetchMens;
