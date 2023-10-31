import classNames from 'classnames/bind';
import styles from './VideoLayout.module.scss';
import Header from '../../Components/Header/Header';
import FlexName from '../../Components/FlexName/FlexName';
import Search from '../../Components/Search/Search';
import UserName from '../../Components/UserName/UserName';
import Video from '../../Page/Video/Video';
const cx = classNames.bind(styles);

function VideoLayout({children}) {
    return (
        <div className={cx('containerBox')}>
            <Header />
            <div className={cx('conten')}>
                <div className={cx('left', 'col-3', 'd-none', 'd-xl-block', 'd-lg-block')}>
                    <FlexName />
                    <Search placeholder={'Tìm kiếm video'} />
                    <UserName icon={<i class="fa-solid fa-photo-film"></i>} firstName={'Trang chủ'} />
                    <UserName icon={<i class="fa-solid fa-tower-broadcast"></i>} firstName={'Trực tiếp'} />
                    <UserName icon={<i class="fa-solid fa-circle-play"></i>} firstName={'Reels'} />
                    <UserName icon={<i class="fa-solid fa-clapperboard"></i>} firstName={'Chương trình'} />
                    <UserName icon={<i class="fa-solid fa-jet-fighter-up"></i>} firstName={'Khám phá'} />
                    <UserName icon={<i class="fa-solid fa-floppy-disk"></i>} firstName={'Video đã lưu'} />
                </div>
                <div className={cx('right', 'col-xl-9', 'col-lg-9' ,'col-12')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default VideoLayout;
