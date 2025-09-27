import React from 'react';
// import Perkenalan from './components/Perkenalan';
import './App.css';
import CreateForm from './components/CreateForm';
import { useState } from 'react';

const App = () => {
    // 1. 
    // const datas = [
    //     { nama: 'John Doe', hobby: 'Coding'},
    //     { nama: 'Sutrisno', hobby: 'Mancing'},
    //     { nama: 'Sukirman', hobby: 'Baca Novel'}
    // ]

    // const [counter, setCounter] = useState(0);
    // // let counter = 0;
    // const decrementCounter = () => {
    //     // counter = counter - 1;
    //     setCounter(counter - 1);
    // }
    // const incrementCounter = () => {
    //     // counter = counter + 1;
    //     setCounter(counter + 1);
    // }

    // let info;
    // if(counter % 2 === 0) {
    //     info = 'genap';
    // } else {
    //     info = 'ganjil';
    // }
    // return (
    //     // <div>
    //     //     {datas.map((data, index)  => {
    //         //         return <Perkenalan key={index} nama={data.nama} hobby={data.hobby} />
    //         //     })}
    //         // </div>
    //     <div>
    //         <button onClick={decrementCounter}>-</button>
    //         <div>{counter}</div>
    //         <button onClick={incrementCounter}>+</button>
    //         {/* <div>{info}</div> */}

    //         {/* <div className={`${counter % 2 === 0 ? 'red' : 'blue'}`}>
    //             {counter % 2 === 0 ? 'Genap' : 'Ganjil'}
    //         </div> */}

    //         <div className={`${counter % 2 === 0 ? 'red' : 'blue'}`}>
    //             {counter > 10 && <div>Perfecto</div>}
    //         </div>

    //         {/* {counter > 10 || <h2>Perfecto</h2>} */}

    //         {/* {counter % 2 === 0 ? <div>genap</div> : <div>ganjil</div>} */}
    //     </div>
    // )

    // 2.
    const [nama, setNama] = useState('')
    const onCreate = (data) => {
        console.log("Ini console dari parent component", data)
        setNama(data.nama)
    }

    return (
        <>
            {nama}
            <CreateForm onCreate={onCreate}/>
        </>
    )
};

export default App;