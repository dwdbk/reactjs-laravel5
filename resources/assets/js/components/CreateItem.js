import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', productPrice: ''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e) {
        this.setState({
            productName: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            productPrice: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let token = document.head.querySelector('meta[name="csrf-token"]');
        const products = {
            name: this.state.productName,
            price: this.state.productPrice,
            _token: token.content
        }
        let uri = 'http://localhost:8000/api/items';
        axios.post(uri, products).then((response) => {
            console.log(response);
            browserHistory.push('/display-item');
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" onChange={this.handleChange1}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateItem;

CreateItem.propTypes = {
    name : React.PropTypes.string,
    price : React.PropTypes.number,
    children : React.PropTypes.element.isRequired
};