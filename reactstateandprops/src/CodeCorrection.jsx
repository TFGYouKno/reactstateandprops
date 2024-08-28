import { Component } from "react";

class UserProfile extends Component {
    constructor() {
        super();
        this.state = { name: 'Harrison' };
        this.changeName =  this.changeName.bind(this)
    }

    // Function should be setState instead of this.state.name
    changeName() {
        this.setState({name: 'Harry'});
    }

    render() {
        const name = this.state.name;
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}


export default UserProfile