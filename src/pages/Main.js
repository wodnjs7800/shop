import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

function Main() {
  let shoes = useSelector((state) => { return state.shoes })
  let clothes = useSelector((state) => { return state.clothes })
  let num = Math.floor(Math.random() * 6)
  let navigate = useNavigate()
  return (
    <div className='main'>
      <img src={`${process.env.PUBLIC_URL}/images/bg/bg2.jpg`} className='main-bg'></img>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => {
              navigate(`/detail/${num}`, { state: { type: "shoes", num: num } })
            }}>
              <img src={`${process.env.PUBLIC_URL}/images/shoes/shoes${num}.jpg`} width="100%" />
            </button>
            <h4>{shoes[num].title}</h4>
            <p>{shoes[num].content}</p>
            <p>{shoes[num].price}원</p>
          </div>
          <div className="col-md-6">
            <button onClick={() => {
              navigate(`/detail/${num+10}`, { state: { type: "clothes", num: num } })
            }}>
              <img src={`${process.env.PUBLIC_URL}/images/clothes/clothes${num + 10}.jpg`} width="100%" />
            </button>
            <h4>{clothes[num].title}</h4>
            <p>{clothes[num].content}</p>
            <p>{clothes[num].price}원</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;