import React, { useState } from 'react';

type SupportUkraineBannerProps = {
    className?: string;
    flagClassName?: string;
    textClassName?: string;
};

const SupportUkraineBanner: React.FC<SupportUkraineBannerProps> = ({
    className,
    flagClassName,
    textClassName
}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocusCapture={() => setIsHover(true)}
            onBlurCapture={() => setIsHover(false)}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                padding: '5px',
                zIndex: 10000,
                fontFamily: 'arial'
            }}
        >
            <a
                href="https://u24.gov.ua"
                target="_blank"
                rel="noopener noreferrer"
                title="Donate to support freedom."
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none'
                }}
            >
                <div
                    role="img"
                    aria-label="Flag of Ukraine"
                    className={flagClassName}
                    style={{ height: '25px', marginRight: '10px' }}
                >
                    <div style={{ width: '40px', height: '12.5px', background: '#005BBB' }}></div>
                    <div style={{ width: '40px', height: '12.5px', background: '#FFD500' }}></div>
                </div>
                <div className={textClassName} style={{ color: 'white', fontSize: '12px', lineHeight: '25px' }}>
                    Donate to support freedom.
                </div>
            </a>

            <a
                href="https://www.npmjs.com/package/react-support-ukraine-banner"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the same banner on npm"
                title="Get the same: react-support-ukraine-banner"
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: 0,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    lineHeight: '25px',
                    color: isHover ? '#fff' : '#000', // black-on-black until banner hover/focus
                    transition: 'color 150ms ease',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}
            >
                Get the same
            </a>
        </div>
    );
};

export default SupportUkraineBanner;
