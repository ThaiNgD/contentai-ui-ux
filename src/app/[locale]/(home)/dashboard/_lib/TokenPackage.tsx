"use client";
import HaftPieChartComponent from "@/components/ChartComponent/HaftPieChartComponent";
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";

const TokenPackage = () => {
  return (
    <div className="flex border rounded-xl py-8 px-10 flex-col items-center">
      <h3 className="p-6 text-xl text-center font-semibold">
        Kế hoạch của bạn
      </h3>
      <p className="mb-3 text-center font-medium">
        You have no subscription at the moment. Please select a subscription
        plan or a token pack. Total
        <strong className="text-heading-foreground"> Unlimited </strong>
        word and{" "}
        <strong className="text-heading-foreground"> Unlimited </strong>
        image tokens left.
      </p>
      <HaftPieChartComponent />
      <Button className="border  hover:bg-blue-500 hover:text-white  text-blue-500 !rounded-2xl text-center border-blue-500">
        <FaPlus className="my-auto mr-2" size={10} />
        Select a token
      </Button>
    </div>
  );
};

export default TokenPackage;
