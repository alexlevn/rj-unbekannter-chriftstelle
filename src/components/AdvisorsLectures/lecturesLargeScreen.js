/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../../App.css'
import '../../tachyons.min.css'
import './styles.css'

const Lecture = ({ item, isSelected, onSelectLecture }) => {
  if (!item) {
    return null
  }

  return (
    <>
      <div className="relative">
        <img
          src={'images/' + item.image}
          alt=""
          style={{ transition: 'opacity 0.5s' }}
          className={'w-100 br3 pointer image_hover'}
          onClick={() => (onSelectLecture ? onSelectLecture(item.id) : null)}
        />

        <div
          className={`absolute bottom-0 left-0 pointer pa3 w-100 bg-black-30 br3`}
          style={{
            transition: 'opacity 0.2s',
            opacity: `${isSelected ? 0 : 1} `,
          }}
          onClick={() => (onSelectLecture ? onSelectLecture(item.id) : null)}
        >
          <p className="tenGiangVien pb4">{item.name} </p>
          <p
            className="chucVuGiangVien"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </div>
      </div>
      {isSelected ? (
        <p className="tc pt3">
          <img src="images/arrow_down_white.svg" className="w2" alt="" />
        </p>
      ) : null}
    </>
  )
}

const LectureDescription = ({ item }) => {
  return item ? (
    <div className="w-100 flex bg-white black-90 pv3 ph3 br3 mv3">
      <div className="w-40 ph3">
        <p className="f2 b ttu">{item.name}</p>
        <p
          className="chucVuCoVan b pv3"
          dangerouslySetInnerHTML={{
            __html: item.title,
          }}
        />
      </div>
      <div
        className="w-60 noidungGiangVien noiDung tl"
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
    </div>
  ) : (
    <div />
  )
}

const BlockLargeScreen = ({ advisors, lecturers, guestLecturers }) => {
  const arrAll = [...advisors, ...lecturers, ...guestLecturers]
  const [selectedLecture, setSelectedLecture] = useState(0)

  const handleSelectLecture = (id) => {
    setSelectedLecture(id === selectedLecture ? null : id)
  }

  const arrAdvisorsId = advisors.map((item) => item.id)
  const arrLecturesId = lecturers.map((item) => item.id)
  const arrGuestLecturesId = guestLecturers.map((item) => item.id)

  return (
    <div className="blockCoVan pv6 white ph2  dn db-l">
      <p className="tieuDe tc center pv3">C??? V???N V?? GI???NG VI??N</p>
      <p className="noiDung tc center pv3">
        ?????i ng?? gi???ng vi??n gi??u kinh nghi???m c???a VietAI l?? nh???ng chuy??n gia h??ng
        ?????u trong <br /> l??nh v???c tr?? tu??? nh??n t???o trong v?? ngo??i n?????c.
      </p>

      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f4 f2-l fw3">
          <div className="tl dib">C??? V???n</div>
        </div>

        <div className="w-75 flex flex-wrap">
          <div className="w-100 flex flex-row justify-start">
            <div className="w-third pr3 relative">
              <Lecture
                item={advisors[0]}
                isSelected={advisors[0].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third ph2 relative">
              <Lecture
                item={advisors[1]}
                isSelected={advisors[1].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>

            <div className="w-third pl3 relative">
              <Lecture
                item={advisors[2]}
                isSelected={advisors[2].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
          </div>
          {arrAdvisorsId.includes(selectedLecture) ? (
            <LectureDescription
              item={arrAll.find((item) => item.id === selectedLecture)}
            />
          ) : null}
        </div>
      </div>

      {/* -------------------------- GIANG VIEN ----------------------- */}
      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f2 fw3">
          <div className="tl dib">Gi???ng Vi??n</div>
        </div>

        <div className="w-75">
          <div className="w-100 flex flex-wrap mb4">
            <div className="w-third pr3 relative">
              <Lecture
                item={lecturers[0]}
                isSelected={lecturers[0].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third ph2 relative">
              <Lecture
                item={lecturers[1]}
                isSelected={lecturers[1].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third pl3 relative">
              <Lecture
                item={lecturers[2]}
                isSelected={lecturers[2].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>

            {arrLecturesId.includes(selectedLecture) ? (
              <LectureDescription
                item={arrAll.find((item) => item.id === selectedLecture)}
              />
            ) : null}
          </div>
        </div>
      </div>

      {/* -------------------------- GIANG VIEN KHACH MOI ----------------------- */}
      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f2 fw3">
          <div className="tl dib">
            Gi???ng vi??n <br />
            th???nh gi???ng
          </div>
        </div>

        <div className="w-75">
          <div className="w-100 flex flex-wrap mb4 justify-start">
            <div className="w-third pr3 relative">
              <Lecture
                item={guestLecturers[0]}
                isSelected={guestLecturers[0].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>

            {arrGuestLecturesId.includes(selectedLecture) ? (
              <LectureDescription
                item={arrAll.find((item) => item.id === selectedLecture)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockLargeScreen
