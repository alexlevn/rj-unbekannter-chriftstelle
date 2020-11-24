/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './App.css';
import './tachyons.min.css';
import BlockMain from './components/blockMain';
import BlockBanCoBiet from './components/blockBanCoBiet';
import BlockDangKy from './components/blockDangky';
import BlockCoVanGiangVien from './components/AdvisorsLectures';
import LearningPath from './components/LearningPath/LearningPath';
import BlockTestimonials from './components/Testimonial/blockTestimonials';
import BlockThanhTuu from './components/blockThanhTuu';
import BlockFooter from './components/blockFooter';

import data from './assets/data.json';
import NavBar from './components/navbar/Navbar';
import BlockQuestionAnswer from './components/QuestionAnswer';
import BlockPartners from './components/blockPartners';

export default class App extends React.Component {
  state = {
    stickyNav: false,
  };

  switchSticky = function () {
    window.scrollY > 101
      ? this.setState({ stickyNav: true })
      : this.setState({ stickyNav: false });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.switchSticky.bind(this));

    const { search } = this.props.location;
    const code = new URLSearchParams(search).get('code');
    this.setState({
      code: code === 'vnu' || code === 'fpt' || code ==='steamforvietnam' ? code : undefined,
    });
  }

  render() {
    const code = this.state.code;
    
    return (
      <div className="app-container">
        <NavBar
          sticky={this.state.stickyNav}
          menu={data.menu}
          registerLink={data.register_link}
        />
        <div className="app-content">
          <BlockMain timeToStart={data.countdown.time_to_start} code={code} />
          <BlockBanCoBiet id={data.menu.objectives.id} />
          <BlockCoVanGiangVien
            advisors={data.advisors}
            lecturers={data.lecturers}
            guestLecturers={data.guest_lecturers}
            id={data.menu.lecturers.id}
          />
          <LearningPath id={data.menu.learning_path.id} />

          <BlockTestimonials
            testimonials={data.testimonials}
            id={data.menu.testimonials.id}
          />

          <BlockThanhTuu
            achievement={data.achievement}
            id={data.menu.achievements.id}
          />
          <BlockPartners />
          <BlockQuestionAnswer id={data.menu.q_a.id} questions={data.qas} />

          <BlockDangKy
            id={data.menu.register.id}
            aff={code}
            registerLink={data.register_link}
          />

          <BlockFooter links={data.links} />
        </div>
      </div>
    );
  }
}
