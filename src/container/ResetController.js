import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../actions'

let ResetController = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(resetGame(input.value));
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Reset</button>
            </form>
        </div>
    )
}
ResetController = connect()(ResetController)

export default ResetController