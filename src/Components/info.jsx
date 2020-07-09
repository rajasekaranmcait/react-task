import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../Components/styles.css';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: ''
        };
    }

    componentDidMount() {
        if (this.props && this.props.location && this.props.location.state && this.props.location.state.item) {
            console.log('selected item->', this.props.location.state.item);
            this.setState({
                item: this.props.location.state.item,
                price: this.props.location.state.item.price
            });
        }
    }

    onClickEdit = (item) => {
        if (item === 'price') {
            document.getElementById("price").disabled = false;
        }
    }

    onChangeHandler = (e) => {
        const { value } = e.target;
        this.setState({ price: value });
        console.log('Editing price value: ', value);
    }

    onFocusOutField = (e, from) => {
        if (from === 'price') {
            document.getElementById("price").disabled = true;
            const { value } = e.target;
            console.log('Edited price value: ', value);
        }
    }

    radioButtonClickHandler = (e) => {
        const { value } = e.target;
        console.log('Edited Availability value: ', value);

    }

    render() {
        let { item, price } = this.state;
        return (
            <div className="container">
                <Link to='/' className="backBtn">Go Back</Link>
                <div className="title"> Item Details </div>
                {item && <div className="itemContainer">
                    <div className="cardImageSection">
                        <img src={item.imageUrl} alt='card-img' title='card-img' />
                    </div>
                </div>}
                {item && <div className="itemContainer">
                    <div className="cardItemSection">
                        <div className="cardData"><div className="cardLabel">Item Id</div> : {item.itemId}</div>
                        <div className="cardData"><div className="cardLabel">Name</div> : {item.name}</div>
                        <div className="cardData"><div className="cardLabel">Category</div> : {item.category}</div>
                        <div className="cardData"><div className="cardLabel">Tax</div> : {item.tax}</div>
                        <div className="cardData"><div className="cardLabel">Price</div> :
                            <input
                                className="priceInputField"
                                type="text"
                                id="price"
                                name="price"
                                defaultValue={item.price}
                                disabled
                                value={price}
                                onChange={(e) => this.onChangeHandler(e)}
                                onBlur={(e) => this.onFocusOutField(e, 'price')}
                            />
                            <i className="fa fa-edit" onClick={() => this.onClickEdit('price')} />
                        </div>
                        <div className="cardData"><div className="cardLabel">Available</div> :
                            <div className="availability">
                                <input
                                    type="radio"
                                    id="yes"
                                    name="availability"
                                    value="Yes"
                                    checked={item.available ? item.available : false}
                                    onClick={(e) => this.radioButtonClickHandler(e)}
                                />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div className="availability">
                                <input
                                    type="radio"
                                    id="no"
                                    name="availability"
                                    value="No"
                                    onClick={(e) => this.radioButtonClickHandler(e)}
                                />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Info;