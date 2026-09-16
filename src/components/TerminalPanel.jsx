import { useState } from "react";
import {
  Terminal,
  ChevronRight,
  CircleCheck,
} from "lucide-react";
import "./TerminalPanel.css";

const commands = {
  help: [
    "Available commands:",
    "about       → profile information",
    "stack       → DevOps technology stack",
    "projects    → deployment projects",
    "contact     → communication channels",
    "clear       → clear terminal",
  ],
  about: [
    "SAM SJ",
    "DevOps Engineer",
    "Cloud infrastructure • CI/CD • Kubernetes • Automation",
  ],
  stack: [
    "Linux",
    "Git",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "AWS",
    "Prometheus",
    "Grafana",
  ],
  projects: [
    "01  End-to-End CI/CD Pipeline",
    "02  Containerized Flask API",
    "03  Kubernetes Monitoring",
    "04  AWS Infrastructure",
  ],
  contact: [
    "EMAIL      samrajsj227@gmail.com",
    "GITHUB     github.com/samrajviswasam",
    "LINKEDIN   linkedin.com/in/samraj-viswasam-a-1212sj",
  ],
};

function TerminalPanel() {
  const [history, setHistory] = useState([
    {
      command: "system --init",
      output: ["Portfolio terminal initialized.", "Type 'help' to begin."],
    },
  ]);

  const [input, setInput] = useState("");

  const executeCommand = (command) => {
    const cleanCommand = command.trim().toLowerCase();

    if (!cleanCommand) {
      return;
    }

    if (cleanCommand === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[cleanCommand];

    setHistory((previous) => [
      ...previous,
      {
        command: cleanCommand,
        output: output || [
          `command not found: ${cleanCommand}`,
          "Type 'help' for available commands.",
        ],
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    executeCommand(input);
    setInput("");
  };

  return (
    <div className="terminal-panel">
      <div className="terminal-panel-header">
        <div className="terminal-brand">
          <Terminal size={15} />
          <span>SAM_TERMINAL</span>
        </div>

        <div className="terminal-controls">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="terminal-panel-body">
        <div className="terminal-status">
          <CircleCheck size={13} />
          <span>SECURE SESSION / READY</span>
        </div>

        <div className="terminal-history">
          {history.map((entry, index) => (
            <div className="terminal-entry" key={`${entry.command}-${index}`}>
              <div className="terminal-command">
                <ChevronRight size={13} />
                <span>{entry.command}</span>
              </div>

              <div className="terminal-output">
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form className="terminal-input-row" onSubmit={handleSubmit}>
          <span>$</span>

          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck="false"
          />

          <button type="submit">RUN</button>
        </form>
      </div>
    </div>
  );
}

export default TerminalPanel;
