import Link from 'next/link';
import { FC } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import styles from './BackToTop.module.css';

const BackToTop: FC = () => {
    const scrollToTop = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Link href="#top" onClick={scrollToTop} className={styles.backToTop}>
            Back to top
            <MdArrowUpward className={styles.arrowIcon} />
        </Link>
    );
};

export default BackToTop;
