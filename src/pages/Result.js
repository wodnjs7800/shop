import '../App.css'
import { useLocation } from "react-router"

function Result() {
 const { state } = useLocation()
 return (
<div className="result">
  <img src={`/images/bg/bg2.jpg`} className='main-bg'></img>
  <div className='finish'>
   총 {state}원 결제되었습니다.<br />
   감사합니다.
   </div>
  </div>
 )
}

export default Result;