import React from "react";
import { IoIosClose } from "react-icons/io";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";

const PaymentProvider = ({
  data: { name, code },
  id,
}: NodeProps<{ name: string; code: string }>) => {
  const { setNodes } = useReactFlow();

  const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
    St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
    Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
    Am: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  };
  return (
    <div className="rounded-3xl border-2 flex border-gray-300 items-center bg-white p-1 pb-1 pl-3 gap-2 w-36">
      <div className="h-4 w-4">
        <img
          height="100%"
          width="100%"
          src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
        />
      </div>
      <div className="flex flex-grow">
        <p className="text-sm ">{name}</p>
      </div>

      <IoIosClose
        aria-label="Delete Payment Provider"
        className="text-red-500 cursor-pointer text-lg"
        onClick={() => {
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
        }}
      />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentProvider;
