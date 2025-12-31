import React from 'react';

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
    return (
        <a 
            href="https://u24.gov.ua"
            target="_blank"
            rel="noopener noreferrer"
            title="Donate to support freedom."
            className={className}
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
                textDecoration: 'none',
                fontFamily: 'arial'
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
    );
};

export default SupportUkraineBanner;
