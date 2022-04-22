import * as React from "react";

interface IAlbumImageProps {
    src: string;
    alt: string;
}

const AlbumImage: React.FC<IAlbumImageProps> = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} />
    );
}

export default AlbumImage;