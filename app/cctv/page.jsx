"use client";

import Image from "next/image";
import cc from "../../images/cc.jpg";

const CCTVPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">CCTV Monitoring</h1>
      <div className="flex justify-center mt-4">
        <Image src={cc} alt="CCTV Monitoring" className="rounded-lg shadow-lg" />
      </div>
      <p className="text-center mt-4">
        Welcome to the CCTV Monitoring Page. Here you can view live feeds.
      </p>
    </div>
  );
};

export default CCTVPage;