export const getHotelDetail = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch hotel details: ${res.statusText}`);
    }

    const hotel = await res.json();
    return hotel;
};