import BookingFormClient from "@/components/BookingFormClient";
import { getPoolDetail } from "@/lib/getPoolDetail"; // Your data-fetching function

const BookingForm = async ({ params }) => {
  const detail = await getPoolDetail(params.id); // Fetch data on the server
  return <BookingFormClient detail={detail} />;
};

export default BookingForm;
