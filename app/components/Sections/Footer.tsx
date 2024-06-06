import React from 'react';
import InternalLink from '../InternalLink'; // Ensure this is the correct path to your InternalLink component
// import ExternalLink from './ExternalLink'; // Uncomment if you have this component

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center space-y-20">
            <h3 className="font-monument text-center font-bold text-2xl md:text-7xl w-1/2">
                LET&apos;S WORK TOGETHER
            </h3>
            <div className="flex flex-row">
                {/* Uncomment these if you have ExternalLink component */}
                {/* <ExternalLink
                    href={'mailto:rorythomas511@gmail.com'}
                    text={'hello@billyweaver.co.uk'}
                />
                <ExternalLink
                    href={'tel:+447123456789'}
                    text={'+44 71234 56789'}
                /> */}
                <InternalLink
                    href={'/contact'}
                    text={'Get In Touch'}
                    large={true}
                />
            </div>
        </div>
    );
};

export default Footer;
