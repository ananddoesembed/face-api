import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Something</h2>
                <li>
                    <Link to='/photo'>Photo input</Link>
                </li>
            </div>
        )
    }
}
