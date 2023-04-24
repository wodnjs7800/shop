import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

function Clothes() {
  let clothes = useSelector((state) => { return state.clothes })
  return (
    <div className="clothes">
      <img src={`${process.env.PUBLIC_URL}/images/bg/bg1.jpg`} className='main-bg'></img>
      <div className="container">
        <div className="row">
          {clothes.map(function (a, i) {
            return (
              <Item clothes={clothes[i]} i={i + 10} num={i} />
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
    <div className="col-md-4" >
      <button onClick={() => {
        navigate(`/detail/${props.i}`, { state: { type: "clothes", num: props.num } })
      }}>
        <img src={`${process.env.PUBLIC_URL}/images/clothes/clothes` + props.i + ".jpg"} width="250px" height="250px" />
      </button>
      <h4>{props.clothes.title}</h4>
      <p>{props.clothes.content}</p>
      <p>{props.clothes.price}원</p>
    </div >
  )
}

export default Clothes;