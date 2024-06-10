import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import styles from './UnderlineLink.module.css';

interface AnimatedLinkProps {
    href: string;
    children: ReactNode;
}

const UnderlineLink: FC<AnimatedLinkProps> = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${styles.animatedLink} ${
                isActive ? styles.animatedLinkActive : ''
            }`}
        >
            {children}
        </Link>
    );
};

export default UnderlineLink;
