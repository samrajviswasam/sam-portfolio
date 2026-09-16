import { motion } from "framer-motion";
import {
  Mail,
  Code2,
  Users,
  FileText,
  Terminal,
  ArrowUpRight,
  Send,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import "./Contact.css";

const contactLinks = [
  {
    label: "EMAIL",
    value: "samrajsj227@gmail.com",
    href: "mailto:samrajsj227@gmail.com",
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "github.com/samrajviswasam",
    href: "https://github.com/samrajviswasam",
    icon: Code2,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/samraj-viswasam-a-1212sj",
    href: "https://linkedin.com/in/samraj-viswasam-a-1212sj",
    icon: Users,
  },
  {
    label: "RESUME",
    value: "DevOpsSam.pdf",
    href: "/images/DevOpsSam.pdf",
    icon: FileText,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-bg" />

      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />

      <div className="contact-container">
        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-section-number">
            06 / OPEN CHANNEL
          </div>

          <div className="contact-header-row">
            <div>
              <h2>LET&apos;S CONNECT</h2>

              <p>
                HAVE A PROJECT / OPPORTUNITY / TECHNICAL DISCUSSION?
              </p>
            </div>

            <div className="contact-live">
              <span />
              CHANNEL AVAILABLE
            </div>
          </div>
        </motion.div>

        {/* MAIN CONTACT GRID */}
        <div className="contact-main">
          {/* TERMINAL */}
          <motion.div
            className="contact-terminal"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-terminal-top">
              <div className="contact-terminal-lights">
                <span />
                <span />
                <span />
              </div>

              <span>communication_terminal</span>

              <div className="contact-secure">
                <ShieldCheck size={14} />
                SECURE
              </div>
            </div>

            <div className="contact-terminal-body">
              <div className="contact-command">
                <span>$</span>
                <span>./connect_with_sam.sh</span>
              </div>

              <div className="contact-terminal-output">
                <p>
                  Initializing communication channel...
                </p>

                <p>
                  <span className="terminal-green">
                    [OK]
                  </span>{" "}
                  Identity verified
                </p>

                <p>
                  <span className="terminal-green">
                    [OK]
                  </span>{" "}
                  Contact channels online
                </p>

                <p>
                  <span className="terminal-green">
                    [OK]
                  </span>{" "}
                  Ready for connection
                </p>
              </div>

              <div className="contact-identity">
                <div className="identity-label">
                  CURRENT ROLE
                </div>

                <h3>DEVOPS ENGINEER</h3>

                <p>
                  Building reliable infrastructure,
                  automated delivery pipelines and
                  scalable cloud systems.
                </p>
              </div>

              <div className="contact-location">
                <MapPin size={15} />
                <span>INDIA</span>
              </div>
            </div>
          </motion.div>

          {/* CONTACT LINKS */}
          <motion.div
            className="contact-links-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-panel-heading">
              <span>AVAILABLE CHANNELS</span>

              <Terminal size={17} />
            </div>

            <div className="contact-links">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    href={link.href}
                    target={
                      link.label === "EMAIL"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      link.label === "EMAIL"
                        ? undefined
                        : "noreferrer"
                    }
                    className="contact-link"
                    key={link.label}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      x: 7,
                    }}
                  >
                    <div className="contact-link-icon">
                      <Icon size={21} />
                    </div>

                    <div className="contact-link-info">
                      <span>{link.label}</span>

                      <strong>{link.value}</strong>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="contact-link-arrow"
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="contact-availability">
              <div className="availability-dot" />

              <div>
                <span>STATUS</span>

                <strong>
                  AVAILABLE FOR OPPORTUNITIES
                </strong>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-icon">
            <Send size={22} />
          </div>

          <div className="cta-content">
            <span>START A CONVERSATION</span>

            <h3>
              BUILD SOMETHING
              <br />
              <strong>RELIABLE.</strong>
            </h3>
          </div>

          <a
            href="mailto:samrajsj227@gmail.com"
            className="contact-cta-button"
          >
            SEND MESSAGE
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* MARQUEE */}
        <div className="contact-marquee">
          <div className="contact-marquee-track">
            {[
              "DEVOPS",
              "CLOUD",
              "AUTOMATION",
              "KUBERNETES",
              "CI/CD",
              "AWS",
              "DEVOPS",
              "CLOUD",
              "AUTOMATION",
              "KUBERNETES",
              "CI/CD",
              "AWS",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <b>◆</b>
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="contact-footer">
          <div className="contact-footer-left">
            <span className="footer-live-dot" />

            <span>SAM SJ</span>

            <span>·</span>

            <span>DEVOPS ENGINEER</span>
          </div>

          <div className="contact-footer-right">
            <span>© {new Date().getFullYear()}</span>

            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
