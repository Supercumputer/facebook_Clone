import className from 'classnames/bind';
import styles from './Game.module.scss';
import DangPhatTrien from '../../Components/DangPhatTrien';
const cx = className.bind(styles);

function Game() {
    return ( 
        <>
            <DangPhatTrien />
        </>
     );
}

export default Game;