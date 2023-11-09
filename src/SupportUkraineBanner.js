import React from 'react';
import './SupportUkraineBanner.css';

const SupportUkraineBanner = () => (
    <a
        className="support-ukraine"
        href="https://u24.gov.ua"
        target="_blank"
        rel="noopener noreferrer"
        title="Donate to support freedom."
    >
        <div className="support-ukraine__flag" role="img" aria-label="Flag of Ukraine">
            <div className="support-ukraine__flag__blue"></div>
            <div className="support-ukraine__flag__yellow"></div>
        </div>
        <div className="support-ukraine__label">
            Donate to support freedom.
        </div>
    </a>
);

export default SupportUkraineBanner;
