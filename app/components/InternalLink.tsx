import { MdArrowForward } from 'react-icons/md';
import Link from 'next/link';
import styles from './InternalLink.module.css';

interface InternalLinkProps {
    href: string;
    text: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({ href, text }) => {
    return (
        <Link href={href} className={styles.link}>
            <div
                className={`p-1 pl-2 md:pl-3 md:pr-2  md:py-2 text-xs md:text-base font-light rounded-3xl border border-gray-100 before:bg-gray-100 ${styles.linkContents} overflow-hidden`}
            >
                <div className="flex justify-between items-center mix-blend-difference text-gray-100">
                    <p>{text}</p>
                    <div className="overflow-hidden">
                        {' '}
                        <MdArrowForward
                            className={`${styles.arrow} ml-1 md:ml-3 text-[25] text-lg md:text-2xl`}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InternalLink;
