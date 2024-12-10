export const getGymDetail = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gym/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch pool details: ${res.statusText}`);
    }

    const gym = await res.json();
    return gym;
};