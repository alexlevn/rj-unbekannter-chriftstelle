/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../App.css';
import '../../tachyons.min.css';

// mobile & medium
const LectureMobile = ({ item, onSelectLecture, isActive }) => {
  return (
    <>
      <div
        style={{ transition: 'opacity 0.5s' }}
        className={'w-100 w-80-m relative pointer mt3'}
        onClick={onSelectLecture}
      >
        {isActive ? (
          <img src={'images/' + item.image} alt="" className="w-100  br3" />
        ) : (
          <>
            <img
              src={'images/' + item.image}
              alt=""
              className="w-100  br3 o-80"
            />

            <div className="absolute bottom-0 left-0 ph3 w-100 ph3 pt3 pb4 w-100 bg-black-30 br--bottom br3">
              <p className="f4 fw5 pb3">{item.name}</p>
              <p
                className="pyellow fw5 f4"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />

              <p className="tc pt3">
                <img src="images/arrow_down_yellow.svg" className="w2" alt="" />
              </p>
            </div>
          </>
        )}
      </div>

      {isActive ? (
        <>
          <p className="tc pt3">
            <img src="images/arrow_down_white.svg" className="w2" alt="" />
          </p>

          <div
            className="w-100 w-80-m flex flex-column bg-white black-90 pv3 ph3 br3 mt3"
            onClick={onSelectLecture}
          >
            <div className="w-100 ph3">
              <p className="f2 b">{item.name}</p>
              <p
                className="chucVuCoVan b pv3"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
            <div
              className="w-100 noidungGiangVien noiDung tj ph3"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

const BlockMobile = ({ advisors, lecturers, guestLecturers }) => {
  const [selectedMobileLecture, setSelectedMobileLecture] = useState(null);

  const handleOnSelectLecture = (id) => {
    setSelectedMobileLecture(id === selectedMobileLecture ? null : id);
  };

  return (
    <div className="blockCoVan pv5 white ph2 db dn-l">
      <div className="w-90 center">
        <p className="tieuDe tc center pv3">C??? V???N V?? GI???NG VI??N</p>
        <p className="noiDung tc center pv3">
          ?????i ng?? gi???ng vi??n gi??u kinh nghi???m c???a VietAI l?? nh???ng chuy??n gia
          h??ng ?????u trong l??nh v??? tr?? tu??? nh??n t???o trong v?? ngo??i n?????c.
        </p>
      </div>

      {/* co van mobile */}
      <div className="w-100 flex flex-column mt4 db dn-l">
        <div className="w-90 center yellow f3 f2-l fw3 tc">C??? V???n</div>
        <div className="w-90 center flex flex-column justify-center items-center mt4">
          {advisors.map((item, i) => (
            <LectureMobile
              key={i}
              item={item}
              isActive={item.id === selectedMobileLecture}
              onSelectLecture={() => {
                handleOnSelectLecture(item.id);
              }}
            />
          ))}
        </div>
      </div>

      {/* giang vien mobile */}
      <div className="w-100 flex flex-column mt4 db dn-l">
        <div className="w-90 center yellow f3 f2-l fw3 tc">Gi???ng Vi??n</div>
        <div className="w-90 center flex flex-column justify-center items-center mt4">
          {lecturers.map((item, i) => (
            <LectureMobile
              key={i}
              item={item}
              isActive={item.id === selectedMobileLecture}
              onSelectLecture={() => {
                handleOnSelectLecture(item.id);
              }}
            />
          ))}
        </div>
      </div>

      {/* giang vien thinh giang mobile */}
      <div className="w-100 flex flex-column mt4 db dn-l">
        <div className="w-90 center yellow f3 f2-l fw3 tc">
          Gi???ng Vi??n Th???nh Gi???ng
        </div>
        <div className="w-90 center flex flex-column justify-center items-center mt4">
          {guestLecturers.map((item, i) => (
            <LectureMobile
              key={i}
              item={item}
              isActive={item.id === selectedMobileLecture}
              onSelectLecture={() => {
                handleOnSelectLecture(item.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockMobile;
