"use client";

import { ReactNode } from "react";
import Link from "next/link";

type InfoBoxProps = {
  heading: string;
  backgroundColor: string;
  buttonInfo: {
    text: string;
    link: string;
    backgroundColor: string;
  };
  children: ReactNode;
};

const InfoBox = ({
  heading,
  backgroundColor,
  buttonInfo,
  children,
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-gray-800 text-2xl font-bold">For Renters</h2>
      <p className="text-gray-800 mt-2 mb-4">{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
