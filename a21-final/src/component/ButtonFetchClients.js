import React from 'react'


const  ButtonFetchClients = (url,clients,setClients) => {

    const getListClient = () => {
        fetch(`${url}/getListClient`)
        .then(response => response.json())

    };

    return (
        <div>
            
        </div>
    )
}

export default ButtonFetchClients;
