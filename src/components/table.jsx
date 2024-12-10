import '../App.css';
import { useEffect, useState } from 'react';

function Table() {
    const[transaction, setTransaction] = useState ([])
    useEffect(() => {
        async function getData() {
          const url = "http://localhost:3000/transaction";
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            setTransaction(json);
    
          } catch (error) {
            console.error(error.message);
          }
        }
        getData();
      }, []);

    return (
    <div className="App">
        <table>
            <thead>
            <tr>
                <th>dateTime</th>
                <th>type</th>
                <th>fromTo</th>
                <th>description</th>
                <th>amount</th>
            </tr>
            </thead>
            <tbody>
            {
                transaction.map(item => {
                    return (
                        <>
                            <tr>
                                <td>{item.dateTime}</td>
                                <td>{item.type}</td>
                                <td>{item.fromTo}</td>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                            </tr>
                        </>
                    )
                })
            }

            </tbody>
        </table>
    </div>
    );
}

export default Table