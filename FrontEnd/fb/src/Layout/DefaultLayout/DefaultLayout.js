import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import UserName from '../../Components/UserName/UserName';
import Maketing from '../../Components/Maketing/Maketing';
import Friend from '../../Components/Friend/Friend';
import { useSelector } from 'react-redux';
import {getfriend} from '../../Api/service' 
const cx = classNames.bind(styles);

const listMenu = [
    {
        icon: <i className="fa-solid fa-user-group"></i>,
        textName: 'Bạn bè',
        path: '',
    },
    {
        icon: <i className="fa-solid fa-gamepad"></i>,
        textName: 'Chơi game',
        path: '',
    },
    {
        icon: <i className="fa-solid fa-clock-rotate-left"></i>,
        textName: 'Kỷ niệm',
        path: '',
    },
    {
        icon: <i className="fa-solid fa-bookmark"></i>,
        textName: 'Đã lưu',
        path: '',
    },
    {
        icon: <i className="fa-solid fa-people-group"></i>,
        textName: 'Nhóm',
        path: '',
    },
    {
        icon: <i className="fa-solid fa-angle-down"></i>,
        textName: 'Xem thêm',
        path: '',
        children: [
            {
                icon: <i className="fa-solid fa-business-time"></i>,
                textName: 'Bảng feed',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-heart"></i>,
                textName: 'Chiến dịch gây quỹ',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-money-check-dollar"></i>,
                textName: 'Đơn đặt hàng và thanh toán',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-droplet"></i>,
                textName: 'Hiến máu',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-chart-simple"></i>,
                textName: 'Hoạt động quảng cáo gần đây',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-shop"></i>,
                textName: 'Marketplace',
                path: '',
            },
            {
                icon: <i className="fa-brands fa-facebook-messenger"></i>,
                textName: 'Messenger',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-comments"></i>,
                textName: 'Messenger Kids',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-calendar-check"></i>,
                textName: 'Sự kiện',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-paste"></i>,
                textName: 'Trang',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-square-poll-vertical"></i>,
                textName: 'Trình quản lý quảng cáo',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-tree-city"></i>,
                textName: 'Trung tâm khoa học khí hậu',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-person-rays"></i>,
                textName: 'Trung tâm quảng cáo',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-bullseye"></i>,
                textName: 'Ứng phó khẩn cấp',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-photo-film"></i>,
                textName: 'Video',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-dragon"></i>,
                textName: 'Video chơi game',
                path: '',
            },
            {
                icon: <i className="fa-solid fa-angle-down"></i>,
                textName: 'Ẩn bớt',
                path: '',
                hiden: true,
            },
        ],
    },
];


function DefaultLayout({ children }) {
    const athu = useSelector(state => state.auth.auth)
    const [history, setHistory] = useState(listMenu);
    const [value, setValue] = useState();
    const [friend, setFriend] = useState([])


    useEffect(()=>{
        getFriendApi('user.id')
    }, [])  

    const getFriendApi = async (id) => {
        try {
            let res = await getfriend(id)
            if(res){
                setFriend(res.data)
            }else{

            }
        } catch (error) {
            console.log('loi get friend')
        }

    }

    const handlerchildern = (isChildren, isHiden) => {
        if (isChildren) {
            setValue(history.pop());
            history.push(...isChildren);
            setHistory((arr) => [...arr]);
        } else if (isHiden) {
            const arr = history.slice(0, 5);
            arr.push(value);
            setHistory(arr);
        }
    };

    return (
        <div className={cx('containerBox')}>
            <Header />
            <div className={cx('conten','justify-content-xl-between','justify-content-around')}>
                
                <div className={cx('contenLeft', 'col-3','d-none' ,'d-xl-block' ,'d-xxl-block')}>
                    <UserName to={`user/${athu.account.id}`} avata={athu.account.avata} firstName={athu.account.firstName + ' '+ athu.account.firstName} />
                    {history.map((item, index) => {
                        let isChildren = item.children;
                        let isHiden = item.hiden;
                        return (
                            <UserName
                                key={index}
                                icon={item.icon}
                                firstName={item.textName}
                                to={item.path}
                                onClick={() => handlerchildern(isChildren, isHiden)}
                            />
                        );
                    })}

                    <div className={cx('borderLine')}>
                        <p className={cx('t1')}>Lối tắt của bạn</p>
                        <p className={cx('t2')}>Chỉnh sửa</p>
                    </div>

                    {history.map((item, index) => {
                        let isChildren = item.children;
                        let isHiden = item.hiden;
                        return (
                            <UserName
                                key={index}
                                icon={item.icon}
                                firstName={item.textName}
                                onClick={() => handlerchildern(isChildren, isHiden)}
                            />
                        );
                    })}

                    <div className={cx('infor')}>
                        <p>Quyền riêng tư Điều khoản Quảng cáo Lựa chọn quảng cáo Cookie Meta © 2023</p>
                    </div>
                </div>


                <div className={cx('contenCenter', 'col-xl-5', 'col-lg-6', 'col-md-9', 'col-12')}>
                    {children}
                </div>


                <div className={cx('contenRight','d-none', 'd-lg-block','d-xl-block' ,'d-xxl-block')}>
                    <div className={cx('texttTitle')}>
                        <p>Được tài trợ</p>
                    </div>
                    <Maketing />
                    <Maketing />
                    <div className={cx('borderLineRight')}>
                        <p>Trang và trang cá nhân của bạn</p>
                    </div>
                    <UserName avata={athu.account.avata} firstName={athu.account.firstName + ' '+ athu.account.firstName} to={`/user/${athu.account.id}`}/>
                    <div className={cx('borderLine')}>
                        <p className={cx('t1')}>Lời mời kết bạn</p>
                    </div>
                    <Friend/>
                    <div className={cx('borderLineRight')}>
                        <p className={cx('t1')}>Sinh nhật</p>
                    </div>
                    <UserName icon={<i className="fa-solid fa-gift"></i>} firstName={'Hôm nay là sinh nhật của Long Huyền'}/>
                    <div className={cx('borderLine')}>
                        <p className={cx('t1')}>Người liên hệ</p>
                    </div>

                    {friend.map((item, index)=>{
                       return <UserName key={index} to={`/user/${item._id}`} avata={item.avataPicture} firstName={`${item.lastName} ${item.firstName}`} />
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
