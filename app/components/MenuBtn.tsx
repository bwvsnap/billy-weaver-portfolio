import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import styles from './Button.module.css';

interface MenuBtnProps {
    isOpen: boolean;
    onClick: () => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ isOpen, onClick }) => {
    return (
        <button onClick={onClick}>
            <div
                className={`w-30 p-2  rounded-full border border-gray-100 before:bg-gray-100 ${styles.btnContents} overflow-hidden`}
            >
                <div className="flex justify-between items-center mix-blend-difference">
                    {isOpen ? (
                        <HiOutlineX className="text-3xl" />
                    ) : (
                        <HiOutlineMenuAlt4 className="text-3xl" />
                    )}
                </div>
            </div>
        </button>
    );
};

export default MenuBtn;
