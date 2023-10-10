import React from 'react';

const GroupEvents = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id='groupEvents'
      className={
        'section groups-section ' + (darkTheme ? 'bg-dark-1' : 'bg-light')
      }
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
            Kartu įdomiau
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            Veikla grupėse
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
      </div>
      <div className='groups-content'>
        <div className='p-2 text-center m-auto'>
          <h2 className='mb-3'>Tobulėkime kartu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            magni eius totam nobis aut, perspiciatis molestiae sed quidem,
            consectetur quis repellat provident nulla tempore a, laboriosam amet
            qui. Tempore, cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quasi earum. Eius inventore voluptas aliquid impedit officia
            aspernatur, dolores iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            incidunt quo! Ratione odit expedita doloremque ipsum atque tempore
            nostrum, fugiat, minus aspernatur error sapiente illo.
          </p>
        </div>

        <div className='groups-image-container'>
          <img
            className='groups-image'
            src='images/group_activities.jpg'
            alt='group events'
          />
        </div>
      </div>
    </section>
  );
};

export default GroupEvents;
