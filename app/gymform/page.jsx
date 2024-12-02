import Link from 'next/link';
import React from 'react';

const gymformpage = () => {
    return (
        <div>
            <h1>this is form page</h1>
            <div className=" hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col gap-2 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Enroll now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 ml-20 shadow-2xl">
      <form className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
         
          {/* <a href="#" className="label-text-alt link link-hover"><Link href="/gym">Back to Enroll Page?</Link></a> */}
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Enroll</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default gymformpage ;