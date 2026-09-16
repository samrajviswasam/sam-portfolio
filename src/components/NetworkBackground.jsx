import { useEffect, useState } from "react";
import "./NetworkBackground.css";

function NetworkBackground() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const createNodes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const count = width < 700 ? 18 : 34;

      const generated = Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      }));

      setNodes(generated);
    };

    createNodes();

    window.addEventListener("resize", createNodes);

    return () => {
      window.removeEventListener("resize", createNodes);
    };
  }, []);

  return (
    <div className="network-background" aria-hidden="true">
      <div className="network-grid" />
      <div className="network-glow network-glow-one" />
      <div className="network-glow network-glow-two" />

      <div className="network-scan" />

      <svg
        className="network-lines"
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="none"
      >
        {nodes.map((node, index) => {
          const target = nodes[(index + 1) % nodes.length];

          if (!target) {
            return null;
          }

          const distance = Math.hypot(
            target.x - node.x,
            target.y - node.y
          );

          if (distance > 360) {
            return null;
          }

          return (
            <line
              key={`line-${node.id}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
            />
          );
        })}
      </svg>

      <div className="network-nodes">
        {nodes.map((node) => (
          <span
            key={node.id}
            className="network-node"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: `${node.delay}s`,
              animationDuration: `${node.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default NetworkBackground;
