import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import images from "~/component/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('Main-nav')}>
            <div className={cx('nav-container')}>
                <div className={cx('logo-container')}>
                    <img src={images.logo} alt="Logo" />
                    <p>Travel</p>
                </div>
                <div className={cx('sub-nav-container')}>
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/">Giới thiệu</a></li>
                        <li><a href="/">Tour du lịch</a></li>
                        <li><a href="/">Tin tức</a></li>
                        <li><a href="/">Liên hệ</a></li>
                    </ul>
                </div>
                <div className={cx('login-container')}>
                    <div className={cx('icon-container')}>
                        <FontAwesomeIcon icon={faMoon} className={cx('icon')} />
                    </div>
                    <div className={cx('icon-container')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                    </div>
                    <div className={cx('login-sub-container')}>
                        <a className={cx('login-btn')} href="/">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Header;