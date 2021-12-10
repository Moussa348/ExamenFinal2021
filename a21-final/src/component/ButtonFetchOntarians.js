import React from "react";

const ButtonFetchOntarians = ({ url, clients, setClients }) => {
  const getListClientByProvince = () => {
    fetch(`${url}/getListClientByProvince/ON`)
      .then((response) => response.json())
      .then((data) => setClients(data));
  };

  return (
    <>
      <button onClick={getListClientByProvince}> Fetch ontariens</button>
    </>
  );
};

export default ButtonFetchOntarians;
