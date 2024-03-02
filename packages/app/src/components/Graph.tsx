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
          x: 100,
          y: 100,
          labelShape: {
            text: "root IP"
          },
          labelBackgroundShape: {},
          iconShape: {
            img: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
          },
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
        default: ["zoom-canvas", "drag-node","drag-canvas"],
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