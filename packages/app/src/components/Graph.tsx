"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import G6 from "@antv/g6";

const G6component = () => {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
  if(!graph){
    let data = {
      nodes: [
        {
          id: 'node1',
          label: 'IP ID: 0x91271D21394Cb0A8EcCc4E2F8c14A6ef33490fB5',
          x: 100,
          y: 100,
          text: 'root IP',
          shape: 'circle',
          style: {
            fill: '#f00',
            fontSize: 14,
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 12,
            },
          },
          textBaseline: 'bottom',
        },
        {
          id: 'node2',
          x: 200,
          y: 100
        }
      ],
      edges:[
        {
          source: 'node1',
          target: 'node2'
        }
      ]
    }

    graph = new G6.Graph({
      container: ReactDOM.findDOMNode(ref.current),
      width: "100%",
      height: "100%",
      renderer: "svg",
      modes: {
        default: ["zoom-canvas", "drag-node","drag-canvas", 'click-select', 'hover-activate', 'brush-select'],
      },
      layout: {
        type: 'fruchterman',
        gravity: 10,
        speed: 5,
        clustering: true,
      },
      animate: true,
      defaultNode: {
        size: 20,
      },
      minZoom: 0.5,
      maxZoom: 3,
    });
    graph.data(data);
    graph.render();
  }
  }, [])
  return <div ref={ref} style={{width: 750, height: 300, border: '1px solid #ccc'}}></div>;
};

export default G6component;