/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../App.css';
import '../../tachyons.min.css';
import './blockTestimonials.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Student = ({ item }) => (
  <div className="ph4 white student-info-container">
    <div className="bg-dark-blue br3 pv4 ph3 relative  ">
      <p className="noiDungTestimonial tc">{item.content} </p>
      <p className="tenHocVien pv3 tc">{item.name}</p>
      <p className="tc f6 fw3">{item.class}</p>
      <p
        className="tc hocVienHienLa w-60 center pv3"
        dangerouslySetInnerHTML={{ __html: item.current_position }}
      />

      <div className="student-avatar w-100 tc">
        <img src={item.image} alt="" className="w4 br-100 ba bw3 b--white" />
      </div>
    </div>
  </div>
);

class BlockTestimonials extends React.Component {
  render() {
    const { id, testimonials } = this.props;
    const settings = {
      adaptiveHeight: false,
      className: 'w-100 flex center pb2 h-100',
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <>
        <div id={id} />
        <div className="mv5 relative">
          <div className="w-100  slider-container pb4">
            <Slider {...settings}>
              {testimonials.map((item, i) => (
                <Student key={i} item={item} />
              ))}
            </Slider>
          </div>

          <div className="w-100 tc student-group db dn-ns">
            <img
              src="images/nhom_hoc_vien_mobile.jpg"
              alt=""
              className="w-90 center"
            />
          </div>

          <div className="w-100 tr student-group dn db-ns">
            <img
              src="images/nhom_hoc_vien.jpg"
              alt=""
              className="w-80 mv5 z-2"
            />
          </div>
        </div>
      </>
    );
  }
}

export default BlockTestimonials;
