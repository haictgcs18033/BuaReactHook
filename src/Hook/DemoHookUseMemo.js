import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo'

export default function DemoHookUseMemo(props) {
    let [ like, setLike ] = useState(1);
    let cart=[
       {id:1,name:'iphone',price:1000},
       {id:2,name:'samsung',price:2000},
       {id:3,name:'oppo',price:3000}
    ]
    /**Hook memo co tac dung tuong tu nhu useCallBack co tac dung luu giu lai nhung gia tri ma minh khong muon
    thay doi tuy nhien khi khai bao khong khai bao 2 tham so truc tiep ma phai 
    khai bao ham callback roi moi khai bao 2 tham so (Luu y : tham so dau tien la mot gia tri khong 
        phai la function ,con tham so thu hai thi tuong tu nhu hook callback dung de chua nhung gia tri nao
        trong state ma minh muon thay doi se dan toi viec render lai ca component cha va con )   */
    const cartMemo=useMemo(()=>cart,[like]);
    let handleLike = () => {
        setLike(like + 1)
    }
    return (
        <div className="container text-left">
            like: {like}
            <br />
            <button className="btn btn-primary"
                onClick={() => { handleLike() }}>Like</button>
            <ChildUseMemo cart={cartMemo}></ChildUseMemo>
        </div>
    )
}
