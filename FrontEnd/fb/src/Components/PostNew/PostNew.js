import classNames from 'classnames/bind';
import styles from './PostNew.module.scss';
import Img from '../Img/Img';
import UserName from '../UserName/UserName';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UseContext/LoginContext';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { postApi } from '../../Api/service';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function PostNew() {
    const { user } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [title, setTitle] = useState('');
    const [linkImg, setLinkImg] = useState('');

    useEffect(() => {
        return () => selectedImage && URL.revokeObjectURL(selectedImage.preview);
    }, [selectedImage]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file.preview);
        setSelectedImage(file);
    };

    // const handlePostApi = async () => {
    //     try {
    //         if (title || linkImg) {
    //             let res = await postApi(user.id, title, linkImg);
    //             if (res && res.data) {
    //                 toast.success(res.data.messenger)
    //                 handleClose()
    //             }
    //         } else {
    //             toast.warning('Bạn phải nhập vào title hoặc link ảnh !!!');
    //         }
    //     } catch (error) {
    //         toast.error('Lỗi gọi Api post');
    //     }
    // };
    const handlePostApi = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', selectedImage);

        // Gửi formData đến máy chủ
        if (title || selectedImage) {
            let res = await postApi(user.id, formData);
            if (res && res.data) {
                toast.success(res.data.messenger);
                handleClose();
            }
        } else {
            toast.warning('Bạn phải nhập vào title hoặc link ảnh !!!');
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={cx('PostBox')}>
                <div className={cx('PostTop')}>
                    <div className={cx('userAvata')}>
                        <Img src={user.avata} alt="" className={cx('setImg')} />
                    </div>
                    <div className={cx('InputBox')}>
                        <input
                            type="text"
                            placeholder={`${user.firstName} ơi, bạn đang nghĩ gì thế?`}
                            onClick={handleShow}
                        />
                    </div>
                </div>
                <div className={cx('PostButton')}>
                    <UserName icon={<i className="fa-solid fa-video"></i>} firstName={'Video trực tiếp'} />
                    <UserName icon={<i className="fa-solid fa-video"></i>} firstName={'Ảnh/video'} />
                    <UserName icon={<i className="fa-solid fa-video"></i>} firstName={'Cảm xúc/hoạt động'} />
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="text-center">
                    <Modal.Title>Tạo bài viết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className={cx('PostTops')}>
                            <div className={cx('userAvata')}>
                                <Img src={user.avata} alt="" className={cx('setImg')} />
                            </div>
                            <div className={cx('userName')}>
                                <h2 className={cx('textName')}>{user.name}</h2>
                                <p className={cx('title')}>gearvn.com</p>
                            </div>
                        </div>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                autoFocus
                                as="textarea"
                                rows={2}
                                placeholder={`${user.firstName} ơi, bạn đang nghỉ gì thế ?`}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Link img</Form.Label>
                            <Form.Control
                                type="text"
                                value={linkImg}
                                placeholder="Nhập vào link ảnh !!!"
                                onChange={(e) => setLinkImg(e.target.value)}
                            />
                        </Form.Group>
                        <div className={cx('hhh')}>
                            {selectedImage && <Img src={selectedImage.preview} alt={''} className={cx('setImgs')} />}
                        </div>

                        <div className={cx('PostButton')}>
                            <input
                                id="fileInput"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="fileInput" className={cx('bomx')}>
                                <i className="fa-solid fa-image"></i>
                                <span>Đăng Ảnh</span>
                            </label>
                            <div className={cx('bomx')}>
                                <i className="fa-solid fa-user"></i>
                                <span>Gắn thẻ người khác</span>
                            </div>
                            <div className={cx('bomx')}>
                                <i className="fa-solid fa-face-smile"></i>
                                <span>Cảm xúc</span>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <div className={cx('fotbot')}>
                    <p className={cx('texc', { ox: title || linkImg ? true : false })} onClick={handlePostApi}>
                        Đăng
                    </p>
                </div>
            </Modal>
        </>
    );
}

export default PostNew;
