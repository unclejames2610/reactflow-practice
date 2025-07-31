import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <div className="border bg-white border-gray-500">
      <div className="bg-purple-500 p-1">
        <p className="text-sm text-white">Payment Initialized</p>
      </div>
      <div className="p-2 ">
        <p className="text-2xl text-blue-600">${amount}</p>
      </div>
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
