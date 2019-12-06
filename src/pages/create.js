import React from "react";

export default class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            quantity: 0,
            description: ''
        }
    }

    handleInput = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };

    submit = e => {

    };

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Entity</h3>
                <form>
                    <div className="form-group">
                        <label>Add Name:  </label>
                        <input onChange={this.handleInput}
                               value={this.state.name}
                               type="text"
                               name="name"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Quantity: </label>
                        <input onChange={this.handleInput}
                               value={this.state.quantity}
                               type="text"
                               name="quantity"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea onChange={this.handleInput}
                                  value={this.state.description}
                                  type="text"
                                  name="description"
                                  className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
