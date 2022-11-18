import React from 'react';
import {Joke} from "../../types";


const JokesBlock: React.FC<Joke> = ({value}) => {
	return (
		<div>
			<p> {value}</p>
		</div>
	);
};

export default JokesBlock;