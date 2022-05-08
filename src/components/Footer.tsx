import styles from "../styles/footer.module.css";
function Footer() {
  const { attribution } = styles;
  return (
    <footer className={attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.linkedin.com/in/luispintodev/"
        target="_blank"
        rel="noreferrer"
      >
        Luís Pinto
      </a>
      .
    </footer>
  );
}

export default Footer;