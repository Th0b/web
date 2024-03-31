//Constants
import Constants from "/constants";
//Styles
import styles from "./styles/Footer.module.sass";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const buymeacoffeeIcon = "/SocialSites/buymeacoffee.svg";
  const facebookIcon = "/SocialSites/facebook.png";
  const instagramIcon = "/SocialSites/instagram.png";
  const githubIcon = "/SocialSites/github.png";
  const linkedinIcon = "/SocialSites/linkedin.png";

  return (
    <>
      <footer className={styles.footer}>
        <div>
          <a
            href={Constants.GITHUB_ISSUE}
            target="_blank"
            rel="noreferrer noopener"
          >
            Nahlásit chybu
          </a>
        </div>
        |<div>&#169; 2022-{yearNow}</div>|<div>Tobiáš Návrat</div>|
        <div>
          <a
            href={Constants.BUYMEACOFFEE_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.icon}
              src={buymeacoffeeIcon}
              alt="Buymeacoffee Logo"
            />
          </a>
          <a
            href={Constants.FACEBOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.icon}
              src={facebookIcon}
              alt="Facebook Logo"
            />
          </a>
          <a
            href={Constants.INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.icon}
              src={instagramIcon}
              alt="Instagram Logo"
            />
          </a>
          <a
            href={Constants.GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className={styles.icon} src={githubIcon} alt="Github Logo" />
          </a>
          <a
            href={Constants.LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.icon}
              src={linkedinIcon}
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
