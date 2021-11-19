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
          <img src="images/arrow_down_white.svg" class="w2" alt="" />
        </p>
      ) : null}
    </>
  )
}

const LectureDescription = ({ item }) => (
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
)

const BlockLargeScreen = ({ advisors, lecturers, guestLecturers }) => {
  const arrAll = [...advisors, ...lecturers, ...guestLecturers]

  const [selectedLecture, setSelectedLecture] = useState(0)

  const handleSelectLecture = (id) => {
    setSelectedLecture(id === selectedLecture ? null : id)
  }

  return (
    <div className="blockCoVan pv6 white ph2  dn db-l">
      <p className="tieuDe tc center pv3">CỐ VẤN VÀ GIẢNG VIÊN</p>
      <p className="noiDung tc center pv3">
        Đội ngũ giảng viên giàu kinh nghiệm của VietAI là những chuyên gia hàng
        đầu trong <br /> lĩnh vực trí tuệ nhân tạo trong và ngoài nước.
      </p>

      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f4 f2-l fw3">
          <div className="tl dib">Cố Vấn</div>
        </div>

        <div className="w-75 flex flex-wrap">
          <div className="w-100 flex flex-row justify-start">
            <div className="w-third ph2 relative">
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
          </div>
          {[0, 1].includes(selectedLecture) ? (
            <LectureDescription item={arrAll[selectedLecture]} />
          ) : null}
        </div>
      </div>

      {/* -------------------------- GIANG VIEN ----------------------- */}
      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f2 fw3">
          <div className="tl dib">Giảng Viên</div>
        </div>

        <div className="w-75">
          <div className="w-100 flex flex-wrap mb4">
            {/* <div className="w-third ph2 relative">
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
            </div> */}

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

            {[2, 3, 4].includes(selectedLecture) ? (
              <LectureDescription item={arrAll[selectedLecture]} />
            ) : null}
          </div>

          {/* THƯ NGUYEN -- KIEN HUYNH */}

          {/* <div className="w-100 flex flex-wrap mb4">
            <div className="w-third ph2 relative">
              <Lecture
                item={lecturers[2]}
                isSelected={lecturers[2].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third ph2 relative">
              <Lecture
                item={lecturers[3]}
                isSelected={lecturers[3].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            
            {[4, 5].includes(selectedLecture) ? (
              <LectureDescription item={arrAll[selectedLecture]} />
            ) : null}
          </div> */}

          {/* HÒA LÊ
          Sinh Nguyen */}

          {/* <div className="w-100 flex flex-wrap mb4 justify-start">
            <div className="w-third pr3 relative">
              <Lecture
                item={lecturers[3]}
                isSelected={lecturers[3].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third ph2 relative">
                <Lecture
                  item={lecturers[4]}
                  isSelected={lecturers[4].id === selectedLecture}
                  onSelectLecture={handleSelectLecture}
                />
              </div>
            {[5].includes(selectedLecture) ? (
              <LectureDescription item={arrAll[selectedLecture]} />
            ) : null}
          </div> */}
        </div>
      </div>

      {/* -------------------------- GIANG VIEN KHACH MOI ----------------------- */}
      <div className="w-100 flex mt5">
        <div className="w-25 flex justify-center yellow f2 fw3">
          <div className="tl dib">
            Giảng viên <br />
            thỉnh giảng
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
            <div className="w-third ph2 relative">
              <Lecture
                item={guestLecturers[1]}
                isSelected={guestLecturers[1].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>
            <div className="w-third pl3 relative">
              <Lecture
                item={guestLecturers[2]}
                isSelected={guestLecturers[2].id === selectedLecture}
                onSelectLecture={handleSelectLecture}
              />
            </div>

            {[5, 6, 7].includes(selectedLecture) ? (
              <LectureDescription item={arrAll[selectedLecture]} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockLargeScreen
