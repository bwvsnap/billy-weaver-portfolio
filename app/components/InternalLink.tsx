import { MdArrowForward } from 'react-icons/md';
import Link from 'next/link';
import styles from './InternalLink.module.css';

interface InternalLinkProps {
    href: string;
    text: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            className={`w-30 p-1 pl-3 pr-2 py-2 text-md font-medium rounded-3xl border border-gray-100 before:bg-gray-100 ${styles.linkContainer} overflow-hidden`}
        >
            <div className="flex justify-between items-center mix-blend-difference">
                <div>{text}</div>
                <div className="overflow-hidden  ml-3">
                    {' '}
                    <MdArrowForward size={25} className={`${styles.arrow}`} />
                </div>
            </div>
        </Link>
    );
};

export default InternalLink;
