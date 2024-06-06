import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import styles from './ExternalLink.module.css';

interface ExternalLinkProps {
    href: string;
    text: string;
    large: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text, large }) => {
    return (
        <Link className={styles.link} href={href}>
            <div
                className={`p-1 pl-2 md:pl-3 md:pr-2 md:py-2 font-light rounded-full border border-gray-100 before:bg-gray-100 ${
                    styles.linkContents
                } overflow-hidden ${
                    large ? 'text-base md:text-xl' : 'text-xs md:text-lg'
                }`}
            >
                <div className="flex justify-between items-center mix-blend-difference text-gray-100">
                    <p>{text}</p>
                    <MdArrowOutward
                        className={`${styles.arrow} ml-1 md:ml-3 ${
                            large
                                ? 'text-xl md:text-4xl'
                                : 'text-lg md:text-3xl'
                        }`}
                    />
                </div>
            </div>
        </Link>
    );
};

export default ExternalLink;
