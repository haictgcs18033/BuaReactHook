import React, { useState, useEffect } from 'react'
import ChildUseEffect from './ChildUseEffect';

export default function DemoUseEffect() {
    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);
    console.log(like);
    //useEffect la ham chay sau khi giao dien render thay cho didupdate va didmount trong moi truong hop
    // useEffect(() => {
    //     console.log('didmount');
    //     console.log('didupdate');
    // })

    //Cach viet thay the cho component didmount
    useEffect(() => {
        console.log('didmount');
    }, [])
    //Cach viet thay the component didupdate
    useEffect(() => {
        console.log('didmount sau khi thay doi')
    }, [number,like])//number la gia tri thay doi sau render thi useEffect nay se chay
    console.log('render');
    const handleIncrease = () => {
        setNumber(number + 1)
    }
    const handleDecrease = () => {
        setNumber(number - 1)
    }
    const increase = () => {
        setLike(like + 1)
    }
    return (
        
        <div className="container">
            <div className="mt-3">
                <p>{like}</p>
                <button className="btn btn-success" onClick={increase}>Like</button>
                <button className="btn btn-primary" onClick={handleIncrease}>+</button>
                <p className="px-5 text-danger">{number}</p>
                <button className="btn btn-primary" onClick={handleDecrease}>-</button>
            </div>
            {like===1? <ChildUseEffect></ChildUseEffect>:''}
        </div>
    )
}
