import styles from "./styles/Footer.module.sass";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const facebookIcon = "/SocialSites/facebook.png";
  const instagramIcon = "/SocialSites/instagram.png";
  const githubIcon = "/SocialSites/github.png";
  const facebookUrl = "https://www.facebook.com/tobiasnavrat/";
  const instagramUrl = "https://www.instagram.com/umzuzuwetoba/";
  const githubUrl = "https://github.com/Th0b";
  return (
    <footer className={styles.footer}>
      <div>
        &copy; 2022-{yearNow} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Tobiáš
        Návrat &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        <a href={facebookUrl} target="_blank" rel="noreferrer noopener">
          <img className={styles.icon} src={facebookIcon}></img>
        </a>
        <a href={instagramUrl} target="_blank" rel="noreferrer noopener">
          <img className={styles.icon} src={instagramIcon}></img>
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer noopener">
          <img className={styles.icon} src={githubIcon}></img>
        </a>
      </div>
    </footer>
  );
}
