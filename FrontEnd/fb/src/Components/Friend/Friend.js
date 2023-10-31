import classNames from 'classnames/bind';
import styles from './Friend.module.scss';
import Img from '../Img/Img';

const cx = classNames.bind(styles);

function Friend() {
    return (
        <div className={cx('frienBox')}>
            <div className={cx('friendImg')}>
                <Img src={''} alt={''} className={cx('imgs')} />
            </div>
            <div className={cx('friendConect')}>
                <h2 className={cx('textName')}>Gearvn</h2>
                <p className={cx('title')}>gearvn.com</p>
                <div className={cx('btnBox')}>
                    <button type="button" className={cx('buttn', 'cols')}>
                        Xác nhận
                    </button>
                    <button type="button" className={cx('buttn')}>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Friend;
