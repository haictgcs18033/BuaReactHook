import React, { useState } from 'react'

export default function DemoHookUseState(props) {
    //this.state={}<=>useState({}) trong function component
    //this.setState(newState)
    //tupple
    let [state, setState] = useState({ like: 0 })
    //Khai bao ham
    const handleLike=()=>{
        //Lay like tang len 1 va setState
        setState({
            like: state.like + 1
        }) 
        console.log(state);
    }
    return (
        <div className="container">
            <div className="card text-left w-25">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p className="card-text" style={{ color: 'red' }}>{state.like} ♥♥♥</p>
                </div>
                <button className="btn btn-danger" onClick={handleLike}>Click here</button>
            </div>

        </div>
    )
}
// setState({ like: state.like + 1 })