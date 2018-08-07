import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    constructor(props, context) {
        super(prompt, context);

        this.state = {
            value: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();

        const input = this.state;
        if (!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        this.setState({
            value: ''
        })

    }

    onInputChange(e){
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
                    <button className="add-btn" type="submit" value=""> add </button>
                </form>
            </div>
        );

    }

}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);