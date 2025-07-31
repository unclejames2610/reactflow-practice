"use client";
import { initialEdges, initialNodes } from "@/data/workflowConstants";
import { edgeTypes, nodeTypes } from "@/utils/types";
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = {
      ...connection,
      animated: true,
      id: `${edges.length + 1}`,
      type: "customEdge",
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full justify-center items-center">
      <div className="w-[500px] h-[500px] border border-black">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Workflow;
