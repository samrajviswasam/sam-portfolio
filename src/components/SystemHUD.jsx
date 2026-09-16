import { useEffect, useState } from "react";
import {
  Activity,
  Cloud,
  Container,
  GitBranch,
  Server,
  ShieldCheck,
} from "lucide-react";
import "./SystemHUD.css";

function SystemHUD() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      icon: Cloud,
      label: "CLOUD",
      value: "AWS",
    },
    {
      icon: Container,
      label: "CONTAINER",
      value: "DOCKER",
    },
    {
      icon: Server,
      label: "ORCHESTRATION",
      value: "K8S",
    },
    {
      icon: GitBranch,
      label: "DELIVERY",
      value: "CI/CD",
    },
  ];

  return (
    <aside className="system-hud" aria-label="Portfolio system status">
      <div className="hud-header">
        <div className="hud-title">
          <Activity size={14} />
          <span>SYSTEM STATUS</span>
        </div>

        <span className="hud-live">
          <span className="hud-dot" />
          ONLINE
        </span>
      </div>

      <div className="hud-time">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </div>

      <div className="hud-metrics">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div className="hud-metric" key={metric.label}>
              <div className="hud-icon">
                <Icon size={14} />
              </div>

              <div>
                <span className="hud-label">{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>

              <span className="hud-check">
                <ShieldCheck size={13} />
              </span>
            </div>
          );
        })}
      </div>

      <div className="hud-footer">
        <span>DEVOPS_PROFILE</span>
        <span>v1.0</span>
      </div>
    </aside>
  );
}

export default SystemHUD;

