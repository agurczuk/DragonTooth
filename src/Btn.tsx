import React from 'react';

type Props = {
    text: string,
    onClick?: () => void,
    class?: string,
    style?: React.CSSProperties,
};

const Btn = (props: Props) =>{
    return <button className={props.class} style={props.style} onClick={props.onClick}>{props.text}</button>;
};

export default Btn;
