/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../App.css';
import '../../tachyons.min.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import './LearningPath.css';

const ComboBox = ({ onChangeValue }) => {
  const [isShowList, setIsShowList] = useState(false);

  const [currentValue, setCurrentValue] = useState(1);
  return (
    <>
      <div
        className="w-100 ba b--black-50 br3 tc pv3 f3 fw6 pblue pointer"
        onClick={() => setIsShowList(!isShowList)}
      >
        TUẦN {currentValue}
      </div>

      {isShowList ? (
        <div className="ba b--black-30 pt3 ph3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bb b--black-10 pv3 f4 ttu black-70 pointer tc"
              onClick={() => {
                setIsShowList(false);
                setCurrentValue(item);
                onChangeValue(item);
              }}
            >
              Tuần {item}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

const LessonContent = ({ lessonIndex }) => {
  const styles = {
    ul: {
      marginLeft: 20,
    },
    li: {
      marginTop: 12,
    },
  };
  switch (lessonIndex) {
    case 0:
      return (
        <div>
          <h3>Mở đầu</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Ôn tập những thuận toán nền tảng</li>
            <li style={styles.li}>Lập trình với Python:</li>
            <ul style={styles.ul}>
              <li style={styles.li}>Lập trình với thư viện Numpy</li>
              <li style={styles.li}>Xử lý dữ liệu với thư viện Pandas</li>
              <li style={styles.li}>
                Trực quan hóa dữ liệu với thư viện Matplotlib
              </li>
            </ul>
          </ul>
        </div>
      );
    case 1:
      return (
        <div>
          <h3>Giới thiệu về Machine Learning (Học Máy)</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Lập trình với Python (tiếp tục)</li>
            <li style={styles.li}>Sử dụng Google Colab </li>
            <li style={styles.li}>
              Sử dụng Tensorflow 2.0 (phiên bản mới nhất từ google)
            </li>
          </ul>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>Đại số tuyến tính</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Sử dụng Tensorflow 2.0 (tiếp tục)</li>
            <li style={styles.li} className="i">
              Bài tập 1: dự đoán giá nhà
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <h3>Bài toán hồi quy</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Overfitting và hiệu chỉnh mô hình</li>
            <li style={styles.li} className="i">
              Bài tập 2: phân loại xe gắn máy
            </li>
          </ul>
        </div>
      );
    case 4:
      return (
        <div>
          <h3>Bài toán phân loại nhị phân</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Đánh giá mô hình</li>
            <li style={styles.li} className="i">
              Bài tập 3: dự đoán Fashion Mnist và tùy chọn những phương pháp
              nâng cao khác
            </li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div>
          <h3>Mạng nơ-ron (Neural Network) cơ bản và những ứng dụng</h3>
        </div>
      );
    default:
      return (
        <div>
          <h3>Mở đầu</h3>
          <ul style={{ marginLeft: 20 }}>
            <li>Ôn tập những thuận toán nền tảng</li>
            <li>Lập trình với Python:</li>
            <ul style={{ marginLeft: 20 }}>
              <li>Lập trình với thư viện Numpy</li>
              <li>Xử lý dữ liệu với thư viện Pandas</li>
              <li>Trực quan hóa dữ liệu với thư viện Matplotlib</li>
            </ul>
          </ul>
        </div>
      );
  }
};

export default class LearningPath extends React.Component {
  state = { value: 0, previous: 0 };

  VALUES = [
    {
      index: 1,
      content: 'Content 1',
    },
    {
      index: 2,
      content: 'Content 2',
    },
    {
      index: 3,
      content: 'Content 3',
    },
    {
      index: 4,
      content: 'Content 4',
    },
    {
      index: 5,
      content: 'Content 5',
    },
    {
      index: 6,
      content: 'Content 6',
    },
  ];

  render() {
    const { id } = this.props;

    return (
      <div className="flex flex-wrap flex-column flex-row-l" id={id}>
        <div className="w-100 w-40-l pt3 ph4 pl6-l">
          <p className="loTrinhHoc f3 mv4">Lộ Trình Học</p>
          <p className="tieuDeLoTrinhHoc mv4">NHỮNG KIẾN THỨC CẦN CÓ</p>
          <ul>
            <li className="mv4 noiDungKienThucCanCo">Lập trình cơ bản.</li>
            <li className="mv4 noiDungKienThucCanCo">
              Tích phân và đại số tuyến tính cơ bản.
            </li>
          </ul>
        </div>

        <div className="w-100 w-60-l pv3 ph4 ph2-l">
          <p className="tieuDeLoTrinhHoc mv4">
            THỜI GIAN KHÓA HỌC 6 TUẦN SẼ BAO GỒM
          </p>

          {/* mobile & medium screen */}
          <div className="db dn-l">
            <ComboBox
              onChangeValue={(i) => {
                this.setState({ value: i });
              }}
            />

            <div className="w-100 flex flex-wrap ph3">
              <div className="w-100 w-40-l mv4">
                <div className="noiDung">
                  <LessonContent lessonIndex={this.state.value - 1} />
                </div>
              </div>
              <div className="w-100 w-40-l flex flex-wrap justify-between">
                <div className="w-40 ph3 pt4">
                  <img src="./images/hinh0.png" alt="" />
                </div>
                <div className="w-40 ph3 pt4">
                  <img src="./images/hinh1.png" alt="" />
                </div>
                <div className="w-40 ph3 pt4">
                  <img src="./images/hinh2.png" alt="" />
                </div>
                <div className="w-40 ph3 pt4">
                  <img src="./images/hinh3.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* large screen */}
          <div className="dn db-l">
            <div style={{ width: '90%', height: '100px' }}>
              <HorizontalTimeline
                styles={{
                  background: '#ffffff',
                  foreground: '#7b9d6f',
                  outline: '#dfdfdf',
                }}
                index={this.state.value}
                indexClick={(index) => {
                  this.setState({ value: index, previous: this.state.value });
                }}
                getLabel={(value) => 'TUẦN ' + value}
                values={this.VALUES.map((value) => value.index)}
              />
            </div>

            <div className="w-100 flex justify-around items-start">
              <div className="w-50 mv4 pr3">
                <div className="noiDung">
                  <LessonContent lessonIndex={this.state.value} />
                </div>
              </div>
              <div className="w-50 mv4 flex flex-wrap">
                <div className="w-50 ph3">
                  <img src="./images/hinh0.png" alt="" />
                </div>
                <div className="w-50 ph3">
                  <img src="./images/hinh1.png" alt="" />
                </div>
                <div className="w-50 ph3">
                  <img src="./images/hinh2.png" alt="" />
                </div>
                <div className="w-50 ph3">
                  <img src="./images/hinh3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
