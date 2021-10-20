/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import '../tachyons.min.css';

const BlockDangKy = ({ id, registerLink, aff }) => {
  return (
    <>
      <div
        id={id}
        className="mobile-button db dn-ns fixed bottom-0 w-100 pv3 ttu fw5 pointer btnDangKy tc f4 white pointer z-999"
        onClick={() => window.open(registerLink, '_blank')}
      >
        Đăng ký ngay
      </div>

      <div className="flex flex-wrap flex-nowrap-l pt4 pb5 pv6-l" id={id}>
        <div className="w-100 mt4 mt5-l w-third-l flex tc mh3 mh4-ns">
          <p className="hayDangKy center db tc tl-l">
            HÃY ĐĂNG KÝ KHÓA HỌC MACHINE LEARNING (HỌC MÁY) CƠ BẢN NGAY HÔM NAY!
            <br />
            {aff ? null : (
              <span className="f5 f4-ns black-50 fw5 lh-copy ttu">
                Đăng ký sớm trước 23h59p ngày 27/10/2021.
              </span>
            )}
          </p>
        </div>
        <div className="w-100 mt4 mt5-l w-third-l mh3 mh4-ns overflow-hidden khungDangKy">
          <div className="flex flex-column h-100-l justify-between-l">
            <div className="khungTieuDeDangKy pv4">
              {aff ? (
                <>
                  <p className="tieuDeDangKy f3 tc">{aff}</p>
                  <p className="f5 white tc fw2">
                    Xin chúc mừng bạn đã nhận được học bổng <br /> 20% từ{' '}
                    {aff.toUpperCase()} & VietAI. Coupon code{' '}
                    {aff.toUpperCase()}
                  </p>
                </>
              ) : (
                <>
                  <p className="tieuDeDangKy tc">EARLY BIRD</p>
                  <p className="f5 white tc fw2">Đăng ký sớm</p>
                </>
              )}
            </div>

            <div className="pv5 pv6-ns tc">
              <p className="f1 b pv3">
                2,999,000 <br />
                VND
              </p>
              {/* <p className="f2">(100 USD)</p> */}
            </div>

            <div
              className="ttu tc f2 white b pv3 btnDangKy pointer"
              onClick={() => window.open(registerLink, '_blank')}
            >
              ĐĂNG KÝ NGAY
            </div>
          </div>
        </div>
        <div className="w-100 mt4 mt5-l w-third-l mh3 mh4-ns overflow-hidden khungDangKy">
          <div className="flex flex-column">
            <div className="khungTieuDeDangKy pv4">
              <p className="tieuDeDangKy tc">GENERAL ADMISSION</p>
              <p className="f5 white tc fw2">Đăng ký thường</p>
            </div>

            <div className="pv5 pv6-ns tc">
              <p className="f1 b pv3">
                3,500,000 <br />
                VND
              </p>
              {/* <p className="f2">(150 USD)</p> */}
            </div>

            <div
              className="ttu tc f2 white b pv3 btnDangKy pointer"
              onClick={() => window.open(registerLink, '_blank')}
            >
              ĐĂNG KÝ NGAY
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockDangKy;
