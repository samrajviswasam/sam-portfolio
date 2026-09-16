import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  BrainCircuit,
  BarChart3,
  Cpu,
  ExternalLink,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import "./Certifications.css";

const certifications = [
  {
    id: "CERT-01",
    title: "Java Essentials",
    issuer: "Infosys",
    category: "PROGRAMMING",
    icon: Code2,
  },
  {
    id: "CERT-02",
    title: "Data Analytics",
    issuer: "Cisco",
    category: "DATA",
    icon: BarChart3,
  },
  {
    id: "CERT-03",
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    category: "DEVELOPMENT",
    icon: Code2,
  },
  {
    id: "CERT-04",
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    category: "DEVELOPMENT",
    icon: Code2,
  },
  {
    id: "CERT-05",
    title: "NoSQL Fundamentals",
    issuer: "Great Learning",
    category: "DATABASE",
    icon: Database,
  },
  {
    id: "CERT-06",
    title: "C Programming",
    issuer: "Cisco",
    category: "PROGRAMMING",
    icon: Terminal,
  },
  {
    id: "CERT-07",
    title: "Google Cloud Computing Foundation",
    issuer: "Google Cloud",
    category: "CLOUD",
    icon: Cloud,
  },
  {
    id: "CERT-08",
    title: "Introduction to Industrial 4.0 and Industrial Internet of Things",
    issuer: "NPTEL",
    category: "IOT",
    icon: Cpu,
  },
  {
    id: "CERT-09",
    title: "AWS Academy Graduate",
    issuer: "AWS Academy",
    category: "CLOUD",
    icon: Cloud,
  },
  {
    id: "CERT-10",
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys",
    category: "AI / NLP",
    icon: BrainCircuit,
  },
  {
    id: "CERT-11",
    title: "Deep Learning with TensorFlow",
    issuer: "Infosys",
    category: "DEEP LEARNING",
    icon: BrainCircuit,
  },
  {
    id: "CERT-12",
    title: "Career Essentials for Generative AI",
    issuer: "Microsoft + LinkedIn",
    category: "GENERATIVE AI",
    icon: BrainCircuit,
  },
];

const streams = [
  {
    label: "CLOUD",
    value: "AWS / GOOGLE CLOUD",
    icon: Cloud,
  },
  {
    label: "PROGRAMMING",
    value: "JAVA / C / JAVASCRIPT",
    icon: Code2,
  },
  {
    label: "DATA",
    value: "ANALYTICS / NOSQL",
    icon: Database,
  },
  {
    label: "AI",
    value: "DL / NLP / GEN AI",
    icon: BrainCircuit,
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-grid-bg" />
      <div className="certifications-glow certifications-glow-one" />
      <div className="certifications-glow certifications-glow-two" />

      <div className="certifications-container">
        {/* HEADER */}
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="certifications-section-number">
            05 / CREDENTIAL VAULT
          </div>

          <div className="certifications-header-row">
            <div>
              <h2>CERTIFICATIONS</h2>
              <p>
                VERIFIED LEARNING / TECHNICAL KNOWLEDGE / CONTINUOUS GROWTH
              </p>
            </div>

            <div className="certifications-status">
              <span className="cert-status-dot" />
              CREDENTIALS ONLINE
            </div>
          </div>
        </motion.div>

        {/* VAULT TERMINAL */}
        <motion.div
          className="certificate-terminal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="certificate-terminal-top">
            <div className="terminal-lights">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-title">
              credential_vault.exe
            </div>

            <div className="terminal-security">
              <ShieldCheck size={14} />
              VERIFIED
            </div>
          </div>

          <div className="certificate-terminal-body">
            <div className="terminal-command">
              <span>$</span>
              <span>credentials --scan --all</span>

              <motion.span
                className="terminal-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </div>

            <div className="terminal-result">
              <div>
                <span>SCAN_STATUS</span>
                <strong>COMPLETE</strong>
              </div>

              <div>
                <span>CREDENTIALS</span>
                <strong>{certifications.length} VERIFIED</strong>
              </div>

              <div>
                <span>DOMAINS</span>
                <strong>4 TECHNICAL STREAMS</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STREAMS */}
        <div className="certification-streams">
          {streams.map((stream, index) => {
            const Icon = stream.icon;

            return (
              <motion.div
                className="certification-stream"
                key={stream.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="stream-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <span>{stream.label}</span>
                  <strong>{stream.value}</strong>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CERTIFICATION GRID */}
        <div className="certification-grid">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.article
                className="certificate-card"
                key={certificate.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="certificate-card-top">
                  <span>{certificate.id}</span>

                  <BadgeCheck
                    size={17}
                    className="certificate-check"
                  />
                </div>

                <div className="certificate-icon">
                  <Icon size={25} />
                </div>

                <div className="certificate-category">
                  {certificate.category}
                </div>

                <h3>{certificate.title}</h3>

                <div className="certificate-issuer">
                  <span>ISSUER</span>
                  <strong>{certificate.issuer}</strong>
                </div>

                <div className="certificate-card-footer">
                  <span>
                    <Award size={13} />
                    VERIFIED CREDENTIAL
                  </span>

                  <ExternalLink size={14} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* LEARNING MARQUEE */}
        <div className="certification-marquee">
          <div className="certification-marquee-track">
            {[
              "CLOUD",
              "PROGRAMMING",
              "DATA",
              "AI",
              "CLOUD",
              "PROGRAMMING",
              "DATA",
              "AI",
              "CLOUD",
              "PROGRAMMING",
              "DATA",
              "AI",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <b>◆</b>
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="certifications-footer">
          <div>
            <span className="footer-live-dot" />
            LEARNING SYSTEM: ACTIVE
          </div>

          <div>
            <span>BUILD</span>
            <span>·</span>
            <span>LEARN</span>
            <span>·</span>
            <span>DEPLOY</span>
            <span>·</span>
            <span>IMPROVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
