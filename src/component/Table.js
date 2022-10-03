import React from 'react'
import { useState } from 'react';
const Table = () => {
    const [number, setNumber] = useState();
    const getNumber = (e) => {
        setNumber(e.target.value)
    }
    const showTable = () => {
        for (let i = 1; i <= 10; i++) {
            document.write(i * number + "<br>")
        }
    }
    return (
        <div>
            <h1>Table</h1>
            <input value={number} onChange={getNumber} />
            <button onClick={showTable}>Click</button>
        </div>
    )
}
export default Table