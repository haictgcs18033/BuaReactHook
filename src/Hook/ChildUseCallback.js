import React,{memo} from 'react'
/**Su dung memo khi khong muon component con trong rfc tu dong render lai trong component cha khi minh goi 
no trong component cha*/
function ChildUseCallback(props) {
    let title='hello';
    let obj={id:1,name:'Hai'}
    console.log(title);
    console.log(obj);
    console.log('re-render');
    // console.log(props.renderNotify());
    return (
        <div>
          
             <p>{props.renderNotify()}</p>
            <textarea></textarea>
            <br/>
            <button className="btn btn-primary">GUi</button>
        </div>
    )
}
export default memo(ChildUseCallback)
