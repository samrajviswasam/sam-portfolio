import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Box,
  Cloud,
  Database,
  ExternalLink,
  GitBranch,
  Layers,
  Server,
  Shield,
  Terminal,
} from "lucide-react";
import "./Projects.css";

const pipeline = [
  { name: "GITHUB", icon: GitBranch },
  { name: "JENKINS", icon: Activity },
  { name: "DOCKER", icon: Box },
  { name: "ECR", icon: Database },
  { name: "EKS", icon: Server },
  { name: "ALB", icon: Cloud },
];

const supportingProjects = [
  {
    number: "02",
    type: "CONTAINERIZATION",
    title: "Containerized Flask API",
    description:
      "Containerized backend deployment workflow using Flask, Docker and Kubernetes.",
    technologies: ["Python", "Flask", "Docker", "Kubernetes", "AWS"],
    icon: Box,
  },
  {
    number: "03",
    type: "OBSERVABILITY",
    title: "Kubernetes Monitoring",
    description:
      "Monitoring stack using Prometheus and Grafana with Kubernetes-based alerting.",
    technologies: ["Prometheus", "Grafana", "Kubernetes", "Alerts"],
    icon: Activity,
  },
  {
    number: "04",
    type: "INFRASTRUCTURE",
    title: "AWS Infrastructure",
    description:
      "Infrastructure workflow using Terraform for cloud resources and configuration.",
    technologies: ["Terraform", "AWS", "IAM", "VPC", "EC2"],
    icon: Layers,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-shell">
        <div className="projects-heading">
          <div className="section-index">03 / PROJECT SYSTEM</div>

          <div className="projects-heading-row">
            <div>
              <p className="projects-kicker">ENGINEERING PORTFOLIO</p>
              <h2>
                SELECTED
                <span> PROJECTS</span>
              </h2>
            </div>

            <div className="project-system-status">
              <span className="status-pulse" />
              SYSTEMS DEPLOYED
            </div>
          </div>
        </div>

        <motion.article
          className="featured-project"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-topline">
            <span>PROJECT_01</span>
            <span>DEVOPS / CLOUD</span>
            <span className="deployed-status">
              <span />
              DEPLOYED
            </span>
          </div>

          <div className="featured-content">
            <div className="featured-info">
              <div className="featured-icon">
                <Terminal size={22} />
              </div>

              <p className="featured-label">END-TO-END CI/CD PIPELINE</p>

              <h3>
                React Application
                <br />
                <span>on AWS EKS</span>
              </h3>

              <p className="featured-description">
                A complete cloud-native deployment workflow connecting GitHub,
                Jenkins, Docker, Amazon ECR, Kubernetes and AWS Load Balancer
                infrastructure.
              </p>

              <div className="featured-tech">
                {[
                  "AWS",
                  "EKS",
                  "ECR",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "GitHub",
                  "ALB",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="featured-actions">
                <a
                  href="https://github.com/samrajviswasam"
                  target="_blank"
                  rel="noreferrer"
                  className="project-button primary"
                >
                  <GitBranch size={15} />
                  VIEW GITHUB
                  <ArrowUpRight size={14} />
                </a>

                <a href="#contact" className="project-button">
                  DISCUSS PROJECT
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="architecture">
              <div className="architecture-header">
                <div>
                  <span className="architecture-label">
                    LIVE ARCHITECTURE
                  </span>
                  <strong>DEPLOYMENT PIPELINE</strong>
                </div>

                <div className="architecture-lock">
                  <Shield size={13} />
                  SECURE
                </div>
              </div>

              <div className="architecture-canvas">
                <div className="architecture-grid" />

                {pipeline.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <div className="pipeline-node-wrapper" key={node.name}>
                      <motion.div
                        className="pipeline-node"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.12,
                          duration: 0.45,
                        }}
                      >
                        <div className="pipeline-icon">
                          <Icon size={18} />
                        </div>

                        <span>{node.name}</span>

                        <small>ONLINE</small>
                      </motion.div>

                      {index < pipeline.length - 1 && (
                        <div className="pipeline-connection">
                          <motion.i
                            initial={{ left: "0%" }}
                            whileInView={{ left: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.12 + 0.25,
                              duration: 1,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="architecture-terminal">
                  <span>$ deployment --status</span>
                  <strong>PIPELINE_READY</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="featured-bottom">
            <div>
              <span>FLOW</span>
              <strong>CODE → BUILD → CONTAINER → PUSH → DEPLOY</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>AWS / KUBERNETES</strong>
            </div>
          </div>
        </motion.article>

        <div className="supporting-header">
          <span>ADDITIONAL SYSTEMS</span>
          <span>03 MODULES</span>
        </div>

        <div className="supporting-projects">
          {supportingProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="supporting-card"
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="supporting-top">
                  <span>{project.number}</span>
                  <Icon size={18} />
                </div>

                <span className="supporting-type">{project.type}</span>

                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <div className="supporting-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="supporting-footer">
                  <span>ENGINEERING MODULE</span>
                  <ExternalLink size={14} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="projects-marquee">
          <div>
            CODE <b>→</b> BUILD <b>→</b> TEST <b>→</b> CONTAINERIZE{" "}
            <b>→</b> PUSH <b>→</b> DEPLOY <b>→</b> MONITOR
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
