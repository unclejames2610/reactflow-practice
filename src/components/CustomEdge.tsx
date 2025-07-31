import React from "react";
import { IoIosClose } from "react-icons/io";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";

const CustomEdge = (props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
          className="cursor-pointer p-0.5 text-xl rounded-full absolute z-10 hover:bg-gray-200 pointer-events-auto "
          onClick={() => {
            console.log("click");
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
          }}
        >
          <IoIosClose className={`text-red-600   `} />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
