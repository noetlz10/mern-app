import React, {Component} from 'react';
import ToyService from './ToyService';

class AddToy extends Component {
    constructor(props) {
        super(props);
        this.state = {toy: ''};
        //this sends the new toy via axios to the server
        this.addToyService = new ToyService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({toy: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.addToyService.sendData(this.state.toy);
        this.props.history.push('/index'); 
    }

   
    render() {
        return (
            <div className = "container">
                <h2> Welcome to Add a Toy </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Toy:
                        <input type="text" value={this.state.toy} 
                        onChange={this.handleChange}
                        className="form-control" />
                    </label>
                        <input type = "submit" value="Submit" className="btn btn-primary"/>     
                </form>
            </div>    
        );
    }
}

export default AddToy;