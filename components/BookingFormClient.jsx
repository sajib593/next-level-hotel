"use client";



const BookingFormClient = ({ detail }) => {
  const { image, name, price } = detail;

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookInfo = {
      yourName: e.target.yourName.value,
      price: e.target.price.value,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pool-book`, {
        method: "POST",
        body: JSON.stringify(bookInfo),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to book the pool");
      alert("Booking successful!");
    } catch (error) {
      console.error(error);
      alert("Booking failed!");
    }
  };

  return (
    <div className="flex m-20 gap-40">
      <div className="border-2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleBooking} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="yourName"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              disabled
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered text-white"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Enroll</button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="mb-8 text-2xl">{name}</h1>
        <h1>{price}$</h1>
        <img
          src={image} 
         
          className="rounded-md w-96 mt-10"
        />
      </div>
    </div>
  );
};

export default BookingFormClient;
