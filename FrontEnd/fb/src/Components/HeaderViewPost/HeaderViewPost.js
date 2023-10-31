import classNames from 'classnames/bind';
import styles from './HeaderViewPost.module.scss';
import Img from '../Img/Img';
const cx = classNames.bind(styles)

function HeaderViewPost({name, avata}) {
    return ( 
        <div className={cx('viewTop')}>
                <div className={cx('topLeft')}>
                    <div className={cx('userAvata')}>
                        <Img src={avata} alt="" className={cx('setImg')} />
                    </div>
                    <div className={cx('userName')}>
                        <h2 className={cx('textName')}>{name}</h2>
                        <p className={cx('title')}>gearvn.com</p>
                    </div>
                </div>
                <div className={cx('topRight')}>
                    <div className={cx('box1')}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                    <div className={cx('box1')}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
     );
}

export default HeaderViewPost;



