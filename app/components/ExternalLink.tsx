import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import styles from './ExternalLink.module.css';

interface ExternalLinkProps {
    href: string;
    text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            className={`w-30 p-1 pl-3 pr-2 py-2 text-md font-light rounded-3xl border border-gray-100 before:bg-gray-100 ${styles.linkContainer} overflow-hidden`}
        >
            <div className="flex justify-between items-center mix-blend-difference">
                <div>{text}</div>
                <MdArrowOutward size={25} className={`${styles.arrow} ml-3`} />
            </div>
        </Link>
    );
};

export default ExternalLink;
