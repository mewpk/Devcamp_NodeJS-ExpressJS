import React from 'react'
import axios from 'axios'

export default function Layout() {

    axios.get('http://localhost:3000/api/users').then((response) => {
        const aUser = response.data.data;
        let str = '';
        for (let i = 0; i < aUser.length; i++) {
            str += `
            <div class="col">
                <span class='bold'>${aUser[i].first_name}</span><br>
                ${aUser[i].email}<br>
                <img src='${aUser[i].avatar}'>
            </div>
            `;
            console.log(str)
        }
        document.getElementById('content').innerHTML = str;

    })

    return (
        <div className="container">
            <div className="row" id="content">
                <div className="col">
                    Column 1
                </div>
            </div>
        </div>


    )
}
