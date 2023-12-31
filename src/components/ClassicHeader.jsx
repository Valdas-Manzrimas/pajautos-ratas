import React from 'react';
import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Link } from 'react-scroll';

const ClassicHeader = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName('primary-menu');

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <header id='header' className='sticky-top-slide'>
      {/* Navbar */}
      <nav
        className={
          'primary-menu navbar navbar-expand-lg border-bottom-0 sticky-top ' +
          (stickyHeader ? 'sticky-on navbar-light' : '') +
          (isNavModalClose && !stickyHeader ? 'bg-transparent' : 'navbar-light')
        }
      >
        <div className='container-fluid position-relative g-lg-4'>
          <div className='col-auto col-md-2'>
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: 'pointer' }}
              className='logo'
              to='home'
              title='Pajautos Ratas'
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              {' '}
              <img
                src='images/logo-no-background.svg'
                alt='Pajautos Ratas'
                className='img-fluid logo'
              />{' '}
            </Link>
            {/* Logo End */}
          </div>
          <div className='col col-lg-8 navbar-accordion'>
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? 'navbar-toggler ms-auto'
                  : 'navbar-toggler ms-auto show'
              }
              id='navbar-toggler'
              type='button'
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id='header-nav'
              className={
                isNavModalClose
                  ? 'collapse navbar-collapse justify-content-center '
                  : 'show navbar-collapse justify-content-center'
              }
            >
              <ul className='navbar-nav'>
                <li className='nav-item '>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass='active'
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    to='services'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Mūsų veikla
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass='active'
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    to='groupEvents'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Veikla grupėse
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass='active'
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    to='individual'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Individualios konsultacijos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass='active'
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    to='about'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Apie mus
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    activeClass='active'
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    to='testimonial'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Atsiliepimai
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    spy
                    className={'nav-link ' + (stickyHeader ? '' : 'text-light')}
                    activeClass='active'
                    to='contact'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Kontaktai
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-auto col-lg-2 d-flex justify-content-end'>
            <ul className='social-icons social-icons-light'>
              {/* <li className='social-icons-twitter'>
                <Tooltip text='Twitter' placement='top'>
                  <a
                    href='http://www.twitter.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter' />
                  </a>
                </Tooltip>
              </li> */}
              <li className='social-icons-facebook'>
                <Tooltip text='Facebook' placement='top'>
                  <a
                    href='https://www.facebook.com/baltojotakostudija'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook-f' />
                  </a>
                </Tooltip>
              </li>
              {/* <li className='social-icons-dribbble'>
                <Tooltip text='Dribbble' placement='top'>
                  <a
                    href='http://www.dribbble.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-dribbble' />
                  </a>
                </Tooltip>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
