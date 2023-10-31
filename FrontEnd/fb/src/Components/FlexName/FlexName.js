import classNames from "classnames/bind";
import styles from './FlexName.module.scss'

const cx = classNames.bind(styles)

function FlexName() {
    return ( 
        <div className={cx('box')}>
            <h2>Video</h2>
            <div className={cx('icon')}>
                <i class="fa-solid fa-gear"></i>
            </div>
        </div>
     );
}

export default FlexName;