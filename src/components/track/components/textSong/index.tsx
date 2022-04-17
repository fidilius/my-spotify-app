import * as React from 'react';
import './index.css';

const Title: React.FC<{text: string}> = ({text}) => {
    return (
        <h2 className="title">{text}</h2>
    );
};

const Artist: React.FC<{text: string}> = ({text}) => {
    return (
        <h3 className="artist">{text}</h3>
    );
};

export {Title, Artist};