/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import '../tachyons.min.css';

const BlockThanhTuu = ({ achievement, id }) => {
  return (
    <div className="flex justify-end mt5" id={id}>
      <div className="w-100 w-80-l flex flex-wrap">
        <div className="w-100 w-50-l ph4 ph5-l pv3">
          <p
            className="tieuDeThanhTuu tl"
            dangerouslySetInnerHTML={{ __html: achievement.title }}
          />

          <p
            className="thanhTuu mv4 black-70"
            dangerouslySetInnerHTML={{ __html: achievement.content }}
          />
        </div>

        <div className="w-100 w-50-l ph4 ph5-l">
          <img src="images/2_hoc_vien.jpg" alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default BlockThanhTuu;
