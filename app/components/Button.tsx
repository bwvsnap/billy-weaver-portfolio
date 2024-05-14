import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            <div
                className={`py-2 px-3 text-xs md:text-base font-light rounded-3xl border border-gray-100 before:bg-gray-100 ${styles.btnContents} overflow-hidden`}
            >
                <div className="flex justify-between text-center items-center mix-blend-difference">
                    {text}
                </div>
            </div>
        </button>
    );
};

export const LargeButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            <div
                className={` py-2 px-4 md:py-3 md:px-5 text-base md:text-xl font-light rounded-[3rem] border border-gray-100 before:bg-gray-100 ${styles.btnContents} overflow-hidden`}
            >
                <p className="flex w-full justify-center text-center items-center mix-blend-difference">
                    {text}
                </p>
            </div>
        </button>
    );
};
