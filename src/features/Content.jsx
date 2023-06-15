import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "./contentSlice.jsx";

function Content() {
    const [fake, setFake] = useState([]);
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    useEffect(() => {
// axios.get('https://fakestoreapi.com/products').then(({data}) => {
//     console.log(data)
// })

const fakestore = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    setFake(jsonData)
}
fakestore();
// dispatch(getItems())
    }, [])

    // console.log(fake)
    return(
        <div onLoad={() => useDispatch(addItems(items, fake))}>
            <h1>Content</h1>
            {fake.map((item) => {
                return(
                    <div key={item.id}>
                        <h1>{item.title.toUpperCase()}</h1>
                        <span>{item.category}</span>
                        <img  src={item.image}/>
                        <p>Price: ${item.price}
                        </p>
                    </div>
                )
            })}
            {/* {items.map(item => {
                return(
                <div key={item.id}>
                    <h1>{item.title.toUpperCase()}</h1>
                    <span>{item.category}</span>
                    <img  src={item.image}/>
                    <p>Price: ${item.price}</p>
                    </div>
                    )
            })} */}
        </div>
    )
}

export default Content;