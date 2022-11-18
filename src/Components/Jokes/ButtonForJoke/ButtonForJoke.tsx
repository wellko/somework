import React, {Component} from 'react';
import './ButtonForJoke.css'

interface props {
    onClick: React.MouseEventHandler
}

class ButtonForJoke extends Component<props> {
    componentDidUpdate() {
        return false
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.props.onClick} className='add_btn'>Add new Joke</button>
            </div>
        );
    }
}

export default ButtonForJoke;