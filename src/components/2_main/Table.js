import React from 'react';

const Table = ({ columns, clients }) => {
  //
  console.log(clients);
  //
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            // <th key={columns[column]}>{column}</th>
            <th key={Math.random()}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            {/* <td>{client.name}</td>
            <td>{client.email}</td> */}

            {columns.map((column) => (
              // console.log('column', column);
              // console.log('client', client);
              <td key={Math.random()}>{client[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
