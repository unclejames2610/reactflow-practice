import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomHandle";

const PaymentCountry = ({
  data: { currency, country, countryCode },
}: NodeProps<{
  currency: string;
  country: string;
  countryCode: string;
}>) => {
  return (
    <div className="flex items-center rounded-lg bg-slate-200 border-2 border-gray-400 p-2 gap-2 w-40">
      <div>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </div>
      <div className="flex flex-grow">
        <div>
          <p>{country}</p>
          <p className="text-xs">{currency}</p>
        </div>
      </div>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentCountry;
