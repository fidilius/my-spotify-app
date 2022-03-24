import './index.css'

const H2 = (props) => {
    return (
        <h2 className="h2">{props.text}</h2>
    );
};

const H3 = (props) => {
    return (
        <h3 className="h3">{props.text}</h3>
    );
};

export {H2, H3};