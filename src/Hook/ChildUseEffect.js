import React, { useState, useEffect } from 'react'

export default function ChildUseEffect() {
    let [number, setNumber] = useState(1);
    console.log('render childuseeffect');
    useEffect(() => {
        //    Viet cho didupdate
        console.log('did update');
        return () => {
            console.log('will unmount');
        }
    }, [number])
    return (
        <div>
            <textarea></textarea>
            <button className="btn btn-primary">Gui</button>
        </div>
    )
}
