import React from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", data: { label: "Tree Start" }, position: { x: 500, y: 50 } },
  { id: "2", data: { label: "+" }, position: { x: 500, y: 120 } },
  { id: "3", data: { label: "Step 1" }, position: { x: 500, y: 190 } },
  { id: "4", data: { label: "+" }, position: { x: 500, y: 260 } },
  { id: "5", data: { label: "Step 2" }, position: { x: 500, y: 330 } },
  { id: '6', data: { label: 'Sub Tree' }, position: { x: 400, y: 400 } },
  { id: '7', data: { label: 'Sub Tree' }, position: { x: 600, y: 400 } },
  { id: '8', data: { label: '+' }, position: { x: 350, y: 470 } },
  { id: '9', data: { label: '+' }, position: { x: 650, y: 470 } },
  { id: '10', data: { label: 'Step 1' }, position: { x: 300, y: 540 } },
  { id: '11', data: { label: 'Step 1' }, position: { x: 700, y: 540 } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e8-10', source: '8', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
];

function App() {
  return (
    <div className="h-screen mx-auto">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}

export default App;
