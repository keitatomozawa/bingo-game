import React from 'react';

export const MyButton = () => {
    return (
        <button className='timer-button' type='button' name='button' onClick={this.props.handleClick}>{this.props.text}</button>
    )
};