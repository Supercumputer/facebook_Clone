import classNames from 'classnames/bind';
import styles from './SpayItem.module.scss';
import Img from '../Img/Img';
const cx = classNames.bind(styles);

function SpayItem({ name, avata, img }) {
    return (
        <div className={cx('itemBox')}>
            {name ? (
                <div className={cx('items')}>
                    <div className={cx('imgTops')}>
                        <Img src={img} alt={''} className={cx('imgs', 'iml')} />
                    </div>
                    <div className={cx('userBox')}>
                        <div className={cx('usd')}>
                            <Img src={avata} alt={''} className={cx('imgs')} />
                        </div>
                    </div>
                    <div className={cx('userName')}>
                        <span>{name}</span>
                    </div>
                </div>
            ) : (
                <div className={cx('itemDefault')}>
                    <div className={cx('imgTop')}>
                        <Img src={'user.avata'} alt={''} className={cx('imgs', 'iml')} />
                    </div>
                    <div className={cx('conBottom')}>
                        <p>Tạo tin</p>
                        <div className={cx('add')}>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SpayItem;
