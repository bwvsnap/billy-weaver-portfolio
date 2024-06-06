import Link from 'next/link';
import styles from './Navbar.module.css';
import { MdArrowOutward } from 'react-icons/md';

interface NavLinkProps {
    text: string;
    href: string;
    delay: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ text, href, delay }) => {
    return (
        <Link href={href} className={styles.link}>
            <span
                className={`${styles.text} ${styles.originalText} ${
                    delay ? styles.originalTextOpened : ''
                }`}
            >
                {text}
            </span>
            <span
                className={`${styles.text} ${styles.clonedText} ${
                    delay ? styles.textDelay : ''
                } text-orange-500`}
            >
                {text}
            </span>
        </Link>
    );
};

export const ShopNavLink: React.FC<NavLinkProps> = ({ text, href, delay }) => {
    return (
        <Link href={href} className={styles.link}>
            <span
                className={`${styles.text} ${styles.originalText} ${
                    delay ? styles.originalTextOpened : ''
                }`}
            >
                {text}{' '}
                <span className="inline-block">
                    <MdArrowOutward />
                </span>
            </span>
            <span
                className={`${styles.text} ${styles.clonedText} ${
                    delay ? styles.textDelay : ''
                } text-green-500`}
            >
                {text}{' '}
                <span className="inline-block">
                    <MdArrowOutward />
                </span>
            </span>
        </Link>
    );
};
