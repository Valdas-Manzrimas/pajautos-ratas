import './App.scss';
import Home from './components/Home';
import AboutUs from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import ClassicHeader from './components/ClassicHeader';
import { commonConfig } from './config/commonConfig';
import TermsAndConditions from './components/TermsAndConditions';
import Disclaimer from './components/Disclaimer';
import PreLoader from './components/Preloader';
import { Tooltip } from './components/Tooltip';

function App() {
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById('back-to-top');

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <>
      <div style={{ position: 'relative' }} className={'layout'}>
        {isLoading && <PreLoader></PreLoader>}

        <div id='main-wrapper'>
          <ClassicHeader></ClassicHeader>

          <div id='content' role='main'>
            <Home
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
            ></Home>
            <Services
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Services>
            <AboutUs
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></AboutUs>
            <Testimonials
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Testimonials>
            <Contact
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
            ></Contact>
          </div>
          <Footer
            classicHeader={classicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
        <Tooltip text='Back to Top' placement='left'>
          <span
            id='back-to-top'
            className='rounded-circle'
            style={{ display: scrollTopVisible ? 'inline' : 'none' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <i className='fa fa-chevron-up'></i>
          </span>
        </Tooltip>

        <TermsAndConditions darkTheme={darkTheme}></TermsAndConditions>
        <Disclaimer darkTheme={darkTheme}></Disclaimer>
      </div>
    </>
  );
}

export default App;
