import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subtractCount, deleteItem } from '../store'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Cart() {

    let cart = useSelector((state) => { return state.cart })
    let dispatch = useDispatch()
    let [sum] = useState(0);
    let navigate = useNavigate()

    return (
        <div className='cart'>
            <img src={`/images/bg/bg2.jpg`} className='main-bg'></img>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량(최대 5개)</th>
                        <th>변경하기</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a, i) => {
                            sum += cart[i].price * cart[i].count;
                            return (
                                <tr key={i}>
                                    <td>{cart[i].id}</td>
                                    <td>{cart[i].name}</td>
                                    <td>{cart[i].count}</td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(subtractCount(cart[i].id))
                                        }}>➖</button>
                                        <button onClick={() => {
                                            dispatch(addCount(cart[i].id))
                                        }}>➕</button>
                                    </td>
                                    <td>{cart[i].price * cart[i].count}원</td>
                                    <td><button onClick={() => {
                                        dispatch(deleteItem({ i }))
                                    }}>✖</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div className='sumprice'>
                총 금액 : {sum}원
                <button className="btn btn-danger payment" onClick={() => {
                    navigate('/result', { state: sum })
                }}>결제하기
                </button>
            </div>

        </div>
    )
}

export default Cart;