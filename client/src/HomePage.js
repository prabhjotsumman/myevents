import  React, { Component } from 'react';
import { Link } from "react-router-dom";

class Homepage extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Hi There!
                    <ul>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </header>
            </div>
        );
    };
}
export default Homepage;