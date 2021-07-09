import React,{Component} from 'react';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title">404</h1>
                    <p className="card-text">Page Not Found</p>
                </div>
            </div>
        </React.Fragment>
    }
} 

export default NotFound;