import classNames from 'classnames/bind';
import styles from './User.module.scss';
import PostNew from '../../Components/PostNew/PostNew';
import ViewPost from '../../Components/ViewPost/ViewPost';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function User({ data, id }) {
    const athu = useSelector(state => state.auth.auth)
    return (
        <div className={cx('boxBottom')}>
            <div className={cx('left', 'col-3', 'd-none', 'd-xl-block')}>
                <h2>Giới thiệu</h2>
                <button type="button" class={cx('btns')}>
                    Thêm tiểu sử
                </button>
            </div>
            <div className={cx('right', 'col-lg-7', 'col-md-9', 'col-sm-10', 'col-11', 'col-xl-5')}>
                {id.userName === athu.account.id && <PostNew />}

                {data.post.map((item, index) => {
                    return (
                        <ViewPost
                            avata={data.user.avataPicture}
                            name={`${data.user.lastName} ${data.user.firstName}`}
                            key={index}
                            title={data.post[index].title}
                            img={data.post[index].img}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default User;
