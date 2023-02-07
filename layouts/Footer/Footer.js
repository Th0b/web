//Constants
import * as Constants from "constants";
//Styles
import styles from "./styles/Footer.module.sass";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const facebookIcon = "/SocialSites/facebook.png";
  const instagramIcon = "/SocialSites/instagram.png";
  const githubIcon = "/SocialSites/github.png";
  return (
    <footer className={styles.footer}>
      <div>
        &copy; 2022-{yearNow} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Tobiáš
        Návrat &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <a href={Constants.FACEBOOK_URL} target="_blank" rel="noreferrer noopener">
          <img
            className={styles.icon}
            src={facebookIcon}
            alt="Facebook Logo"
          ></img>
        </a>
        <a href={Constants.INSTAGRAM_URL} target="_blank" rel="noreferrer noopener">
          <img
            className={styles.icon}
            src={instagramIcon}
            alt="Instragram Logo"
          ></img>
        </a>
        <a href={Constants.GITHUB_URL} target="_blank" rel="noreferrer noopener">
          <img className={styles.icon} src={githubIcon} alt="Github Logo"></img>
        </a>
      </div>
    </footer>
  );
}
