import classNames from 'classnames/bind';
import styles from './UserLayout.module.scss';
import Header from '../../Components/Header/Header';
import Img from '../../Components/Img/Img';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState, cloneElement } from 'react';
import { getUser } from '../../Api/service';
import Example from '../../Components/Loading/Loading';

const cx = classNames.bind(styles);

function UserLayout({ children }) {

    let id = useParams();
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    const [check, setCheck] = useState(false)

    useEffect(() => {
        getUserApi(id.userName);
    }, []);

 console.log(data)
    async function getUserApi(id) {
        setLoading(true)
        try {
            let res = await getUser(id);
            if (res && res.data) {
                console.log(res)
                setData(res.data);
            } 
        } catch (error) {
            console.log('Loi get user');
        }finally{
            setLoading(false)
        }
    }
    const updatedChildren = cloneElement(children, { data: data, id });

    return (
        <>
        {loading ? <div className={cx('boxLoading')}><Example/></div> : (<div className={cx('userBox')}>
        <Header />
        <div className={cx('userConten')}>
            <div className={cx('boxTop')}>
                <div className={cx('boxItem', 'col-lg-9', 'col-sm-11', 'col-12')}>
                    <div className={cx('banner', 'col-sm-12','col-12')}>
                        <Img src={data.user.bgPicture} alt={''} className={cx('imgs')} />
                    </div>
                    <div className={cx('inForA')}>
                        <div className={cx('viewTop')}>
                            <div className={cx('topLeft')}>
                                <div className={cx('userAvata')}>
                                    <Img src={data.user.avataPicture} alt="" className={cx('setImg')} />
                                </div>
                                <div className={cx('userName')}>
                                    <h2 className={cx('textName')}>{`${data.user.lastName} ${data.user.firstName}`}</h2>
                                    <p className={cx('title')}>792 bạn bè</p>
                                </div>
                                
                            </div>
                            <div className={cx('topRight')}>
                                <div className={cx('box1')}>
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                                {check ? (<div className={cx('box2')}>
                                    <button>Hủy kết bạn</button>
                                </div>) : (<div className={cx('box2')}>
                                    <button>Kết bạn</button>
                                </div>)}
                                
                            </div>
                        </div>
                        <div className={cx('navCenter')}>
                    
                            <NavLink to="/" className={(nav) => cx('bmn', 'active', { active: nav.isActive })}>
                                <div className={cx('iconNav')}>
                                    <p>Bài viết</p>
                                </div>
                            </NavLink>

                            <NavLink to="/video" className={(nav) => cx('bmn', { active: nav.isActive })}>
                                <div className={cx('iconNav')}>
                                    <p>Giới thiệu</p>
                                </div>
                            </NavLink>

                            <NavLink to="/maketplace" className={(nav) => cx('bmn', { active: nav.isActive })}>
                                <div className={cx('iconNav')}>
                                    <p>Bạn bè</p>
                                </div>
                            </NavLink>

                            <NavLink to="/group" className={(nav) => cx('bmn', { active: nav.isActive })}>
                                <div className={cx('iconNav')}>
                                    <p>Ảnh</p>
                                </div>
                            </NavLink>

                            <NavLink to="/game" className={(nav) => cx('bmn', { active: nav.isActive })}>
                                <div className={cx('iconNav')}>
                                    <p>Video</p>
                                </div>
                            </NavLink>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('boxBottom')}>{updatedChildren}</div>
        </div>
    </div>)}
    </>
    );
}

export default UserLayout;
