import './App.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="bottom">
        <a href="https://github.com/wodnjs7800/web3rd" target="_blank"><img src="images/github.PNG" /></a>
        <nav>
          <ul>
            <li>신발</li>
            <li>|</li>
            <li>의류</li>
            <li>|</li>
            <li>장바구니</li>
            <li>|</li>
            <li>@ 2022-2023 Jaewon, Inc.</li>
          </ul>
        </nav>
      </div>
      <p className="b1">
        Jeongja-dong, Jangan-gu, Suwon-si, Gyeonggi-do, Republic of Korea<br />
        Tel: 031-000-1111<br />
        Fax: 031-111-0000<br />
        Contact: wodnjs7800@naver.com
      </p>
    </div>
  )

}

export default Footer;