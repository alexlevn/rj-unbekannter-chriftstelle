/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../App.css';
import '../tachyons.min.css';

const BlockFooter = ({ links }) => {
  return (
    <div className="w-100 pt3 pb6 mb2 mb0-ns pb4-m pb3-l ph3 ph4-m ph5-l bg-dark-gray white flex justify-between h4">
      <img
        alt=""
        src="images/logo.png"
        style={{ width: 59, height: 66 }}
        className="pr4 pointer"
        onClick={() => window.open('http://vietai.org', '_blank')}
      />
      <div className="lh-copy  flex flex-column justify-between items-end">
        <div className="">
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <i className="fa fa-twitter f4 pb2 pb3-m pb3-l pl3 pl4-ns" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <i className="fa fa-linkedin f4 pb2 pb3-m pb3-l pl3 pl4-ns" />
          </a>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <i className="fa fa-facebook f4 pb2 pb3-m pb3-l pl3 pl4-ns" />
          </a>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <i className="fa fa-youtube f4 pb2 pb3-m pb3-l pl3 pl4-ns" />
          </a>
        </div>
        <p className="copyright">Copyright 2020 @ VietAI</p>
      </div>
    </div>
  );
};

export default BlockFooter;
