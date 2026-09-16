import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Cloud,
  Container,
  GitBranch,
  Server,
  Terminal,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import "./Experience.css";

const timeline = [
  {
    id: "01",
    period: "CURRENT",
    category: "DEVOPS ENGINEERING",
    title: "DevOps Intern",
    company: "iCanio Technologies",
    description:
      "Hands-on work with cloud infrastructure, CI/CD automation, containerization and Kubernetes-based application deployment.",
    icon: BriefcaseBusiness,
    technologies: [
      "Linux",
      "Git",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
    ],
    highlights: [
      "CI/CD pipeline automation",
      "Containerized application deployment",
      "AWS cloud infrastructure",
      "Kubernetes workload management",
    ],
  },
  {
    id: "02",
    period: "PROJECT",
    category: "CLOUD DEPLOYMENT",
    title: "AWS EKS Deployment",
    company: "Cloud Infrastructure",
    description:
      "Built an end-to-end deployment workflow for a React application using Jenkins, Docker, Amazon ECR, Amazon EKS and AWS Load Balancer infrastructure.",
    icon: Cloud,
    technologies: [
      "AWS",
      "EKS",
      "ECR",
      "Docker",
      "Jenkins",
      "ALB",
    ],
    highlights: [
      "Automated Docker image builds",
      "Images pushed to Amazon ECR",
      "Kubernetes deployment on EKS",
      "Application exposed through AWS load balancing",
    ],
  },
  {
    id: "03",
    period: "PROJECT",
    category: "CONTAINER ORCHESTRATION",
    title: "Kubernetes Application Stack",
    company: "Cloud-Native Engineering",
    description:
      "Worked with Kubernetes deployments, services, namespaces and ingress resources to run application workloads in a cloud-native environment.",
    icon: Container,
    technologies: [
      "Kubernetes",
      "kubectl",
      "Minikube",
      "EKS",
      "Ingress",
      "Services",
    ],
    highlights: [
      "Created Kubernetes deployments",
      "Configured ClusterIP services",
      "Worked with namespaces",
      "Configured ingress-based application access",
    ],
  },
  {
    id: "04",
    period: "PROJECT",
    category: "OBSERVABILITY",
    title: "Kubernetes Monitoring",
    company: "Monitoring & Reliability",
    description:
      "Implemented monitoring concepts for Kubernetes workloads using Prometheus and Grafana with metrics visualization and alerting.",
    icon: Activity,
    technologies: [
      "Prometheus",
      "Grafana",
      "Kubernetes",
      "CloudWatch",
      "Alerts",
    ],
    highlights: [
      "Metrics collection",
      "Dashboard visualization",
      "Kubernetes monitoring",
      "Alert configuration",
    ],
  },
];

const workflow = [
  { label: "PLAN", icon: Terminal },
  { label: "CODE", icon: GitBranch },
  { label: "BUILD", icon: Cpu },
  { label: "CONTAINER", icon: Container },
  { label: "DEPLOY", icon: Server },
  { label: "MONITOR", icon: Activity },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-grid-bg" />
      <div className="experience-scanline" />

      <div className="experience-container">
        {/* HEADER */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="experience-section-number">
            04 / ENGINEERING LOG
          </div>

          <div className="experience-header-row">
            <div>
              <h2>EXPERIENCE</h2>
              <p>
                DEVOPS / CLOUD / AUTOMATION / INFRASTRUCTURE
              </p>
            </div>

            <div className="experience-live-status">
              <span className="experience-status-dot" />
              <span>SYSTEM ACTIVE</span>
            </div>
          </div>
        </motion.div>

        {/* ENGINEERING SUMMARY */}
        <motion.div
          className="experience-command"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="command-top">
            <div className="command-lights">
              <span />
              <span />
              <span />
            </div>

            <span>sam@devops:~</span>

            <div className="command-security">
              <ShieldCheck size={15} />
              SECURE SESSION
            </div>
          </div>

          <div className="command-body">
            <span className="command-prompt">$</span>

            <span className="command-text">
              cat engineering_profile.txt
            </span>

            <motion.span
              className="command-cursor"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </div>

          <div className="command-output">
            <span>ROLE</span>
            <strong>DEVOPS ENGINEER</strong>

            <span>FOCUS</span>
            <strong>
              CLOUD INFRASTRUCTURE + CI/CD AUTOMATION
            </strong>

            <span>ENVIRONMENT</span>
            <strong>
              LINUX / DOCKER / KUBERNETES / AWS
            </strong>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="experience-timeline">
          <div className="timeline-line" />

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`experience-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >
                {/* NODE */}
                <div className="timeline-node">
                  <motion.div
                    className="timeline-node-core"
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <Icon size={19} />
                  </motion.div>
                </div>

                {/* CARD */}
                <div className="experience-card">
                  <div className="experience-card-top">
                    <div className="experience-index">
                      LOG_{item.id}
                    </div>

                    <div className="experience-period">
                      {item.period}
                    </div>
                  </div>

                  <div className="experience-category">
                    {item.category}
                  </div>

                  <h3>{item.title}</h3>

                  <div className="experience-company">
                    <BriefcaseBusiness size={15} />
                    {item.company}
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  {/* HIGHLIGHTS */}
                  <div className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <div
                        className="experience-highlight"
                        key={highlight}
                      >
                        <span className="highlight-marker">
                          +
                        </span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="experience-tech">
                    {item.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="experience-card-footer">
                    <span>ENGINEERING_RECORD</span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* WORKFLOW */}
        <motion.div
          className="experience-workflow"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="workflow-header">
            <div>
              <span>ENGINEERING_WORKFLOW</span>
              <h3>FROM CODE TO PRODUCTION</h3>
            </div>

            <div className="workflow-live">
              <span />
              LIVE PIPELINE
            </div>
          </div>

          <div className="workflow-track">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="workflow-step" key={step.label}>
                  <div className="workflow-node">
                    <Icon size={20} />
                    <span>{step.label}</span>
                  </div>

                  {index !== workflow.length - 1 && (
                    <div className="workflow-connector">
                      <motion.div
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* FOOTER STATUS */}
        <div className="experience-footer">
          <div>
            <span className="footer-pulse" />
            ENGINEERING MODE: ACTIVE
          </div>

          <div>
            <span>DEVOPS</span>
            <span>·</span>
            <span>CLOUD</span>
            <span>·</span>
            <span>AUTOMATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
