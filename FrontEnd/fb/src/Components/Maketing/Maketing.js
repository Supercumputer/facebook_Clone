import classNames from "classnames/bind";
import styles from './Maketing.module.scss'
import Img from "../Img/Img";

const cx = classNames.bind(styles)

function Maketing() {
    return ( 
        <div className={cx('MaketBox')}>
            <div className={cx('imgMaket')}>
                <Img src={''} alt='' className={cx('imgj')}/>
            </div>
            <div className={cx('conten')}>
                <h2 className={cx('textName')}>Gearvn</h2>
                <p className={cx('title')}>gearvn.com</p>
            </div>
        </div>
     );
}

export default Maketing;