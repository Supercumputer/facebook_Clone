import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({placeholder}){
    return (
        <div className={cx('Search')}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder={placeholder} className={cx('d-xl-block', 'd-none')} />
        </div>
    );
}

export default Search;
