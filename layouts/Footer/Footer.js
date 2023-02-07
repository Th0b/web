//Styles
import styles from "./styles/Footer.module.sass";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const facebookIcon = "/SocialSites/facebook.png";
  const instagramIcon = "/SocialSites/instagram.png";
  const githubIcon = "/SocialSites/github.png";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_PROFILE;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_PROFILE;
  return (
    <footer className={styles.footer}>
      <div>
        &copy; 2022-{yearNow} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Tobiáš
        Návrat &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <a href={facebookUrl} target="_blank" rel="noreferrer noopener">
          <img
            className={styles.icon}
            src={facebookIcon}
            alt="Facebook Logo"
          ></img>
        </a>
        <a href={instagramUrl} target="_blank" rel="noreferrer noopener">
          <img
            className={styles.icon}
            src={instagramIcon}
            alt="Instragram Logo"
          ></img>
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer noopener">
          <img className={styles.icon} src={githubIcon} alt="Github Logo"></img>
        </a>
      </div>
    </footer>
  );
}
