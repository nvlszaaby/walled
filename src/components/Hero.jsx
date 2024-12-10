import { useEffect, useState } from "react";
import Avatar from "./avatar";
import Table from "./table";
import viewIcon from "../assets/view.png";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const[users,setUsers] = useState ([])
  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        setUsers(json);

      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  // if (users.length === 0) {
  //   return <p className='text-black'>Loading</p>
  // }
   
  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            Good Morning, {users.name}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar />
      </div>
      <div>
        <Table />
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold"> {users.accountNumber} </p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold"> Rp
            {showBalance ? JSON.stringify(users.balance) : "********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
export default Hero;