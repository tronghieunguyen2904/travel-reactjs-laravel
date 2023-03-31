import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/component/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from '@tippyjs/react/headless';
import Wrapper from "./wrapper";
import 'tippy.js/dist/tippy.css';
import { Link } from "react-router-dom";
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
            <Tippy render={attrs => (
              <div className={cx('wrapper-container')} tabIndex="-1" {...attrs} >
                  <Wrapper></Wrapper>
              </div>
            )} placement="bottom" trigger="mouseenter focus">
              <li className={cx("tour-down")}>
                <a href="/">
                  Tour du lịch
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ marginLeft: 2 }}
                  />
                </a>
                {/* <Wrapper/> */}
              </li>
              </Tippy>
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
                <Link to="/login" className={cx('login-btn-link')}>
                  <button className={cx("login-btn")}>
                    Đăng nhập
                  </button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
