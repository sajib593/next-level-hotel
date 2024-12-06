
export const getPoolDetail = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pool/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch pool details: ${res.statusText}`);
    }

    const pool = await res.json();
    return pool;
};