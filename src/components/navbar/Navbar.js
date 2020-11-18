import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import './NavBar.css';
import '../../App.css';
import '../../tachyons.min.css';


const MenuItem = ({item, color}) => {
    return (
        <Link
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <span className={"pointer dim menuItem ttu " + color}>{item.name}</span>
        </Link>
    );
};

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navItemColor: this.props.sticky ? 'dark-blue' : 'white',
            navLogoSrc: this.props.sticky ? 'images/nav-logo.svg' : 'images/nav-logo-white.svg',
            toggleMenuOn: false,
            toggleIconSrc: 'images/ic_navigation_drawer_white.svg'
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return prevState.toggleMenuOn ? {
                navItemColor: 'white',
                navLogoSrc: 'images/nav-logo-white.svg',
                toggleIconSrc: 'images/ic_close.svg'
            } :
            {
                navItemColor: nextProps.sticky ? 'dark-blue' : 'white',
                navLogoSrc: nextProps.sticky ? 'images/nav-logo.svg' : 'images/nav-logo-white.svg',
                toggleIconSrc: nextProps.sticky ?
                    'images/ic_navigation_drawer_blue.svg' : 'images/ic_navigation_drawer_white.svg'
            };
    }

    componentDidMount() {
        const items = document.querySelectorAll('.nav-item')
        for (let item of items) {
            item.addEventListener('click', this.toggleMenuOff, false);
        }
    }

    toggleMenuOff = () => {
        this.setState({toggleMenuOn: false})
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            toggleMenuOn: !prevState.toggleMenuOn,
            toggleIconSrc: prevState.toggleMenuOn ? 'images/ic_navigation_drawer_blue.svg' : 'images/ic_close.svg'
        }))
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <ul
                className={'nav-bar-container menu ' + (this.props.sticky ? 'sticky ' : ' ') +
                (this.state.toggleMenuOn ? 'active' : '')}
                style={{transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'}}
            >
                <li className='logo'>
                    <img
                        className="nav-logo pointer"
                        alt={'Logo'}
                        src={this.state.navLogoSrc}
                        onClick={() => window.open('http://vietai.org', '_blank')}
                    />
                </li>
                <li className='nav-item'><MenuItem item={this.props.menu.objectives} color={this.state.navItemColor}/>
                </li>
                <li className='nav-item'><MenuItem item={this.props.menu.achievements} color={this.state.navItemColor}/>
                </li>
                <li className='nav-item'><MenuItem item={this.props.menu.lecturers} color={this.state.navItemColor}/>
                </li>
                <li className='nav-item'><MenuItem item={this.props.menu.learning_path}
                                                   color={this.state.navItemColor}/></li>
                <li className='nav-item'><MenuItem item={this.props.menu.testimonials} color={this.state.navItemColor}/>
                </li>
                <li className='nav-item'><MenuItem item={this.props.menu.q_a} color={this.state.navItemColor}/></li>
                <li className="nav-item nav-button">
                    <div
                        className="dn dn-m flex-l btn-register pointer white dim menuItem items-center justify-center f4"
                        style={{width: 202, height: 51, borderRadius: 10, display: 'flex'}}
                        onClick={() => window.open(this.props.registerLink, '_blank')}
                    >
                        ĐĂNG KÝ NGAY
                    </div>
                </li>

                <li className='toggle' onClick={this.toggleMenu}>
                    <img
                        className="toggle-logo pointer"
                        alt={'Logo'}
                        src={this.state.toggleIconSrc}
                    />
                </li>
            </ul>
        );
    }
}

export default NavBar;
