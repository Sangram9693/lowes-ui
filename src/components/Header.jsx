import React,{Component} from 'react';

class Header extends Component {
     constructor(props) {
         super(props)
     }

     render() {
         return <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-info navbar-info">
                <a className="navbar-brand" href="#">
                    <img src="http://localhost:3000/logo.jpg" alt="lowes-white-logo" style={{width: '20%'}}/>
                </a>
            </nav>
         </React.Fragment>
     }
}

export default Header;