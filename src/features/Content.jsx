import axios from "axios";
import React, { useEffect, useState } from "react";

function Content() {
    const [fake, setFake] = useState([]);
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
    }, [])


    console.log(fake)
    return(
        <div>
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
        </div>
    )
}

export default Content;