import React, {useState} from 'react'

import Post from '../Post/Post';
import './style.css'
const TestApi = () => {
    const [bool, setBool] = useState(false);
  return (
    <>
        <header className = "header">
            <nav className = "nav-bar">
                <h2 className = "heading">
                    Mihir API Fetch
                </h2>
                <ul className = "nav-link">
                    <li>
                        <button onClick = {(setPrevState) => setBool(!bool) }>{ bool ? "Hide Data" : "Show Data"}</button>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            { bool ? <Post /> : "no data"}
        </main>
    </>
  )
}

export default TestApi