import './index.css'

const Title = (props) => {
    return (
        <h2 className="title">{props.text}</h2>
    );
};

const Artist = (props) => {
    return (
        <h3 className="artist">{props.text}</h3>
    );
};

export {Title, Artist};