"use client"
import Link from "next/link";
import react, { useEffect, useState } from "react"

const Pool = () => {
    const [pools, setPools] = useState([]);

    useEffect(() => {
        fetchPools();
    }, []);

    const fetchPools = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pool`);
        const data = await res.json();
        setPools(data);
    };

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://as2.ftcdn.net/jpg/03/51/19/25/1000_F_351192533_B3gJkXxDSEsCafhwBtgsHzjelrD5Ve0X.jpg)",
                }}>

                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md rounded-lg shadow-2xl   p-4 bg-blue-400">
                        <h1 className="mb-5 text-5xl text-white font-bold">Pools You can choose</h1>
                        <p className="mb-5 text-white">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
           <div >
            {

                pools?.map(pool=><div key={pool._id} className="card mt-10 mb-4 card-side bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={pool?.image}
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{pool?.name}!</h2>
                      <p>{pool?.price}</p>
                      <p>{pool?.hours}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link href={`/pool/${pool?._id}`}>Enroll</Link></button>
                      </div>
                    </div>
                  </div>)
            }
           </div>
        </div>
        )
}

export default Pool                         