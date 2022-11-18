import React from 'react';
import {MovieForList} from "../../types";


class MovieList extends React.Component<MovieForList> {
	shouldComponentUpdate(nextProps: Readonly<MovieForList>): boolean {
		return this.props.name !== nextProps.name;
	}

	render() {
		return (
			<div className='watch-list'>
				<input type='text' value={this.props.name} onChange={e => this.props.inputOnChange(e)}></input>
				<span>#{this.props.index}</span>
			</div>
		);
	}
}

export default MovieList;