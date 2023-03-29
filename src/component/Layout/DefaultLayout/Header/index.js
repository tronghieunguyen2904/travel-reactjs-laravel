import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/component/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("Main-nav")}>
      <div className={cx("nav-container")}>
        <div className={cx("logo-container")}>
          <img src={images.logo} alt="Logo" />
          <p>Travel</p>
        </div>
        <div className={cx("sub-nav-container")}>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/">Giới thiệu</a>
            </li>
            <li className={cx("tour-down")}>
              <a href="/">
                Tour du lịch
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: 2 }}
                />
              </a>
              <div className={cx("tour-down-container")}>
                <div className={cx("tour-down-container-main")}>
                  <div className={cx("list-tour-container")}>
                    <img
                      src={images.nav1}
                      alt="nav1"
                      className={cx("nav-down-img")}
                    />
                    <ul className={cx("list-nav")}>
                      <li className={cx("header-list-nav")}>Tour miền nam</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                    </ul>
                  </div>
                  <div className={cx("list-tour-container")}>
                    <img
                      src={images.nav2}
                      alt="nav1"
                      className={cx("nav-down-img")}
                    />
                    <ul className={cx("list-nav")}>
                      <li className={cx("header-list-nav")}>Tour miền nam</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                    </ul>
                  </div>
                  <div className={cx("list-tour-container")}>
                    <img
                      src={images.nav3}
                      alt="nav1"
                      className={cx("nav-down-img")}
                    />
                    <ul className={cx("list-nav")}>
                      <li className={cx("header-list-nav")}>Tour miền nam</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                    </ul>
                  </div>
                  <div className={cx("list-tour-container")}>
                    <img
                      src={images.nav4}
                      alt="nav1"
                      className={cx("nav-down-img")}
                    />
                    <ul className={cx("list-nav")}>
                      <li className={cx("header-list-nav")}>Tour miền nam</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                    </ul>
                  </div>
                  <div className={cx("list-tour-container")}>
                    <img
                      src={images.nav5}
                      alt="nav1"
                      className={cx("nav-down-img")}
                    />
                    <ul className={cx("list-nav")}>
                      <li className={cx("header-list-nav")}>Tour miền nam</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                      <li>Hồ Chí Minh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/">Tin tức</a>
            </li>
            <li>
              <a href="/">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className={cx("login-container")}>
          <div className={cx("icon-container")}>
            <FontAwesomeIcon icon={faMoon} className={cx("icon")} />
          </div>
          <div className={cx("icon-container")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx("icon")} />
          </div>
          <div className={cx("login-sub-container")}>
            <a className={cx("login-btn")} href="/">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
