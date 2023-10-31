import className from 'classnames/bind';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { apiLogin, apiRegister } from "../../Api/service";
import { toast } from 'react-toastify';
import { login } from '../../Redux/authentication';
import { useDispatch } from 'react-redux';

const cx = className.bind(styles);

function isEmail(value) {
    let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    return regex.test(value);
}

function isPassWord(value) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(value);
}

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [emailLog, setEmailLog] = useState('');
    const [passWordLog, setpassWordLog] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [checked, setChecked] = useState('');

    const valid = {
        isvalidEmail: false,
        isvalidSdt: false,
        isvalidMk: false,
        isvalidFirstName: false,
        isvalidLastName: false,
        isvalidDay: false,
        isvalidMonth: false,
        isvalidYear: false,
        isvalidELog: false,
        isvalidPLog: false,
        isvaliGioiTinh: false,
    };

    const [validate, setValidate] = useState(valid);

    const logInApi = async (data) => {
        try {
            let res = await apiLogin(data);
            console.log(res)
            if (res && res.data && res.status === 200) {
                dispatch(login(res.data));
                localStorage.setItem('jwt', res.data.token)
                navigate('/');
            }
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi đăng nhập.');
        }
    };

    const registerApi = async (data) => {
        try {
            let res = await apiRegister(data);
           
            if (res && res.data && res.status === 200) {
                toast.success(res.data.message);
                handleClose();
                setEmailLog('');
                setpassWordLog('');
            } else {
                toast.error(res.data.messenger);
            }
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi đăng kí.');
        }
    };

    const handleLogin = () => {
        setValidate(valid);
        if (emailLog === '' && passWordLog === '') {
            setValidate((valid) => ({ ...valid, isvalidELog: true, isvalidPLog: true }));
        } else if (passWordLog === '') {
            setValidate((valid) => ({ ...valid, isvalidPLog: true }));
        } else if (emailLog === '') {
            setValidate((valid) => ({ ...valid, isvalidELog: true }));
        } else {
            logInApi({ emailLog, passWordLog });
        }
    };

    const handleRegiter = () => {
        setValidate(valid);

        if (LastName.trim() === '') {
            setValidate((valid) => ({ ...valid, isvalidLastName: true }));
            return;
        }

        if (firstName.trim() === '') {
            setValidate((valid) => ({ ...valid, isvalidFirstName: true }));
            return;
        }

        if (email === '') {
            setValidate((valid) => ({ ...valid, isvalidEmail: true }));
            return;
        } else if (!isEmail(email)) {
            setValidate((valid) => ({ ...valid, isvalidEmail: true }));
            return;
        }

        if (passWord === '') {
            setValidate((valid) => ({ ...valid, isvalidMk: true }));
            return;
        } else if (!isPassWord(passWord)) {
            setValidate((valid) => ({ ...valid, isvalidMk: true }));
            return;
        }

        if (day === '') {
            setValidate((valid) => ({ ...valid, isvalidDay: true }));
            return;
        }

        if (month === '') {
            setValidate((valid) => ({ ...valid, isvalidMonth: true }));
            return;
        }

        if (year === '') {
            setValidate((valid) => ({ ...valid, isvalidYear: true }));
            return;
        }

        if (checked === '') {
            setValidate((valid) => ({ ...valid, isvaliGioiTinh: true }));
            return;
        }

        registerApi({ LastName, firstName, email, passWord, day, month, year, checked });
    };

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className={cx('formLogin')}>
                <div className={cx('left', 'col-10', 'col-md-6', 'col-lg-5', 'col-xl-4')}>
                    <h2 className={cx('textName')}>Facebook</h2>
                    <p className={cx('title')}>
                        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                    </p>
                </div>

                <div className={cx('right', 'col-10', 'col-md-6', 'col-lg-5', 'col-xl-3')}>
                    <form className={cx('formBox')}>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Email hoặc số điện thoại"
                                className={cx('boxIn', 'form-control', { 'is-invalid': validate.isvalidELog })}
                                value={emailLog}
                                onChange={(e) => setEmailLog(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={passWordLog}
                                className={cx('boxIn', 'form-control', { 'is-invalid': validate.isvalidPLog })}
                                onChange={(e) => setpassWordLog(e.target.value)}
                            />
                        </div>
                        <div className={cx('bnv')}>
                            <button type="button" className={cx('subBtn')} onClick={handleLogin}>
                                <span>Đăng nhập</span>
                            </button>
                        </div>
                        <p className={cx('qmk')}>
                            <Link to="/" className={cx('tt')}>
                                <span>Quên mật khẩu?</span>
                            </Link>
                        </p>
                        <div className={cx('bnv')}>
                            <button type="button" className={cx('ttkm')} onClick={handleShow}>
                                <span>Tạo tài khoản mới</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className={cx('textdk')}>Đăng ký</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                placeholder="Họ"
                                value={LastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={cx('form-control', { 'is-invalid': validate.isvalidLastName })}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                placeholder="Tên"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={cx('form-control', { 'is-invalid': validate.isvalidFirstName })}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                placeholder="Số di động hoặc email"
                                className={cx('form-control', { 'is-invalid': validate.isvalidEmail })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                placeholder="Mật khẩu mới"
                                value={passWord}
                                onChange={(e) => setPassWord(e.target.value)}
                                className={cx('form-control', { 'is-invalid': validate.isvalidMk })}
                            />
                        </div>

                        <div className="col-12">
                            <p className={cx('cls')}>Ngày sinh</p>
                            <div className="row">
                                <div className="col">
                                    <select
                                        id="inputState"
                                        onClick={(e) => setDay(e.target.value)}
                                        className={cx('form-select', { 'is-invalid': validate.isvalidDay })}
                                    >
                                        <option value="">Ngày</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        id="inputState"
                                        onClick={(e) => setMonth(e.target.value)}
                                        className={cx('form-select', { 'is-invalid': validate.isvalidMonth })}
                                    >
                                        <option value="">Tháng</option>
                                        <option value="1">Tháng 1</option>
                                        <option value="2">Tháng 2</option>
                                        <option value="3">Tháng 3</option>
                                        <option value="4">Tháng 4</option>
                                        <option value="5">Tháng 5</option>
                                        <option value="6">Tháng 6</option>
                                        <option value="7">Tháng 7</option>
                                        <option value="8">Tháng 8</option>
                                        <option value="9">Tháng 9</option>
                                        <option value="10">Tháng 10</option>
                                        <option value="11">Tháng 11</option>
                                        <option value="12">Tháng 12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        id="inputState"
                                        onClick={(e) => setYear(e.target.value)}
                                        className={cx('form-select', { 'is-invalid': validate.isvalidYear })}
                                    >
                                        <option value="">Năm</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className={cx('cls')}>Giới tính</p>
                            <div className="row">
                                <div className={cx('col', 'df', { vali: validate.isvaliGioiTinh })}>
                                    <p className={cx('cl')}>Nữ</p>
                                    <input type="radio" checked={checked === 'Nữ'} onChange={() => setChecked('Nữ')} />
                                </div>
                                <div className={cx('col', 'df', { vali: validate.isvaliGioiTinh })}>
                                    <p className={cx('cl')}>Nam</p>
                                    <input
                                        type="radio"
                                        checked={checked === 'Nam'}
                                        onChange={() => setChecked('Nam')}
                                    />
                                </div>
                                <div className={cx('col', 'df', { vali: validate.isvaliGioiTinh })}>
                                    <p className={cx('cl')}>Tùy chỉnh</p>
                                    <input
                                        type="radio"
                                        checked={checked === 'Giới tính thứ 3'}
                                        onChange={() => setChecked('Giới tính thứ 3')}
                                    />
                                </div>
                            </div>
                        </div>
                        {checked === 'Giới tính thứ 3' && (
                            <>
                                <div className="col-12">
                                    <select className={cx('form-select', 'fem')} aria-label="Default select example">
                                        <option value="">Chọn danh xưng</option>
                                        <option value="1">Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"</option>
                                        <option value="2">Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"</option>
                                        <option value="3">Họ: "Chúc họ sinh nhật vui vẻ!"</option>
                                    </select>
                                    <div id="emailHelp" className="form-text">
                                        Danh xưng của bạn hiển thị với tất cả mọi người.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <input
                                        type="text"
                                        placeholder="Giới tính (không bắt buộc)"
                                        className={cx('form-control')}
                                    />
                                </div>
                            </>
                        )}

                        <div className={cx('textVa')}>
                            <p>
                                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                                Facebook. Tìm hiểu thêm.
                            </p>
                            <p>
                                Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và
                                Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
                                hủy nhận bất kỳ lúc nào.
                            </p>
                        </div>
                        <div className={cx('btndk')}>
                            <button type="button" className={cx('dk')} onClick={handleRegiter}>
                                Đăng Kí
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;
