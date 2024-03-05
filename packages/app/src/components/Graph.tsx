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
          label: 'Root ID: 0x91271D21394Cb0A8EcCc4E2F8c14A6ef33490fB5 \n Youtube',
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
        },
        {
          id: 'node2',
          x: 400,
          y: 200,
          label: 'Derivative IP: 0x0cb2741a3713084d77a30f8eff191e6d4182eefe \nTwitter',
          style: {
            fill: '#1DA1F2',
            fontSize: 14,
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 12,
            },
          },
        },
        {
          id: 'node3',
          x: 400,
          y: 250,
          label: 'Derivative IP: 0x82b1bd3178fc1ef884302345cfdc3292d63f9d86 \nTwitter',
          style: {
            fill: '#1DA1F2',
            fontSize: 14,
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 12,
            },
          },
        }
      ],
      edges:[
        {
          source: 'node1',
          target: 'node2'
        },
        {
          source: 'node1',
          target: 'node3'
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