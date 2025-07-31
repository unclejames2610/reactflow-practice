import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export default function PaymentProviderSelect() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
    setIsMenuActive(false);
  };
  return (
    <div className="relative flex flex-col">
      <div
        className="flex gap-2 items-center cursor-pointer bg-slate-300 p-2 rounded"
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        Add Payment Provider <MdArrowDropDown />
      </div>
      {isMenuActive && (
        <div className="flex flex-col absolute top-12 left-0 w-full z-10 shadow bg-slate-200 rounded">
          {PAYMENT_PROVIDERS.map((provider) => (
            <div
              className="cursor-pointer py-1 px-2 hover:bg-slate-400"
              onClick={() => onProviderClick(provider)}
            >
              {provider.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
