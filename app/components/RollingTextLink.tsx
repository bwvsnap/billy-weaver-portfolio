import Link from 'next/link';
import styles from './RollingTextLink.module.css';

interface RollingTextLinkProps {
    text: string;
    href: string;
}

const RollingTextLink: React.FC<RollingTextLinkProps> = ({ text, href }) => {
    return (
        <Link href={href} className={styles.link}>
            <span className={`${styles.text} ${styles.originalText}`}>
                {text}
            </span>
            <span
                className={`${styles.text} ${styles.clonedText} text-orange-500`}
            >
                {text}
            </span>
        </Link>
    );
};

export default RollingTextLink;
