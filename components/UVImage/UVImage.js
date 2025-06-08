import styles from "./UVImage.module.scss";

const UVImage = ({ value }) => {
  function getUVImageSrc(value) {
    if (value > 11) return "/UV-Index-5.png";
    if (value > 10) return "/UV-Index-4.png";
    if (value >= 6) return "/UV-Index-3.png";
    if (value > 3) return "/UV-Index-2.png";
    return "/UV-Index-1.png";
  }

  function getUVImageFun(value) {
    if (value >= 6) return "uvhot.png";
    if (value >= 3) return "uvmedium.png";
    return "/vitaminD.png";
  }

  const text =
    value >= 6
      ? "Brolly time"
      : value >= 3
      ? "Slap on some sun screen"
      : "Get some vitamin D mate";

  const imageSrc = getUVImageSrc(value);
  const imageSrcFun = getUVImageFun(value);
  return (
    <div className={styles.UVImage}>
      <p className={styles.subtitle}>Representation of sun strength</p>
      <img
        data-testid="image-one"
        className={`${styles.image} ${styles.imageone}`}
        src={imageSrc}
        alt={text}
      />
      <p>Product Recomendations</p>
      <img
        data-testid="image-two"
        className={`${styles.image} ${styles.imagetwo}`}
        src={imageSrcFun}
        alt={text}
      />
      <p>{text}</p>
    </div>
  );
};

export default UVImage;
