import React from "react";

const ButtonFetchOntarians = ({ url, setClients }) => {
  const getListClientByProvince = () => {
    fetch(`${url}/getListClientByProvince/ON`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClients(data);
      });
  };

  return (
    <>
      <button onClick={getListClientByProvince}> Fetch ontariens</button>
    </>
  );
};

export default ButtonFetchOntarians;
