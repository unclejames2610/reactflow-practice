import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  //   {
  //     id: "1",
  //     data: { label: "Node 1" },
  //     position: { x: 0, y: 0 },
  //   },

  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { amount: 10 },
    type: "paymentInit",
  },
  {
    id: "2",
    data: { currency: "$", country: "United States", countryCode: "US" },
    position: { x: 300, y: 20 },
    type: "paymentCountry",
  },
  {
    id: "3",
    data: { currency: "#", country: "England", countryCode: "GB" },
    position: { x: 300, y: 200 },
    type: "paymentCountry",
  },
  {
    id: "4",
    data: { name: "Google Pay", code: "Gp" },
    position: { x: 550, y: -50 },
    type: "paymentProvider",
  },
  {
    id: "5",
    data: { name: "Stripe", code: "St" },
    position: { x: 550, y: 125 },
    type: "paymentProvider",
  },
  {
    id: "6",
    data: { name: "Apple Pay", code: "Ap" },
    position: { x: 550, y: 325 },
    type: "paymentProvider",
  },
  {
    id: "7",
    data: {},
    position: { x: 275, y: -100 },
    type: "paymentProviderSelect",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#f00" },
    label: "Money Flow",
    //   labelStyle: { fill: "#f00", fontWeight: "bold" },
    //   labelBgStyle: { fill: "#fff", color: "#000" },
  },
];
