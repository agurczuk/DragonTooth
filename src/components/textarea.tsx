import React from 'react';

type Props = {
    value: string,
    onChange: (val: string) => void,
}

const TextArea = (props: Props) => {
    return <textarea onChange={e => props.onChange(e.target.value)} value={props.value}>
    </textarea>;
};

export default TextArea;
