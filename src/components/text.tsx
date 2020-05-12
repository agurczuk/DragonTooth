import React from 'react';

type Props = {
    value: string,
    onChange: (val: string) => void,
}

const Text = (props: Props) => {
    return <input onChange={e => props.onChange(e.target.value)} value={props.value} />;
};

export default Text;
