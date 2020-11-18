/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import '../tachyons.min.css';

const BlockPartners = () => {
  return (
    <>
      <div className="w-100 tc">
        <p className="tieuDePartners pt5 pb3">ORGANIZING PARTNERS</p>
        <div className="pv3 flex justify-around flex-wrap">
          
          {/* <div className="w-50 w-40-m w-30-l mv3 flex items-center">
            <img alt="" src="images/partners/1_kambria.png" className="w-70 w-60-m w-50-l center" />
          </div> */}

          <div className="w-50 w-40-m w-30-l mv3 flex items-center ph3 ph2-m ph0-l">
            <img alt="" src="images/partners/2_khtn.png" className="w-70 w-60-m w-50-l center" />
          </div>
          <div className="w-50 w-40-m w-30-l mv3 flex items-center">
            <img alt="" src="images/partners/3_jvn.png" className="w-70 w-60-m w-50-l center" />
          </div>
        </div>
      </div>

      <div className="w-100 tc">
        <p className="tieuDePartners pv3">SPONSORS</p>
        <div className="pv3 flex justify-around flex-wrap">

          {/* <div className="w-50 w-40-m w-30-l mv3 flex items-center flex-column justify-center">
            <img alt="" src="images/partners/4_google.png" className="w-70 w-60-m w-50-l center" />
          </div> */}

          <div className="w-50 w-40-m w-30-l mv3 flex items-center">
            <img alt="" src="images/partners/5_fpt.png" className="w-70 w-60-m w-50-l center" />
          </div>

        </div>
      </div>

      <div className="w-100 tc">
        <p className="tieuDePartners pv3"> COMMUNITY PARTNERS</p>
        <div className="pv3 flex justify-around flex-wrap">
          
          <div className="w-50 w-40-m w-30-l mv3 flex items-center">
            <img alt="" src="images/partners/6_elsa.png" className="w-70 w-60-m w-50-l center" />
          </div>

          {/* <div className="w-50 w-40-m w-30-l mv3 flex items-center">
            <img alt="" src="images/partners/7_top_dev.png" className="w-70 w-60-m w-50-l center" />
          </div> */}

        </div>
      </div>

    </>
  );
};

export default BlockPartners;
