import React, { useState, useEffect, useRef, useContext } from 'react';
import Table from '../components/2_main/Table';
import GoBackButton from '../components/4_common/GoBackButton';
//
import { VisitedPagesContext } from '../App';
//
const ClientsPage = () => {
  // Hooks
  // --state
  //---- global
  const { increment } = useContext(VisitedPagesContext);
  //
  console.log(increment);
  // --local

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
    //
    inputRef.current.focus();
    //
    increment({ type: 'INCREMENT' });
  }, [increment]);
  //////////////////////////

  // --- refs
  const inputRef = useRef();

  // Custom Functions
  const inputHandler = (e) => {
    // --filtering clients
    // console.log(e.target.value);
    let filteredClients = clients.filter(
      (client) =>
        client.name.toLowerCase().includes(e.target.value.toLowerCase()) // got filtered
    );

    //
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
          <input type='text' onChange={inputHandler} ref={inputRef} />
        </div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <Table
            columns={['name', 'email', 'phone', 'username', 'website', 'id']}
            clients={displayClients}
          />
        )}
      </section>
    </>
  );
};

export default ClientsPage;

//class components statefull - states and props
//function components stateless components
