import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Product({ img, name, location, price }) {
  const [activeHeart, setActiveHeart] = useState(false);
  const handleHeart = () => {
    setActiveHeart(!activeHeart);
  };
  return (
    <div className={cx("product-box")}>
      <div className={cx("product-img")}>
        <img src={img} alt="Product Img" />
        <div className={cx("favourite-container", `${activeHeart ? 'active' : ''}`)} onClick={handleHeart}>
          <FontAwesomeIcon icon={faHeart} className={cx("favourite-icon")} />
        </div>
      </div>
      <div className={cx("product-content")}>
        <span className={cx("number-seat")}>Tour có tổng cộng 40 chỗ</span>
        <span className={cx("name-tour")}>{name}</span>
        <div className={cx("location-tour-container")}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={cx("location-tour-icon")}
          />
          <span className={cx("location-tour-text")}>{location}</span>
        </div>
        <div className={cx("line-product")}></div>
        <div className={cx("price-tour-container")}>
          <span className={cx("price-tour-text")}>{price}$ /person</span>
          <div className={cx("rating-container")}>
            <FontAwesomeIcon icon={faStar} className={cx("rating-star")} />
            <span className={cx("rating-text")}>4.8</span>
            <span className={cx("rating-number-voted")}>(28)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
