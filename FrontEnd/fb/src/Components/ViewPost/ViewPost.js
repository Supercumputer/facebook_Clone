import classNames from 'classnames/bind';
import styles from './ViewPost.module.scss';
import Img from '../Img/Img';
import { heard, like} from '../../Image';
import UserName from '../UserName/UserName';
import HeaderViewPost from '../HeaderViewPost/HeaderViewPost';
const cx = classNames.bind(styles);

function ViewPost({title, img, avata, name}) {
    
    return (
        <div className={cx('viewBox')}>
            <HeaderViewPost avata={avata} name={name}/>
            <div className={cx('titlePost')}>
                <p>{title}</p>
            </div>
            <div className={cx('viewCenter')}>
                <Img src={img} alt={''} className={cx('namet')} />
            </div>
            <div className={cx('viewBottom')}>
                <div className={cx('btLeft')}>
                    <div className={cx('camx')}>
                        <Img src={like} alt="" className={cx('bc')} />
                        <Img src={heard} alt="" className={cx('bc')} />
                    </div>
                    <p>Thảo Uyên, Lê Thuỳ Linh và 5,3K người khác</p>
                </div>
                <div className={cx('btRight')}>
                    <div className={cx('boxc')}>
                        <span>5,3K</span>
                        <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className={cx('boxc')}>
                        <span>5,3K</span>
                        <i className="fa-regular fa-share-from-square"></i>
                    </div>
                </div>
            </div>
            <div className={cx('PostButton')}>
                <UserName icon={<i className="fa-regular fa-thumbs-up"></i>} firstName={'Thích'}/>
                {/* <i className="fa-solid fa-thumbs-up"></i> */}
                <UserName icon={<i className="fa-regular fa-comment-dots"></i>} firstName={'Bình luận'}/>
                <UserName icon={<i className="fa-regular fa-share-from-square"></i>} firstName={'Chia sẻ'}/>
            </div>
        </div>
    );
}

export default ViewPost;
