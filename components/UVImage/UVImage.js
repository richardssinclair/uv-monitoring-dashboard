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
    return "/uvgood.png";
  }

  const imageSrc = getUVImageSrc(value);
  const imageSrcFun = getUVImageFun(value);
  return (
    <div className={styles.UVImage}>
      <img
        data-testid="image-one"
        className={`${styles.image} ${styles.imageone}`}
        src={imageSrc}
        alt=""
      />
      <img
        data-testid="image-two"
        className={`${styles.image} ${styles.imagetwo}`}
        src={imageSrcFun}
        alt=""
      />
    </div>
  );
};

export default UVImage;
