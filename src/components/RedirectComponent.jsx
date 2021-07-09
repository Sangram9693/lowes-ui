import React,{Component} from 'react';
import axios from 'axios';
import constants from "../constants";

class RedirectComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.put(constants.HOST + this.props.match.params.code).then(
            (resp) => {
                console.log(resp)
                if(resp.data) {
                    window.location.replace(resp.data);
                } else {
                    window.location.replace('http://localhost:3000/404');
                }
                
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        return <React.Fragment>

        </React.Fragment>
    }
} 

export default RedirectComponent;