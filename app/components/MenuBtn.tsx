import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import styles from './MenuBtn.module.css';

interface MenuBtnProps {
    isOpen: boolean;
    onClick: () => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ isOpen, onClick }) => {
    return (
        <button
            className={`w-30 p-2 text-md font-medium rounded-3xl border border-gray-100 before:bg-gray-100 ${styles.linkContainer} overflow-hidden`}
            onClick={onClick}
        >
            <div className="flex justify-between items-center mix-blend-difference">
                {isOpen ? (
                    <HiOutlineX className="text-2xl md:text-3xl" size={25} />
                ) : (
                    <HiOutlineMenuAlt4
                        className="text-2xl md:text-3xl"
                        size={25}
                    />
                )}
            </div>
        </button>
    );
};

export default MenuBtn;
