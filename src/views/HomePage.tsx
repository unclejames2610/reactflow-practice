"use client";
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

const HomePage = () => {
  const initialNodes: Node[] = [
    {
      id: "1",
      data: { label: "Node 1" },
      position: { x: 0, y: 0 },
    },
    {
      id: "2",
      data: { label: "Node 2" },
      position: { x: 200, y: 200 },
    },
    {
      id: "3",
      data: { label: "Node 3" },
      position: { x: 200, y: 400 },
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: "1-2",
      source: "1",
      target: "2",
      animated: true,
      //   style: { stroke: "#f00" },
      //   label: "Edge from Node 1 to Node 2",
      //   labelStyle: { fill: "#f00", fontWeight: "bold" },
      //   labelBgStyle: { fill: "#fff", color: "#000" },
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length + 1}` };
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
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default HomePage;
