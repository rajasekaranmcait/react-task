import React from 'react';
import { withRouter } from 'react-router-dom';
import menuData from '../menu-data.json';
import './../Components/styles.css';

const Home = (props) => {
    console.log('menuData->', menuData);
    const newArrayDataOfOjbect = Object.values(menuData);
    const onClickItem = (item) => {
        console.log(item.name, "is clicked");
        props.history.push({
            pathname: `/info/${item.itemId}`,
            search: '',
            state: { item: item }
        });
    }

    return (
        <div className="container">
            <div className="title"> Product Details </div>
            <div className="cardContainer">
                {newArrayDataOfOjbect.length && newArrayDataOfOjbect.map((item, index) => {
                    return (
                        <div className="cardSection" onClick={() => onClickItem(item)} key={index}>
                            <div className="cardData"><div className="cardLabel">Item Id</div> : {item.itemId}</div>
                            <div className="cardData"><div className="cardLabel">Name</div> : {item.name}</div>
                            <div className="cardData"><div className="cardLabel">Category</div> : {item.category}</div>
                            <div className="cardData"><div className="cardLabel">Price</div> : {item.price}</div>
                            <div className="cardData"><div className="cardLabel">Tax</div> : {item.tax}</div>
                            <div className="cardData"><div className="cardLabel">Available</div> : {item.available ? 'Yes' : 'No'}</div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default withRouter(Home);