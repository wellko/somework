import React from 'react';
import {JokeMutation} from "../../../types";
import './JokesBlock.css'

interface Props {
    jokes: JokeMutation[]
}

const JokesBlock: React.FC<Props> = (props) => {
    const jokes = (props.jokes.map(item => (<div key={Math.random()}>
        <p className='block'> {item.value}</p>
    </div>)))

    return (
        <div>
            {jokes}
        </div>
    );
};

export default JokesBlock;