import React, { useState, useEffect } from 'react';
import GoBackButton from '../components/4_common/GoBackButton';

const ClientsPage = () => {
  // Hooks
  // --state

  const [clients, setClients] = useState([]);
  const [displayClients, setDisplayClients] = useState([]);
  const [loading, setLoading] = useState(true);
  //---side effects
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        //
        setClients(data);
        setDisplayClients(data);
        setLoading(false);
        //
      });
  }, []);
  //////////////////////////
  // Custom Functions
  const inputHandler = (e) => {
    // --filtering clients
    // console.log(e.target.value);
    let filteredClients = clients.filter(
      (client) => client.name.includes(e.target.value) // got filtered
    );
    console.log(filteredClients);

    setDisplayClients(filteredClients);
  };
  //
  return (
    <>
      <section>
        <h1>Clients Page</h1>
        <GoBackButton />
      </section>
      <section>
        <div>
          <h3>Filter Clients by name/surname:</h3>
          <input type='text' onChange={inputHandler} />
        </div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name & Surname:</th>
                  <th>Email: </th>
                </tr>
              </thead>
              <tbody>
                {displayClients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};

export default ClientsPage;

//class components statefull - states and props
//function components stateless components
