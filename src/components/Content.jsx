import React,{Component} from 'react';

class Content extends Component {
     constructor(props) {
         super(props)
     }

     render() {
         return <React.Fragment>
            <br/>
            <div class="card">
                <div class="card-header bg-info text-white">Create</div>
                <div class="card-body">Basic card</div>
            </div><br/>
            <div class="card ">
                <div class="card-header bg-info text-white">List</div>
                <div class="card-body">Basic card</div>
            </div>
             
         </React.Fragment>
     }
}

export default Content;