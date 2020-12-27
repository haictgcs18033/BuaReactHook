import React, { useReducer } from 'react'

const initialCart = [
    //{ id: 1, name: 'Iphone', price: 1000, quantity: 1 },
    // { id: 2, name: 'Samsung', price: 2000, quantity: 1 },
    // { id: 3, name: 'Huawei', price: 3000, quantity: 1 }
]
let arrProduct = [
    { id: 1, name: 'Iphone', price: 1000, },
    { id: 2, name: 'Huawei y9', price: 1000, },
    { id: 3, name: 'Xiaomo 10', price: 1000, }
]
const cartReducer = (state , action) => {
    switch(action.type){
        case 'ADD_ITEM':{
        //  let updateCart=[...state,action.product]
        // return updateCart
        let updateCart=[...state];

        let index=updateCart.findIndex(item=>item.id===action.product.id);
        if(index !== -1){
        //console.log(1);
          //  console.log(updateCart[index]);
            updateCart[index].quantity ++;
            console.log(updateCart[index].quantity);
     
            
        }else{
        //   const itemCart= {...action.product,quantity:1};
           updateCart.push({...action.product,quantity:1});
           console.log(updateCart);

        }
        return updateCart;
        }
    }
    return [...state]
}

export default function DemoUseReducer(props) {
    /**
     * Use reducer nhan vao 2 tham so tham so thu nhat chinh la cai reducer cua chung ta tham so thu hai 
     chinh la cai gia tri khoi dau cua chung ta o day la initialCart
     */

    let [cart, dispatch] = useReducer(cartReducer, initialCart)
    /**initialCart se la state mac dinh cua cartReducer  */
    /**dispatch trong hook reducer khac voi cac setState truyen thong . setState truyen thong nhan state vao
    va gan lai gia tri cho state con dispatch trong hookReducer co tac dung nhan vao mot object de minh xu 
    li va tra ve mot cai state moi*/
   
    const renderArrSanPham = () => {
        return arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left bg-dark text-white">
                    <img className="card-img-top" src="https://picsum.photos/300/300" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                        <button className="btn btn-success" onClick={() => { addToCart(product) }}>Add to cart</button>
                    </div>
                </div>

            </div>
        })
    }
    const addToCart = (itemClick) => {
       dispatch({
           type:'ADD_ITEM',
           product:itemClick
       })
    }
    const renderSanPham = () => {
        return cart.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.id}</td>
                    <td>{sp.name}</td>
                    <td>{sp.price}</td>
                    <td>{sp.quantity}</td>
                    <td>{sp.quantity * sp.price}</td>
                    <td><button className="btn btn-danger">Xoa</button></td>
                </tr>
            )
        })
    }
    return (
        <div className="container">

            <h3>Danh sach san pham</h3>
            <div className="container">
                <div className="row">
                    {renderArrSanPham()}
                </div>
            </div>
            <h3>Gio hang</h3>
            <table className="table mt-3">
                <thead className="bg-primary">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gia</th>
                        <th>So luong</th>
                        <th>Tong tien</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderSanPham()}
                </tbody>
            </table>
        </div>
    )
}
