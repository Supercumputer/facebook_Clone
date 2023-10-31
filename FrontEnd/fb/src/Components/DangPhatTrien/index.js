import classNames from 'classnames/bind';
import styles from './Pt.module.scss';

const cx = classNames.bind(styles);

function DangPhatTrien() {
    return (
        <div className={cx('box')}>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>
                    Chức năng đang trong quá trình phát triển.
                    <br/>
                    Aww yeah, you successfully read this important alert message. This example text is going to run a
                    bit longer so that you can see how spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p class="mb-0">Thanks you very much</p>
            </div>
        </div>
    );
}

export default DangPhatTrien;
