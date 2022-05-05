import styles from "../styles/preview.module.css";
import previewImage from "../tip-calculator-app-main/design/desktop-design-completed.jpg";

function Preview() {
  const { container } = styles;
  return (
    <div className={container}>
      <img src={previewImage} alt="preview" />
    </div>
  );
}

export default Preview;
