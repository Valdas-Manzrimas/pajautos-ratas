import React from 'react';

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id='about'
      className={'section ' + (darkTheme ? 'bg-dark-1' : 'bg-light')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              'text-20  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            Apie mus
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            Kas mes tokie?
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        <div className='gy-5 d-flex'>
          {/* About me content start */}
          <div className='d-flex flex-column align-items-center w-50'>
            <div className='team'>
              <img
                src='images/Dalia_profilis.png'
                alt='Dalia profilis'
                className=' img-fluid img-responsive'
              />
            </div>
            <div className='col-lg-9 col-xl-9 text-center text-lg-start'>
              <p className={darkTheme ? 'text-white-50' : ''}>
                <span className='text-primary text-5'>Dalia Eigėlienė</span> -
                Integruotos kūno ir judesio terapijos (Integrative Body and
                Movement Therapy™) sertifikuota praktikė, sertifikuota sąmoningo
                kvėpavimo terapeutė (Kvėpavimo terapijos centras), taip pat
                turinti medicininį išsilavinimą.
              </p>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center w-50'>
            <div className='team'>
              <img
                src='images/Aurimas_profilis.png'
                alt='Aurimas profilis'
                className='img-fluid img-responsive'
              />
            </div>
            <div className='col-lg-9 col-xl-9 text-center text-lg-start'>
              <p className={darkTheme ? 'text-white-50' : ''}>
                <span className='text-primary text-5'>Aurimas Radkevičius</span>{' '}
                - sertifikuotas nesmurtinės komunikacijos (Nonviolent
                Communication™) mokymų dalyvis ir programos „100 dienų
                empatijos” asistentas, „Vidinio džiaugsmo ir tylos retrito”
                bendraautorius ir vedantysis, mokymosi namų „Patirčių slėnis”
                mentorius, vidinio augimo grupės vyrams „Tikras” dalyvis.
              </p>
            </div>
          </div>

          {/* About me content end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
