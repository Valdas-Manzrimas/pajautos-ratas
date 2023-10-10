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
        <div className='gy-5 about-content-container'>
          {/* About me content start */}
          <div className='d-flex flex-column align-items-center'>
            <div className='team'>
              <img
                src='images/Dalia_profilis.png'
                alt='Dalia profilis'
                className=' img-fluid img-responsive'
              />
            </div>
            <div className='text-center text-lg-start'>
              <p className={darkTheme ? 'text-white-50' : ''}>
                <span className='text-primary text-5'>Dalia Eigėlienė</span> -
                Integruotos kūno ir judesio terapijos (Integrative Body and
                Movement Therapy™) sertifikuota praktikė, sertifikuota sąmoningo
                kvėpavimo terapeutė (Kvėpavimo terapijos centras), taip pat
                turinti medicininį išsilavinimą.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                molestiae placeat officia provident quasi ad quidem, itaque,
                nihil, eligendi reprehenderit laudantium quisquam ipsa porro?
                Culpa asperiores voluptatem minima. Molestiae veritatis nisi
                sapiente quibusdam eveniet maxime, obcaecati voluptatibus amet
                repellendus! Quaerat pariatur sint doloremque laboriosam ipsa
                voluptatibus doloribus ut! Vitae, neque.
              </p>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center'>
            <div className='team'>
              <img
                src='images/Aurimas_profilis.png'
                alt='Aurimas profilis'
                className='img-fluid img-responsive'
              />
            </div>
            <div className='text-center text-lg-start'>
              <p className={darkTheme ? 'text-white-50' : ''}>
                <span className='text-primary text-5'>Aurimas Radkevičius</span>{' '}
                - sertifikuotas nesmurtinės komunikacijos (Nonviolent
                Communication™) mokymų dalyvis ir programos „100 dienų
                empatijos” asistentas, „Vidinio džiaugsmo ir tylos retrito”
                bendraautorius ir vedantysis, mokymosi namų „Patirčių slėnis”
                mentorius, vidinio augimo grupės vyrams „Tikras” dalyvis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                asperiores odio consequuntur sit error quos officiis eveniet
                consequatur sunt veniam, aliquam aut veritatis animi nobis ut
                cumque debitis minus. Cupiditate?
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
