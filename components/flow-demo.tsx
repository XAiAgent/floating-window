'use client'

import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  ConnectionMode,
  Handle,
  Position,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useState, useCallback } from 'react'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 100 },
    data: { label: 'Input Node' },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 450, y: 200 },
    data: { label: 'Process' },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 650, y: 300 },
    data: { label: 'Output' },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
]

function CustomNode({ data }: { data: { label: string } }) {
  return (
    <div className="px-4 py-2 shadow-lg rounded-md bg-white border-2 border-slate-200">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-purple-600" />
      <div className="text-slate-700 font-medium">{data.label}</div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-purple-600" />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

export default function FlowDemo() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback((changes: any) => {
    setNodes((nds) => {
      const newNodes = [...nds]
      changes.forEach((change: any) => {
        const nodeIndex = newNodes.findIndex((n) => n.id === change.id)
        if (nodeIndex !== -1) {
          newNodes[nodeIndex] = { ...newNodes[nodeIndex], position: change.position }
        }
      })
      return newNodes
    })
  }, [])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      nodeTypes={nodeTypes}
      connectionMode={ConnectionMode.Loose}
      className="bg-slate-50"
    >
      <Background color="#94a3b8" gap={16} size={1} />
      <Controls />
    </ReactFlow>
  )
}

