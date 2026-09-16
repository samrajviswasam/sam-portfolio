import { useEffect, useState } from "react";
import "./BootSequence.css";

const bootLines = [
  "INITIALIZING SAM_OS...",
  "LOADING DEVOPS ENVIRONMENT...",
  "CONNECTING CLOUD MODULES...",
  "LOADING KUBERNETES ENGINE...",
  "VERIFYING CI/CD PIPELINE...",
  "SYSTEM READY.",
];

function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lineIndex = 0;

    const lineTimer = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setVisibleLines((previous) => [
          ...previous,
          bootLines[lineIndex],
        ]);

        lineIndex += 1;
        setProgress(
          Math.round((lineIndex / bootLines.length) * 100)
        );
      } else {
        clearInterval(lineTimer);

        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 280);

    return () => clearInterval(lineTimer);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-grid" />

      <div className="boot-content">
        <div className="boot-logo">
          <span>&lt;</span>
          SAM
          <span>/&gt;</span>
        </div>

        <div className="boot-subtitle">
          DEVOPS ENGINEERING ENVIRONMENT
        </div>

        <div className="boot-terminal">
          <div className="boot-terminal-header">
            <span>SAM_OS // BOOT TERMINAL</span>
            <span>SECURE</span>
          </div>

          <div className="boot-lines">
            {visibleLines.map((line, index) => (
              <div className="boot-line" key={`${line}-${index}`}>
                <span className="boot-prefix">&gt;</span>
                <span>{line}</span>
                {index === visibleLines.length - 1 && (
                  <span className="boot-cursor" />
                )}
              </div>
            ))}
          </div>

          <div className="boot-progress">
            <div
              className="boot-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="boot-progress-info">
            <span>SYSTEM INITIALIZATION</span>
            <strong>{progress}%</strong>
          </div>
        </div>
      </div>

      <div className="boot-corner boot-corner-tl" />
      <div className="boot-corner boot-corner-tr" />
      <div className="boot-corner boot-corner-bl" />
      <div className="boot-corner boot-corner-br" />
    </div>
  );
}

export default BootSequence;
