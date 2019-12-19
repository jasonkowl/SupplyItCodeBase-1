import React, {Component} from 'react';
import './mystyle.css';
import Form from "./forms/Form";

class GetStarted extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="get-started">
                <div className="container has-text-centered">
                    <div className="columns is-8 is-variable ">
                        <div className="column is-three-fifths has-text-left">
                            <h1 className="title is-2">LET'S GET STARTED</h1>
                            <hr/>
                            <p className="is-size-4">No credit apps, instant ordering</p>
                            <ul className="ticked-list">
                                <li>
                                    FREE to use
                                </li>
                                <li>
                                    Access to your favourite suppliers near your region
                                </li>
                                <li>
                                    Orders history, last order ready to submit
                                </li>
                            </ul>
                        </div>
                        <div className="column is-two-fifths has-text-left">
                            <h1 className="title is-2">JOIN US</h1>
                            <Form
                                formType={this.props.formType}
                                createMessage={this.props.createMessage}
                                loginUser={this.props.loginUser}
                                isAuthenticated={this.props.isAuthenticated}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default GetStarted;