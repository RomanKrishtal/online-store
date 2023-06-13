import axios from "axios";
import React, { useEffect, useState } from "react";

function Content() {
    const options = {
        method: 'GET',
        url: 'https://shopify-fast-scraper.p.rapidapi.com/product',
        params: {
          url: 'https://shop.flipperzero.one/collections/all/products/flipper-zero'
        },
        headers: {
          'X-RapidAPI-Key': '29b81b1274msh393d32133b6b6e1p1bf747jsn5a615c5de96a',
          'X-RapidAPI-Host': 'shopify-fast-scraper.p.rapidapi.com'
        }
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
    return(
        <div>
            <h1>Content</h1>
        </div>
    )
}

export default Content;