import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import logoColored from "../img/logo-colored.png";
import facebookIconActive from "../img/facebook.png";
import linkedInIconActive from "../img/linkedin.png";
import youtubeIconActive from "../img/youtube.png";

const Footer = class extends React.Component {
  render() {
    return (
      <FooterComponent/>
    )
  }
};

export const FooterComponent = ({}) => {
  const [fIcon, setFIcon] = React.useState(
      facebookIconActive
  );
  const [lIcon, setLIcon] = React.useState(
      linkedInIconActive
  );
  const [yIcon, setYIcon] = React.useState(
      youtubeIconActive
  );

  return (
      <div className={'footer-wrapper'}>
        <div className={'container'}>
          <nav className="nav-wrapper nav justify-content-between">
            <a className="nav-link navbar-brand" href="#">
              <img className={'logo'} src={logoColored}/>
            </a>
            <ul className={'nav justify-content-end'}>
              <li>
                <Link to={'/'}><a className="nav-link" href="/">Our Work</a></Link>
              </li>
              <li>
                <Link to={'/team'}><a className="nav-link" href="/team">Team</a></Link>
              </li>
              <li>
                <Link to={'/partners'}><a className="nav-link" href="/partners">Partners</a></Link>
              </li>
              <li>
                <Link to={'/media'}><a className="nav-link" href="/media">Media</a></Link>
              </li>
              <li>
                <Link to={'/blog'}><a className="nav-link" href="/blogs">Blog</a></Link>
              </li>
              <li>
                <Link to={'/careers'}><a className="nav-link" href="/careers">Careers</a></Link>
              </li>
            </ul>
          </nav>
          <nav className="nav-wrapper nav justify-content-between">
            <a className="nav-link navbar-brand" href="#">
              <div className={'address-line1'}>
                Samagra | Transforming Governance
              </div>
              <div className={'address-line2'}>
                9/5 Sarvapriya Vihar, New Delhi 110016
              </div>
            </a>
            <ul className={'nav justify-content-end'}>
              <li>
                <a className="nav-link" href="https://www.facebook.com/SamagraGovernance">
                  <img className={'social-icons'} onMouseEnter={() => setFIcon(facebookIconActive)}
                       onMouseLeave={() => setFIcon(facebookIconActive)} src={fIcon}/>
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.linkedin.com/company/samagra-transforming-governance/">
                  <img className={'social-icons'} onMouseEnter={() => setLIcon(linkedInIconActive)}
                       onMouseLeave={() => setLIcon(linkedInIconActive)} src={lIcon}/>
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.youtube.com/channel/UCfkXErS-f87xUQkmSKSC8bg">
                  <img className={'social-icons'} onMouseEnter={() => setYIcon(youtubeIconActive)}
                       onMouseLeave={() => setYIcon(youtubeIconActive)} src={yIcon}/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'bottom-copyright-section'}>
          © 2019 Samagra Development Associates Pvt. Ltd
        </div>
      </div>
  )
};

export default Footer
