import { useParams, Link } from "react-router-dom"
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../store"
import { useLocation } from "react-router"

function Detail() {
  const { state } = useLocation()
  let num = state.num
  let detail
  let shoes = useSelector((state) => { return state.shoes })
  let clothes = useSelector((state) => { return state.clothes })
  if (state.type === 'shoes') {
    detail = shoes
  } else if (state.type === 'clothes') {
    detail = clothes
  }
  let { id } = useParams()
  let dispatch = useDispatch()

  return (
    <div className="detail">
      <img src={`${process.env.PUBLIC_URL}/images/bg/bg2.jpg`} className='main-bg'></img>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`${process.env.PUBLIC_URL}/images/${state.type}/${state.type}${id}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <div className="text">
              <h2 className="pt-5">{detail[num].title}</h2>
              <p>{detail[num].content}</p>
              <p>{detail[num].price}원</p>
              <Link to={`/cart`}>
                <button className="btn btn-danger" onClick={() => {
                  dispatch(addItem({ id: detail[num].id, name: detail[num].title, price: detail[num].price, count: 1 }))
                }}>주문하기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail