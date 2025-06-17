"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/navbar/page";
import { cardContent } from "./constant";
import Button from "@/components/ReusableComponents/Button";

export default function DashboardSelector({ onClientTypeSelect, initialType }) {
  const [selectedType, setSelectedType] = useState(initialType || null);
  const router = useRouter();

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  if (selectedType) return null;

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--black)] mb-4">
              Welcome to Background Verification Team
            </h1>
            <p className="text-xl text-gray-600">
              Select your account type to access your dashboard
            </p>
          </div>
          <div className="flex gap-x-[30px] flex-wrap">
            {cardContent.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 w-[clamp(200px,40vw,600px)]  border-2 border-[var(--lighter-gray)]
                   bg-[var(--white)] rounded-lg px-4 py-6 hover:border-[var(--black)] flex flex-col gap-y-6"
                >
                  <div className="flex justify-center">
                    <div className="bg-[var(--black)] w-fit p-4 rounded-full">
                      {data.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <span className="text-2xl font-semibold">{data.title}</span>
                    <span className="text-sm text-[var(--light-gray)]">
                      {data.subTitle}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-y-2 list-disc pl-5 marker:text-2xl">
                    {data.content.map((item, index) => {
                      return (
                        <li key={index} className="text-sm font-extralight">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <Button buttonName={data.buttonName} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
