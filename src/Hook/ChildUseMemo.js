import React,{memo} from 'react'


 function ChildUseMemo(props) {
    console.log('cart');
    return (
        <div>
           <table className="table table-striped  mt-3">
               <thead  className="bg-danger">
                   <tr>
                       <th>id</th>
                       <th>name</th>
                       <th>price</th>
                   </tr>
               </thead>
               <tbody>
                   {props.cart.map((sanPham,index)=>{
                       return <tr key={index}>
                           <td>{sanPham.id}</td>
                           <td>{sanPham.name}</td>
                           <td>{sanPham.price}</td>
                       </tr>
                   })}
               </tbody>
           </table>
        </div>
    )
}
export default memo(ChildUseMemo)