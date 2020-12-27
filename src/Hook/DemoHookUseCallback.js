import React,{useState,useCallback} from 'react'
import ChildUseCallback from './ChildUseCallback'

export default function DemoHookUseCallback(props) {
    let [like,setLike]=useState(1)
    let handleLike=()=>{
        setLike(
           like+1
        )
    }
    const renderNotify=()=>{
        return `Ban da tha ${like}`
    }
    /**
     * useCallback la mot hook tra ve function co chua 2 tham so , tham so dau tien la ham minh khong muon thay 
     doi , tham so thu hai minh se truyen vao gia tri muon thay doi , neu gia tri thay doi thi tham so thu nhat
     la ham se thay doi
     */
    const callBackRenderNotify=useCallback(renderNotify,[like])
    return (
        <div className="container text-left">
            Like:{like}
            <br/>
            <span type="button" style={{cursor:'pointer',color:'red',fontSize:35}}
            onClick={()=>{
                handleLike()
            }}>click</span>
         
            <ChildUseCallback  renderNotify={callBackRenderNotify}></ChildUseCallback>
        </div>
    )
}

