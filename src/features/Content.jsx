import axios from "axios";
import React, { useEffect, useState } from "react";

function Content() {

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