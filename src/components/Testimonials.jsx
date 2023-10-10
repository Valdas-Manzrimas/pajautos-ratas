import React from 'react';

import Slider from 'react-slick';

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: 'Kažkoks žmogus',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci culpa, sunt corporis aspernatur aliquid cumque voluptas nesciunt fugit commodi, eveniet reprehenderit nemo eum nulla laborum nobis esse explicabo. Natus?',
      service: 'Kvėpavimo terapija',
      rating: 5,
    },
    {
      name: 'Valdas Manzrimas',
      desc: 'Nuostabūs šviesūs žmonės, paskyrę savo gyvenimą sąmoningumui, meilei ir švietimui. Rekomenduoju dalyvauti Dalios ir Aurimo užsiėmimuose, nes jie padeda sugrįžti į save bei tapti laimingu.',
      service: 'Empatiškas bendravimas',
      rating: 5,
    },
    {
      name: 'Vardas Pavardenis',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa. Soluta neque labore culpa, ratione laborum facere officiis libero at',
      service: 'Empatiškas bendravimas',
      rating: 5,
    },
    {
      name: 'John Doe',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolorum quam maxime iure, adipisci amet eaque, facilis cum accusamus officiis esse ea sapiente dolor eveniet',
      service: 'Kūno terapija',
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id='testimonial'
      className={'section ' + (darkTheme ? 'bg-dark-1' : '')}
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
            Atsiliepimai
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            Ką apie mus kalba
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className='item' key={index}>
                <div
                  className={
                    ' rounded p-5 ' + (darkTheme ? 'bg-dark' : 'bg-light')
                  }
                >
                  <div className='d-flex align-items-center justify-content-between mt-auto mb-4'>
                    <p className='mb-0'>
                      <strong
                        className={
                          'd-block fw-600 ' +
                          (darkTheme ? 'text-white' : 'text-dark')
                        }
                      >
                        {value.name}
                      </strong>
                    </p>
                    <h6 className='text-light m-0'>{value.service}</h6>
                  </div>
                  <p
                    className={
                      ' fw-500 mb-4 ' + (darkTheme ? 'text-white' : 'text-dark')
                    }
                  >
                    “{value.desc}”
                  </p>
                  {/* <span className='text-2'>
                    {[...Array(value.rating)].map((value, i) => (
                      <i className='fas fa-star text-warning' key={i} />
                    ))}
                  </span> */}
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
