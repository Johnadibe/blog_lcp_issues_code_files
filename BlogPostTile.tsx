import React from 'react';
import './css/BlogPostTile.css'
import Button from '@mui/material/Button';
import { color } from '@mui/system';

interface Props {
    title: string;
    bgColor: string;
    titleFontColor?: string;
    onClick: () => void;
}

const BlogPostTile: React.FC<Props> = ({ title, bgColor, titleFontColor, onClick }) => {
    /**
     * Handles click events on both the tile and the button.
     * 
     * This function serves two purposes:
     * 1. It stops event propagation to prevent the click event from bubbling up.
     *    This is necessary because both the tile and the button have click handlers,
     *    and we want to avoid triggering the parent's click event when the button is clicked.
     * When events bubble up e.g. a click event, the ancestor elements will also be deemed to have been clicked (which makes sense), but this could lead to multiple click events being triggered which might not be the desired behavior.
     * 
     * 2. It calls the `onClick` prop function provided by the parent component.
     *    This allows the parent to define the behavior that should occur on click.
     * 
     * @param {React.MouseEvent<HTMLDivElement | HTMLButtonElement>} e - The click event object.
     *        It can be from either the div (tile) or the button, hence the union type.
     */
    const handleClick = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.stopPropagation();
        onClick();
    };

    const buttonStyle = {
        backgroundColor: bgColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor: 'white',
        marginLeft: '10px',
        border: '5px solid'
    };

    const divStyle = {
        backgroundColor: bgColor,
        color: titleFontColor ? titleFontColor : 'white',
    };

    return (
        <div className="blog-post-tile" style={divStyle} onClick={handleClick}>
            {title}
            <Button
                variant="contained"
                color="primary"
                className="read-blog-post-button"
                onClick={handleClick}
                sx={buttonStyle}
            >
                Read
            </Button>
        </div>
    );
};

export default BlogPostTile;