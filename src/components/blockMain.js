import React from 'react'
import dayjs from 'dayjs'
import '../App.css'
import '../tachyons.min.css'
import Countdown from 'react-countdown'

const HtmlMain = ({ d, h, m, s, code, timeToStart }) => {
  return (
    <div style={HtmlMainStyle} className="white vh-100 cover">
      {/* COUNT DOWN FOR MOBILE & MEIDUM SCREEN */}
      <div className="mobile-count-down db dn-ns flex justify-center mt4 items-end">
        <div className="flex flex-column justify-center items-center">
          <span className="f6 fw3 db mb2">DAYS</span>
          <div className="khoiVuong w3 h3 flex justify-center items-center f25 fw6">
            {d}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>
        <div className="flex flex-column justify-center items-center">
          <span className="f6 fw3 db mb2">HOURS</span>
          <div className="khoiVuong w3 h3 flex justify-center items-center f25 fw6">
            {h}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>
        <div className="flex flex-column justify-center items-center">
          <span className="f6 fw3 db mb2">MINUTES</span>
          <div className="khoiVuong w3 h3 flex justify-center items-center f25 fw6">
            {m}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>
        <div className="flex flex-column justify-center items-center">
          <span className="f6 fw3 db mb2">SECONDS</span>
          <div className="khoiVuong w3 h3 flex justify-center items-center f25 fw6">
            {s}
          </div>
        </div>
      </div>

      {/* COUNT DOWN FOR LARGE SCREEN */}
      <div className="desktop-count-down dn flex-ns pv4 justify-center items-center mt4">
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">DAYS</p>
          <p className="soTo">{d}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">HOURS</p>
          <p className="soTo">{h}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">minutes</p>
          <p className="soTo">{m}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">seconds</p>
          <p className="soTo">{s}</p>
        </div>
      </div>

      <p className="ttu tc heading-m heading-l heading fw6 center w-90 mt4">
        Foundation of Machine learning online class
      </p>
      <div className="description tc w-90 tc w-70-m w-60-l center mv4 f5">
        C??ng VietAI ????n ?????u c??ng ngh??? v???i kh??a h???c tr???c tuy???n v??? Machine
        Learning (H???c M??y) c?? b???n v???i nh???ng chuy??n gia h??ng ?????u v??? tr?? tu??? nh??n
        t???o ?????n t??? Vi???t Nam v?? thung l??ng Silicon.
        <br />
        {/* option for private aff code */}
        {/* {code && code === 'fpt' ? 'Date: August 8, 2021' : 'Date: August 8, 2021'} */}
        {'Date: ' + dayjs(Date.parse(timeToStart)).format('MMMM DD, YYYY')}
      </div>
    </div>
  )
}

const BlockMain = ({ timeToStart, code }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <HtmlMain
          d={0}
          h={0}
          m={0}
          s={0}
          code={code}
          timeToStart={timeToStart}
        />
      )
    } else {
      return (
        <HtmlMain
          d={days}
          h={hours}
          m={minutes}
          s={seconds}
          code={code}
          timeToStart={timeToStart}
        />
      )
    }
  }

  return (
    <Countdown
      date={timeToStart}
      intervalDelay={0}
      precision={3}
      renderer={renderer}
    />
  )
}

const HtmlMainStyle = {
  backgroundImage: "url('images/bghero.jpg')",
  paddingTop: 101,
}

export default BlockMain
