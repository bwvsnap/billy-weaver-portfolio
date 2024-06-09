import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styles from './UnderlineLink.module.css';

interface AnimatedLinkProps {
    href: string;
    children: ReactNode;
}

const UnderlineLink: FC<AnimatedLinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className={styles.animatedLink}>
            {children}
        </Link>
    );
};

export default UnderlineLink;
