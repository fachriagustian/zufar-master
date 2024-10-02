import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {useEffect, useRef} from "react";
import {experiences, projects} from "@/component/string";


export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() =>{
    const updateMousePosition = (ev: MouseEvent) =>{
      const {clientX, clientY} = ev;
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.setProperty("--x", `${clientX}px`);
          ref.current.style.setProperty("--y", `${clientY}px`);
        }
      }, 0);
    }
    window.addEventListener('mousemove', updateMousePosition);

    return()=>{
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [])
  return (
    <>
      <Head>
        <title>Akhsana Zufar Masyhuda</title>
        <meta name="description" content="Zufar's personal UI/UX Journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={ref} className={styles.main}>
        <div className={styles.profileName}>
          <div className={styles.userWrapper}>
            <h1>AKHSANA ZUFAR MASYHUDA</h1>
            <h6>UI/UX DESIGNER</h6>
            <div className={styles.contactItem}>
              <a href="mailto:akhsana.zufar@gmail.com">
                <span className={styles.icContact}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.875 4.5C20.325 4.5 21.5 5.675 21.5 7.125V16.875C21.5 18.325 20.325 19.5 18.875 19.5H5.125C4.42881 19.5 3.76113 19.2234 3.26884 18.7312C2.77656 18.2389 2.5 17.5712 2.5 16.875V7.125C2.5 5.675 3.675 4.5 5.125 4.5H18.875ZM20.25 9.1755L12.301 13.5475C12.2192 13.5925 12.1284 13.6186 12.0352 13.6238C11.942 13.6291 11.8488 13.6134 11.7625 13.578L11.699 13.548L3.75 9.175V16.875C3.75 17.2397 3.89487 17.5894 4.15273 17.8473C4.41059 18.1051 4.76033 18.25 5.125 18.25H18.875C19.2397 18.25 19.5894 18.1051 19.8473 17.8473C20.1051 17.5894 20.25 17.2397 20.25 16.875V9.1755ZM18.875 5.75H5.125C4.76033 5.75 4.41059 5.89487 4.15273 6.15273C3.89487 6.41059 3.75 6.76033 3.75 7.125V7.7495L12 12.2865L20.25 7.749V7.125C20.25 6.76033 20.1051 6.41059 19.8473 6.15273C19.5894 5.89487 19.2397 5.75 18.875 5.75Z" fill="white" fill-opacity="0.6"/>
                  </svg>
                </span>
              </a>
              <a href="https://wa.me/6285607070805" rel="whatsapp" target="_blank">
                <span className={styles.icContact}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633C17.5714 4.79588 16.5819 4.13211 15.4919 3.68015C14.4019 3.22818 13.233 2.997 12.053 3C7.105 3 3.077 7.027 3.075 11.977C3.075 13.559 3.488 15.103 4.273 16.465L3 21.116L7.759 19.867C9.07539 20.5836 10.5502 20.9593 12.049 20.96H12.053C17 20.96 21.028 16.933 21.03 11.983C21.0334 10.8035 20.803 9.63499 20.3521 8.54506C19.9012 7.45513 19.2387 6.46537 18.403 5.633V5.633ZM12.053 19.445H12.05C10.7135 19.4451 9.40163 19.0856 8.252 18.404L7.98 18.242L5.156 18.983L5.909 16.23L5.732 15.948C4.98479 14.7584 4.58923 13.3818 4.591 11.977C4.593 7.863 7.94 4.516 12.056 4.516C13.0363 4.51382 14.0072 4.70608 14.9127 5.08165C15.8181 5.45722 16.6401 6.00864 17.331 6.704C18.0256 7.39604 18.5762 8.21889 18.9509 9.125C19.3256 10.0311 19.517 11.0025 19.514 11.983C19.512 16.097 16.165 19.445 12.053 19.445ZM16.146 13.856C15.921 13.743 14.819 13.201 14.613 13.126C14.408 13.051 14.259 13.014 14.109 13.238C13.959 13.462 13.529 13.967 13.398 14.117C13.267 14.267 13.136 14.285 12.912 14.173C12.688 14.061 11.965 13.824 11.108 13.06C10.441 12.465 9.991 11.731 9.86 11.506C9.729 11.281 9.846 11.16 9.959 11.048C10.06 10.948 10.183 10.786 10.295 10.655C10.407 10.524 10.444 10.431 10.519 10.281C10.594 10.131 10.557 10 10.5 9.888C10.444 9.775 9.995 8.671 9.808 8.222C9.627 7.787 9.442 7.845 9.304 7.839C9.16108 7.83315 9.01804 7.83048 8.875 7.831C8.76126 7.8339 8.64934 7.86026 8.54626 7.90845C8.44318 7.95663 8.35117 8.02559 8.276 8.111C8.07 8.336 7.491 8.878 7.491 9.982C7.491 11.086 8.295 12.153 8.407 12.303C8.519 12.453 9.989 14.718 12.239 15.69C12.775 15.921 13.193 16.059 13.518 16.163C14.055 16.334 14.544 16.309 14.931 16.252C15.362 16.188 16.258 15.71 16.445 15.186C16.632 14.662 16.632 14.213 16.576 14.119C16.52 14.025 16.369 13.968 16.146 13.856" fill="white" fill-opacity="0.6"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentSection}>
            <h2>SUMMARY</h2>
            <p>I am a skilled UI/UX designer with over three years of experience creating innovative and user-friendly products. I focus on delivering exceptional results that meet users' needs, and I take great pride in delivering work that exceeds expectations. I would be honored to share more about my experience and how I can contribute to your projects.</p>
            <div className={styles.button}><a href="/resume.pdf" target="_blank">VIEW FULL RESUME</a></div>
          </div>

          <div className={styles.contentSection}>
            <h2>EXPERIENCE</h2>
            {experiences.map((exp)=>{
              return(
                <div className={styles.listItem}>
                  <div className={styles.year}>{exp.year}</div>
                  <div className={styles.jobDesc}>
                    <h3>{exp.role} · <a className={styles.company} href={exp.website} rel="knitto" target="_blank">{exp.company}</a></h3>
                    <p>{exp.description}</p>
                    <div className={styles.skillWrapper}>
                      {exp.skill.map((skill)=>{
                        return(
                          <span className={styles.skillSet}>{skill}</span>
                        )
                      }
                      )}
                    </div>
                  </div>
                </div>
              )
            }
            )}


          </div>

          <div className={styles.contentSection}>
            <h2>LATEST PROJECT</h2>
            {projects.map((pr)=>{
              return(
                <div className={styles.listItem}>
                  <div className={styles.jobDesc}>
                    <h3>{pr.name} · <a className={styles.company} href={pr.link} rel="yose1" target="_blank">{pr.tool}</a></h3>
                    <p>{pr.description}</p>
                    <div className={styles.skillWrapper}>
                      {pr.skill.map((skillset)=>{
                        return(
                          <span className={styles.skillSet}>{skillset}</span>
                        )
                      }
                      )}
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
