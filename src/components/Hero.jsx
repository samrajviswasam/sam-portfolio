import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Cloud,
  Box,
  Server,
  GitBranch,
  Activity,
  Terminal,
  Cpu,
} from "lucide-react";

import "./Hero.css";

const terminalData = [
  {
    command: "kubectl get nodes",
    lines: [
      "node-01        Ready",
      "node-02        Ready",
      "node-03        Ready",
      "3 nodes ready",
    ],
  },
  {
    command: "docker ps",
    lines: [
      "react-app      Running",
      "flask-api      Running",
      "nginx          Running",
      "3 containers active",
    ],
  },
  {
    command: "terraform plan",
    lines: [
      "Infrastructure plan",
      "3 to add",
      "0 to change",
      "0 to destroy",
    ],
  },
  {
    command: "jenkins build",
    lines: [
      "Pipeline triggered",
      "Build stages completed",
      "Deployment successful",
      "BUILD SUCCESSFUL ✓",
    ],
  },
];

const systems = [
  {
    name: "AWS",
    status: "ONLINE",
    icon: Cloud,
  },
  {
    name: "Docker",
    status: "RUNNING",
    icon: Box,
  },
  {
    name: "Kubernetes",
    status: "READY",
    icon: Server,
  },
  {
    name: "Jenkins",
    status: "ACTIVE",
    icon: GitBranch,
  },
  {
    name: "Terraform",
    status: "SYNCED",
    icon: Cpu,
  },
];

