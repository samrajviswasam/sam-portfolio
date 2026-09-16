import { motion } from "framer-motion";
import {
  Activity,
  Box,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Gauge,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import "./Skills.css";

const skillModules = [
  {
    id: "01",
    name: "CLOUD",
    icon: Cloud,
    color: "cyan",
    skills: [
      ["AWS", 78],
      ["EC2", 72],
      ["ECR", 74],
      ["EKS", 70],
      ["VPC", 68],
    ],
  },
  {
    id: "02",
    name: "CONTAINERS",
    icon: Box,
    color: "blue",
    skills: [
      ["Docker", 82],
      ["Kubernetes", 78],
      ["kubectl", 76],
      ["Minikube", 72],
      ["Ingress", 68],
    ],
  },
  {
    id: "03",
    name: "CI / CD",
    icon: GitBranch,
    color: "purple",
    skills: [
      ["Jenkins", 80],
      ["Git", 82],
      ["GitHub", 82],
      ["Pipelines", 78],
      ["Automation", 76],
    ],
  },
  {
    id: "04",
    name: "INFRASTRUCTURE",
    icon: Server,
    color: "red",
    skills: [
      ["Terraform", 74],
      ["Linux", 84],
      ["IAM", 68],
      ["Networking", 70],
      ["IaC", 72],
    ],
  },
  {
    id: "05",
    name: "MONITORING",
    icon: Activity,
    color: "green",
    skills: [
      ["Prometheus", 68],
      ["Grafana", 68],
      ["CloudWatch", 65],
      ["Alerts", 64],
      ["Observability", 63],
    ],
  },
  {
    id: "06",
    name: "DEVELOPMENT",
    icon: Code2,
    color: "orange",
    skills: [
      ["Python", 78],
      ["JavaScript", 68],
      ["React", 65],
      ["SQL", 72],
      ["HTML / CSS", 75],
    ],
  },
];

const workflow = [
  "CODE",
  "BUILD",
  "CONTAINERIZE",
  "DEPLOY",
  "MONITOR",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell">

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-kicker">
              02 / ENGINEERING STACK
            </span>

            <h2>
              SKILLS<span>.</span>
            </h2>

            <p>
              A practical DevOps stack covering cloud infrastructure,
              containers, CI/CD, infrastructure as code and monitoring.
            </p>
          </div>

          <div className="skills-terminal">
            <Terminal size={15} />
            <span>stack.scan()</span>
            <span className="terminal-status">ONLINE</span>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skillModules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.article
                className={`skill-module ${module.color}`}
                key={module.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="module-top">
                  <div className="module-icon">
                    <Icon size={19} />
                  </div>

                  <span className="module-id">
                    {module.id}
                  </span>
                </div>

                <h3>{module.name}</h3>

                <div className="module-lines">
                  {module.skills.map(([name, level]) => (
                    <div className="skill-row" key={name}>
                      <div className="skill-label">
                        <span>{name}</span>
                        <span>{level}%</span>
                      </div>

                      <div className="skill-track">
                        <motion.span
                          className="skill-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.2 + index * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="skills-workflow"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="workflow-heading">
            <Workflow size={17} />
            <span>DEVOPS WORKFLOW</span>
          </div>

          <div className="workflow-line">
            {workflow.map((item, index) => (
              <div className="workflow-item" key={item}>
                <motion.div
                  className="workflow-node"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.12,
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </motion.div>

                {index < workflow.length - 1 && (
                  <motion.span
                    className="workflow-connector"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12 + 0.15,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="skills-marquee">
          <div className="skills-marquee-track">
            <span>AWS</span>
            <span>DOCKER</span>
            <span>KUBERNETES</span>
            <span>JENKINS</span>
            <span>TERRAFORM</span>
            <span>LINUX</span>
            <span>GIT</span>
            <span>PROMETHEUS</span>
            <span>GRAFANA</span>
            <span>AWS</span>
            <span>DOCKER</span>
            <span>KUBERNETES</span>
            <span>JENKINS</span>
            <span>TERRAFORM</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
