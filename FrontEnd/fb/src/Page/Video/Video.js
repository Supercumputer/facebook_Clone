import className from 'classnames/bind';
import styles from './Video.module.scss';
import UserName from '../../Components/UserName/UserName';
import HeaderViewPost from '../../Components/HeaderViewPost/HeaderViewPost';
import videos from '../../Image/video.mp4';
import { useEffect, useState } from 'react';
import { getVideos } from '../../Api/service';

const cx = className.bind(styles);

function randomSort(a, b) {
    return Math.random() - 0.5;
}

function Video() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        getVideoApi();
    }, []);

    const getVideoApi = async () => {
        try {
            let res = await getVideos();
            if (res) {
                res.data.sort(randomSort);
                setVideo(res.data);
            } else {
            }
        } catch (error) {
            console.log('loi goi video api');
        }
    };

    return (
        <div className={cx('boxContent', 'col-xl-9', 'col-md-11', 'col-11', )}>
            {video.map((item, index) => {
                return (
                    <div className={cx('boxVideo')}>
                        <HeaderViewPost name={item.name} avata={item.avata}/>
                        <div className={cx('titlePost')}>
                            <p>{item.title}</p>
                        </div>
                        <div className={cx('centerVideo')}>
                            <video src={videos} controls />
                        </div>
                        <div className={cx('bottomVideo')}>
                            <div className={cx('bx1')}>
                                <UserName icon={<i className="fa-regular fa-thumbs-up"></i>} firstName={'Thích'} />
                                <UserName
                                    icon={<i className="fa-regular fa-comment-dots"></i>}
                                    firstName={'Bình luận'}
                                />
                                <UserName
                                    icon={<i className="fa-regular fa-share-from-square"></i>}
                                    firstName={'Chia sẻ'}
                                />
                            </div>
                            <div className={cx('bx1')}>
                                <p>647 bình luận</p>
                                <p>9,2 triệu lượt xem</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Video;
