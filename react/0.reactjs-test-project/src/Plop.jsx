import React, { Component } from 'react';

class Plop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: 'Initial data...'
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({ msg: e.target.value });
    }

    render() {
        let plopContainerStyle = {
            backgroundColor: '#118899',
            color: '#fff',
            flex: 1
        }
        return (
            <div style={plopContainerStyle}>
                <input type="text" value={this.state.msg}
                    onChange={this.updateState} />
                <p>Plop message: {this.state.msg}</p>

                <PlopContent myDataProp={this.state.msg} updateStateProp={this.updateState} />
            </div>
        );
    }
}

class PlopContent extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <p>Plop containing: {this.props.myDataProp}</p>
            </div>
        );
    }
}

export default Plop;