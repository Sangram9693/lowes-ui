import React,{Component} from 'react';
import axios from 'axios';
import constants from "../constants";

const hide = {
    display: 'none'
}

const show = {
    display: 'block'
}

class Content extends Component {
     constructor(props) {
         super(props);

         this.state = {
             list: [],
             urlField: '',
             isValidUrl: true,
             isSave: true,
             savedInfo: ''
         }
     }

     componentDidMount() {
         this.loadTableData();
     }

     loadTableData() {
        axios.get(constants.LIST).then(
            (resp) => {
                this.setState({
                    list: resp.data
                })
            },
            (error) => {
                console.log(error);
            }
        )
     }

     fieldChange(event) {
        this.setState({
            urlField: event.target.value
        })
     }

     save() {
         let regxUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
         if(this.state.urlField.trim().length > 0 && regxUrl.test(this.state.urlField.trim())) {
            this.setState({
                isValidUrl: true
            });
            this.saveData(this.state.urlField.trim())
         } else {
            this.setState({
                isValidUrl: false
            })
         }
     }

     saveData(val) {
         let data = {
            originalUrl: val
         }

        axios.post(constants.CREATE, data).then(
            (resp) => {
               this.setState({
                isSave: true,
                urlField: '',
                savedInfo: resp.data
               });
               this.loadTableData();
            },
            (error) => {
                console.log(error);
                this.setState({
                    isSave: false
                })
            }
        )
     }

     copyText(shortUrlCode) {

     }

     render() {
         return <React.Fragment>
            <br/>
            <div className="card border-warning">
                <div className="card-header bg-info text-white">Create</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" id="url" aria-describedby="url" placeholder="Enter URL" value={this.state.urlField} onChange={(e)=>this.fieldChange(e)}/>
                        <small className="form-text text-danger" style={this.state.isValidUrl ? hide : show}>Invalid URL, Please enter valid URL.</small>
                        <small className="form-text text-danger" style={this.state.isSave ? hide : show}>Something Went Wrong</small>
                    </div>
                    <button className="btn btn-primary" onClick={()=>this.save()}>Submit</button>
                    <div style={this.state.savedInfo.shortUrlCode && this.state.savedInfo.shortUrlCode.length>0 ? show : hide}>
                        <br/>
                        <div class="alert alert-success" role="alert">
                            Short URL: {window.location.href + this.state.savedInfo.shortUrlCode}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div><br/>
            <div className="card border-warning">
                <div className="card-header bg-info text-white">List</div>
                <div className="card-body">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Short URL</th>
                                <th scope="col">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((val, key) => {
                                    return <tr key={key}>
                                        <th scope="row">{key+1}</th>
                                        <td>{window.location.href + val.shortUrlCode} <a href="javascript:void(0);" onClick={() => {navigator.clipboard.writeText(window.location.href + val.shortUrlCode)}}><i class="fa fa-copy"></i></a></td>
                                        <td>{val.count}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
         </React.Fragment>
     }
}

export default Content;