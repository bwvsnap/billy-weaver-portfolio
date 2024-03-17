import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavLinkProps {
    text: string;
    href: string;
    delay: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, delay }) => {
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

export default NavLink;
