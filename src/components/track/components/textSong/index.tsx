import * as React from 'react';
import './index.css';

const Title: React.FC<{text: string}> = ({text}) => {
    return (
        <h3 className="title">{text}</h3>
    );
};

const Artist: React.FC<{text: string}> = ({text}) => {
    return (
        <h4 className="artist">{text}</h4>
    );
};

export {Title, Artist};