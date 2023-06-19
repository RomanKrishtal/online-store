import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addItems from "./contentSlice.jsx";

function Content() {
    const [fake, setFake] = useState([]);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.items)
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
        <>
        <h1>Content</h1>
        <div className="grid grid-cols-4">
            {fake.map((item) => {
                return(
                    <div key={item.id} className=" border-4 gap-0.5">
                        <h1>{item.title.toUpperCase()}</h1>
                        <span>{item.category}</span>
                        <img  src={item.image}/>
                        <p>Price: ${item.price}</p>
                        {/* <button onClick={() => dispatch(addItems(
                            cart, item
                        ))}>Add to cart</button> */}
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Content;