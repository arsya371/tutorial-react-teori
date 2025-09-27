import React from 'react';

const Perkenalan = (props) => {
    const handleClick = (nama) => {
        alert('click ' + nama)
    }
    return (
        <div>
            <div>Nama saya adalah {props.nama}</div>
            <div>Hobby sasya bermain {props.hobby}</div>
            {/* <button onClick={() => handleClick(props.nama)}>Klik ini</button> */}
            <button onClick={() => {handleClick(props.nama)}}>Klik ini</button>
            {/* <button onClick={function () {
                handleClick(props.nama)
            }}>Klik ini</button> */}

        </div>
    )
}

export default Perkenalan;