function Hero() {
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const terminalTimer = setInterval(() => {
      setTerminalIndex((current) => {
        return (current + 1) % terminalData.length;
      });
    }, 4500);

    return () => clearInterval(terminalTimer);
  }, []);

  useEffect(() => {
    const identityTimer = setInterval(() => {
      setIdentityIndex((current) => {
        return (current + 1) % 4;
      });
    }, 1700);

    return () => clearInterval(identityTimer);
  }, []);

  const terminal = terminalData[terminalIndex];

  return (
    <section className="devops-hero" id="home">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-bg">

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-red"></div>

        <div className="hero-glow hero-glow-blue"></div>

        <div className="hero-glow hero-glow-purple"></div>

        <div className="server-wall server-wall-one">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="server-unit" key={index}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ))}
        </div>

        <div className="server-wall server-wall-two">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="server-unit" key={index}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ))}
        </div>

        <div className="network-orbit orbit-one"></div>

        <div className="network-orbit orbit-two"></div>

        <div className="network-point point-one"></div>

        <div className="network-point point-two"></div>

        <div className="network-point point-three"></div>

      </div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="hero-nav">

        <a href="#home" className="hero-brand">

          <div className="brand-name">
            SAM <span>SJ</span>
          </div>

          <small>DEVOPS ENGINEER</small>

        </a>


        <nav>

          <a href="#home">HOME</a>

          <a href="#about">ABOUT</a>

          <a href="#skills">SKILLS</a>

          <a href="#projects">PROJECTS</a>

          <a href="#experience">EXPERIENCE</a>

          <a href="#certifications">CERTIFICATIONS</a>

          <a href="#contact">CONTACT</a>

        </nav>


        <div className="hero-availability">

          <span></span>

          AVAILABLE

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="hero-main">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-eyebrow">

            <span></span>

            BUILD / AUTOMATE / DEPLOY / SCALE

          </div>


          {/* IDENTITY TRANSACTION */}

          <div className="identity-box">

            <div className="identity-header">

              <span>IDENTITY_TRANSACTION</span>

              <b>
                <i></i>
                LIVE
              </b>

            </div>


            <div className="identity-command">

              <span>$</span>

              {identityIndex === 0 && " identity --verify"}

              {identityIndex === 1 && " authenticating"}

              {identityIndex === 2 && " locating profile"}

              {identityIndex === 3 && " identity verified"}

              <em>_</em>

            </div>


            <motion.div
              className="identity-message"
              key={identityIndex}
              initial={{
                opacity: 0,
                x: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >

              {identityIndex === 0 && (
                <>
                  <strong>✓</strong>
                  secure session initialized
                </>
              )}

              {identityIndex === 1 && (
                <>
                  <strong className="purple-text">›</strong>
                  verifying developer credentials
                </>
              )}

              {identityIndex === 2 && (
                <>
                  <strong className="blue-text">›</strong>
                  developer profile found
                </>
              )}

              {identityIndex === 3 && (
                <>
                  <strong>✓</strong>
                  SAM SJ // SESSION ACTIVE
                </>
              )}

            </motion.div>

          </div>


          {/* NAME */}

          <div className="hero-name">

            <h1>

              <span>SAM</span>

              <strong>SJ</strong>

            </h1>

            <div className="name-light"></div>

          </div>


          <h2>
            DEVOPS ENGINEER
          </h2>


          <div className="hero-role-tags">

            <span>AWS</span>
            <i>•</i>

            <span>KUBERNETES</span>
            <i>•</i>

            <span>CI/CD</span>
            <i>•</i>

            <span>AUTOMATION</span>

          </div>


          <p className="hero-description">

            Building reliable infrastructure, automated delivery
            pipelines and scalable cloud systems using Linux,
            Docker, Kubernetes, Jenkins, Terraform and AWS.

          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-button-primary"
            >

              VIEW MY PROJECTS

              <ArrowRight size={16} />

            </a>


            <a
              href="/images/DevOpsSam.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-button-secondary"
            >

              <Download size={15} />

              DOWNLOAD RESUME

            </a>

          </div>


          {/* STATS */}

          <div className="hero-stats">

            <div>
              <strong>CI/CD</strong>
              <span>AUTOMATION</span>
            </div>

            <div>
              <strong>AWS</strong>
              <span>CLOUD</span>
            </div>

            <div>
              <strong>K8S</strong>
              <span>ORCHESTRATION</span>
            </div>

            <div>
              <strong>IaC</strong>
              <span>TERRAFORM</span>
            </div>

          </div>


          {/* MOVING TECHNOLOGY BAR */}

          <div className="tech-marquee">

            <div className="tech-track">

              <span>LINUX</span>
              <b>◆</b>

              <span>GIT</span>
              <b>◆</b>

              <span>DOCKER</span>
              <b>◆</b>

              <span>KUBERNETES</span>
              <b>◆</b>

              <span>JENKINS</span>
              <b>◆</b>

              <span>TERRAFORM</span>
              <b>◆</b>

              <span>AWS</span>
              <b>◆</b>

              <span>PYTHON</span>
              <b>◆</b>

              <span>PROMETHEUS</span>
              <b>◆</b>

              <span>GRAFANA</span>

              <b>◆</b>

              <span>LINUX</span>
              <b>◆</b>

              <span>GIT</span>
              <b>◆</b>

              <span>DOCKER</span>
              <b>◆</b>

              <span>KUBERNETES</span>
              <b>◆</b>

              <span>JENKINS</span>
              <b>◆</b>

              <span>TERRAFORM</span>
              <b>◆</b>

              <span>AWS</span>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            TERMINAL
        ================================================= */}

        <motion.div
          className="hero-terminal"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >

          <div className="terminal-top">

            <div className="terminal-dots">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <label>
              sam@devops:~
            </label>

            <b>
              LIVE
            </b>

          </div>


          <div className="terminal-content">

            <div className="terminal-command">

              <span>$</span>

              {terminal.command}

            </div>


            <motion.div
              key={terminal.command}
              className="terminal-lines"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >

              {terminal.lines.map((line, index) => (

                <div key={index}>

                  <span>✓</span>

                  {line}

                </div>

              ))}

            </motion.div>


            <div className="terminal-success">

              <span></span>

              PIPELINE STATUS: SUCCESS

            </div>


            <div className="terminal-cursor">

              <span>$</span>

              <i>_</i>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            YOUR PHOTO
            HIGHEST Z-INDEX
            NOTHING GOES OVER THIS
        ================================================= */}

        <motion.div
          className="hero-photo"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >

          <div className="photo-frame">

            <div className="photo-corner corner-tl"></div>
            <div className="photo-corner corner-tr"></div>
            <div className="photo-corner corner-bl"></div>
            <div className="photo-corner corner-br"></div>


            <img
              src="/images/sam_no_bg.png"
              alt="Sam SJ"
              className="sam-photo"
              draggable="false"
            />


            <div className="photo-id">

              <span>
                IDENTITY VERIFIED
              </span>

              <strong>
                SAM SJ
              </strong>

              <small>
                DEVOPS ENGINEER
              </small>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            INFRASTRUCTURE
            COMPLETELY SEPARATE FROM PHOTO
        ================================================= */}

        <motion.aside
          className="infra-panel"
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
        >

          <div className="infra-title">

            <div>

              <span>LIVE SYSTEM</span>

              <strong>
                INFRASTRUCTURE
              </strong>

            </div>

            <Activity size={16} />

          </div>


          <div className="infra-health">

            <span></span>

            ALL SYSTEMS OPERATIONAL

          </div>


          {systems.map((system) => {

            const Icon = system.icon;

            return (

              <div
                className="infra-row"
                key={system.name}
              >

                <Icon size={16} />

                <span>
                  {system.name}
                </span>

                <b>
                  {system.status}
                </b>

              </div>

            );

          })}

        </motion.aside>


        {/* =================================================
            LIVE SYSTEM LABEL
        ================================================= */}

        <motion.div
          className="live-session"
          animate={{
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >

          <Terminal size={13} />

          <span>
            LIVE DEVOPS SESSION
          </span>

          <i></i>

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="hero-bottom">

        <div className="bottom-status">

          <span>SYS://2050</span>

          <i></i>

          <span>DEVOPS ONLINE</span>

          <i></i>

          <span>AUTOMATION READY</span>

        </div>


        <div className="bottom-scroll">

          <span></span>

          SCROLL TO EXPLORE

          <ArrowRight size={13} />

        </div>


        <div className="bottom-session">

          <Terminal size={12} />

          SECURE SESSION

        </div>

      </div>

    </section>
  );
}

export default Hero;
