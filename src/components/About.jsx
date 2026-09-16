import { motion } from "framer-motion";
import {
  Terminal,
  Cloud,
  GitBranch,
  Box,
  Server,
  ShieldCheck,
  Activity,
} from "lucide-react";

import "./About.css";

const skills = [
  { name: "Linux", level: 85 },
  { name: "Docker", level: 82 },
  { name: "Kubernetes", level: 78 },
  { name: "AWS", level: 76 },
  { name: "Jenkins", level: 80 },
  { name: "Terraform", level: 74 },
];

const focusAreas = [
  {
    icon: GitBranch,
    title: "CI/CD",
    text: "Automated build and delivery pipelines.",
  },
  {
    icon: Cloud,
    title: "CLOUD",
    text: "Cloud infrastructure and deployment workflows.",
  },
  {
    icon: Box,
    title: "CONTAINERS",
    text: "Containerized application environments.",
  },
  {
    icon: Server,
    title: "ORCHESTRATION",
    text: "Kubernetes-based application management.",
  },
];

function About() {
  return (
    <section className="about-devops" id="about">

      {/* BACKGROUND */}

      <div className="about-bg-grid"></div>

      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>


      {/* SECTION HEADER */}

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >

        <div className="about-section-code">
          <span></span>
          01 / PROFILE
        </div>

        <h2>
          ABOUT <strong>ME</strong>
        </h2>

        <p>
          Engineering mindset. Cloud infrastructure.
          Continuous automation.
        </p>

      </motion.div>


      {/* MAIN GRID */}

      <div className="about-layout">


        {/* =================================================
            PROFILE
        ================================================= */}

        <motion.div
          className="about-profile"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >

          <div className="about-card-top">

            <div className="about-terminal-icon">
              <Terminal size={17} />
            </div>

            <div>

              <span>PROFILE // 001</span>

              <strong>
                DEVOPS ENGINEER
              </strong>

            </div>

            <div className="profile-status">
              <i></i>
              ACTIVE
            </div>

          </div>


          <div className="about-profile-body">

            <div className="profile-command">
              <span>$</span>
              whoami
            </div>

            <h3>
              SAM SJ
            </h3>

            <div className="profile-role">
              CLOUD & DEVOPS
            </div>

            <p>
              Focused on building reliable infrastructure,
              automating software delivery and working with
              modern cloud-native technologies.
            </p>

            <div className="profile-terminal-line">
              <span>$</span>
              infrastructure --status
              <b>READY</b>
            </div>

          </div>


          <div className="about-profile-footer">

            <span>
              <ShieldCheck size={12} />
              SECURE PROFILE
            </span>

            <span>
              <Activity size={12} />
              SYSTEM ACTIVE
            </span>

          </div>

        </motion.div>


        {/* =================================================
            SKILLS
        ================================================= */}

        <motion.div
          className="about-skills"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >

          <div className="about-card-heading">

            <div>

              <span>TECHNICAL MATRIX</span>

              <h3>
                CORE <strong>STACK</strong>
              </h3>

            </div>

            <span className="matrix-live">
              LIVE
            </span>

          </div>


          <div className="skill-list">

            {skills.map((skill, index) => (

              <div
                className="skill-row"
                key={skill.name}
              >

                <div className="skill-info">

                  <span>
                    {skill.name}
                  </span>

                  <small>
                    {String(skill.level).padStart(2, "0")}%
                  </small>

                </div>


                <div className="skill-track">

                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.1,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            FOCUS AREAS
        ================================================= */}

        <motion.div
          className="focus-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="focus-heading">

            <span>
              ENGINEERING FOCUS
            </span>

            <strong>
              WHAT I BUILD
            </strong>

          </div>


          <div className="focus-grid">

            {focusAreas.map((area, index) => {

              const Icon = area.icon;

              return (

                <motion.div
                  className="focus-card"
                  key={area.title}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <div className="focus-icon">

                    <Icon size={18} />

                  </div>

                  <div>

                    <h4>
                      {area.title}
                    </h4>

                    <p>
                      {area.text}
                    </p>

                  </div>

                  <span className="focus-number">
                    0{index + 1}
                  </span>

                </motion.div>

              );

            })}

          </div>

        </motion.div>


        {/* =================================================
            TERMINAL MESSAGE
        ================================================= */}

        <motion.div
          className="about-terminal-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="message-left">

            <span>$</span>

            <div>

              <strong>
                continuous_learning
              </strong>

              <small>
                Always improving. Always building.
              </small>

            </div>

          </div>


          <div className="message-right">

            <i></i>

            SYSTEM READY

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;
