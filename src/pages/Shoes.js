import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

function Shoes() {
  let shoes = useSelector((state) => { return state.shoes })
  return (
    <div className="shoes">
      <img src={`/images/bg/bg0.jpg`} className='main-bg'></img>
      <div className="container">
        <div className="row">
          {shoes.map(function (a, i) {
            return (
              <Item shoes={shoes[i]} i={i} num={i} />
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

function Item(props) {
  let navigate = useNavigate()
  return (
    <div className="col-md-4">
      <button onClick={() => {
        navigate(`/detail/${props.i}`, { state: { type: "shoes", num: props.num } })
      }}>
        <img src={"/images/shoes/shoes" + props.i + ".jpg"} width="250px" height="250px" />
      </button>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div >
  )
}

export default Shoes;