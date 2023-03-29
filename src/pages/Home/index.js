import styles from "./Home.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function HomePage() {
    return ( 
        <div className={cx('Home-main')}>
            <h2>Home Page</h2>
        </div>
     );
}

export default HomePage;