import classNames from 'classnames/bind';
import styles from './UserName.module.scss';
import Img from '../Img/Img';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserName({ avata, icon, to, firstName, onClick }) {
    return (
        <div className={cx('userBox')} onClick={onClick}>
            {icon ? (
                <div className={cx('userIcon')}>{icon}</div>
            ) : (
                <div className={cx('userAvata')}>
                    <Img src={avata} alt="" className={cx('setImg')} />
                </div>
            )}

            <p className={cx('userName')}>
                <Link to={to} className={cx('linkText')}>
                    {firstName}
                </Link>
            </p>
        </div>
    );
}

export default UserName;
