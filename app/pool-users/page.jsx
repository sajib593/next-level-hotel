"use client"
import { useEffect, useState } from "react";

const PoolUsers = ()=>{
    const [poolUsers, setPoolUser] = useState([]);

    useEffect(() => {
        fetchPoolUser();
    }, []);

    const fetchPoolUser = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pool-clients`);
        const data = await res.json();
        setPoolUser(data);
    };
    const handleDelete = async (id) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pool-delete/delete-pool-user/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result?.response?.deletedCount > 0) {
        setPoolUser((prevUser) => prevUser.filter((user) => user._id !== id));
      } else {
        console.error("Failed to delete booking");
      }
    };
    return(
        <div>
           
              <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                         
                          <th className="text-2xl">Name</th>
                          <th className="text-2xl">Price</th>
                          <th className="text-2xl">Price</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                       
                         
                         {
                            poolUsers?.map(poolUser=>   <tr>
                         
                                <td>{poolUser?.yourName}</td>
                                <td>{poolUser?.price}$</td>
                                <td><button onClick={() => handleDelete(poolUser._id)} className="btn bg-red-600">Delete</button></td>
                                
                              </tr>)
                         }
                          
                       
                      
                       
                      </tbody>
                    </table>
                  </div>
          
        </div>
    )
}

export default PoolUsers