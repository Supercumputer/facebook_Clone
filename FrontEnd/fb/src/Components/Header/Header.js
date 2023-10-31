import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { logo } from '../../Image';
import { NavLink, useNavigate} from 'react-router-dom';
import StringContent from '../TipPy/TipPy';
import TippyHeadless from '@tippyjs/react/headless';
import UserName from '../UserName/UserName';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';
import { apiLogout } from '../../Api/service';
import Img from '../Img/Img';
const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate()
    const athu = useSelector(state => state.auth.auth)

    const handlerLogOut = async () => {
        try {
            let res = await apiLogout()
            if(res && res.status === 200){
                localStorage.removeItem('jwt')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={cx('navBox')}>
            <div className={cx('navLeft')}>
                <div className={cx('avata')}>
                    <img src={logo} alt="" />
                </div>
                <Search placeholder={"Tìm kiếm trên Facebook"}/>
            </div>

            <div className={cx('navCenter')}>
                <StringContent title={'Trang chủ'}>
                    <NavLink to="/" className={(nav) => cx('bmn', { active: nav.isActive })}>
                        <div className={cx('iconNav')}>
                            <i className="fa-solid fa-house"></i>
                        </div>
                    </NavLink>
                </StringContent>

                <StringContent title={'Video'}>
                    <NavLink to="/video" className={(nav) => cx('bmn', { active: nav.isActive })}>
                        <div className={cx('iconNav')}>
                            <i className="fa-solid fa-clapperboard"></i>
                        </div>
                    </NavLink>
                </StringContent>

                <StringContent title={'Maketplace'}>
                    <NavLink to="/maketplace" className={(nav) => cx('bmn', { active: nav.isActive })}>
                        <div className={cx('iconNav')}>
                            <i className="fa-solid fa-store"></i>
                        </div>
                    </NavLink>
                </StringContent>

                <StringContent title={'Nhóm'}>
                    <NavLink to="/group" className={(nav) => cx('bmn', { active: nav.isActive })}>
                        <div className={cx('iconNav')}>
                            <i className="fa-solid fa-users"></i>
                        </div>
                    </NavLink>
                </StringContent>

                <StringContent title={'Trò chơi'}>
                    <NavLink to="/game" className={(nav) => cx('bmn', { active: nav.isActive })}>
                        <div className={cx('iconNav')}>
                            <i className="fa-solid fa-gamepad"></i>
                        </div>
                    </NavLink>
                </StringContent>
            </div>
            <div className={cx('navRight')}>
                <div className={cx('box')}>
                    <i className="fa-solid fa-list-ul"></i>
                </div>
                <div className={cx('box')}>
                    <i className="fa-brands fa-facebook-messenger"></i>
                </div>
                <div className={cx('box')}>
                    <i className="fa-solid fa-bell"></i>
                </div>

                <TippyHeadless
                    hideOnClick={true}
                    trigger={'click'}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('boxTip')} tabIndex="-1" {...attrs}>
                            <div className={cx('box1')}>
                                <UserName avata={athu.account.avata} firstName={athu.account.firstName + ' '+ athu.account.firstName} to={`/user/${athu.account.id}`}/>
                                <div className={cx('borderLine')}>
                                    <p className={cx('t1')}>Xem tất cả trang cá nhân</p>
                                    <p className={cx('t2')}>Chỉnh sửa</p>
                                </div>
                            </div>
                            <UserName icon={<i className="fa-solid fa-gear"></i>} firstName={'Cài đặt & quyền riêng tư'} />
                            <UserName
                                icon={<i className="fa-solid fa-circle-question"></i>}
                                firstName={'Trợ giúp & hỗ trợ'}
                            />
                            <UserName icon={<i className="fa-solid fa-cloud-moon"></i>} firstName={'Màn hình & trợ năng'} />
                            <UserName icon={<i className="fa-solid fa-right-to-bracket"></i>} onClick={handlerLogOut}  firstName={'Đăng xuất'} />
                            <div className={cx('infor')}>
                                <p>Quyền riêng tư Điều khoản Quảng cáo Lựa chọn quảng cáo Cookie Meta © 2023</p>
                            </div>
                        </div>
                    )}
                >
                    <div className={cx('userAvata')}>
                        <Img src={'user.avata'} alt={''}/>
                    </div>
                </TippyHeadless>
            </div>
        </div>
    );
}

export default Header;
