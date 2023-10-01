import React, { useState } from 'react';

const Services = ({ classicHeader, darkTheme }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [cardElement, setCardElement] = useState('');

  const handleCardButtonClick = (keyName) => {
    setCardElement(keyName);
  };

  const cardContent = {
    breathing: {
      title: 'Kvėpavimo terapija',
      picture:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel culpa odio ratione, ipsa recusandae beatae voluptate voluptates suscipit ipsum officiis non modi quasi sit labore quam saepe reiciendis impedit deleniti? Aperiam animi facilis obcaecati itaque. Rerum, aut mollitia. Dolore amet reprehenderit at sint ad! Perferendis!',
    },
    empathy: {
      title: 'Empatiškas bendravimas',
      picture:
        'https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi nam culpa corporis laudantium necessitatibus, sint eligendi nulla cumque dolor eveniet deleniti inventore dicta doloribus molestiae aspernatur esse quam, facilis id quaerat fugiat praesentium. Tempore itaque quidem commodi fugiat laudantium beatae neque labore tempora exercitationem expedita iste ullam laboriosam ratione ducimus error nam sunt voluptatibus inventore, nemo officiis quas qui?',
    },
    body: {
      title: 'Kūno terapija',
      picture:
        'https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolores, cumque ut eos eum aliquam quibusdam autem iste dignissimos soluta modi sequi expedita suscipit! Soluta recusandae officia voluptate nulla nisi adipisci, exercitationem quis suscipit unde praesentium odio, eum nam quidem. Possimus, fuga? Repellendus quae ipsam facilis. Adipisci dolore nulla labore, iure perspiciatis, laboriosam sunt id suscipit, similique maiores rerum! Sequi accusamus dicta, architecto quis, molestiae nihil hic expedita ipsam quaerat, officia quibusdam? Ea totam suscipit nostrum neque laudantium a repellat!',
    },
  };

  return (
    <section
      id='services'
      className={'section ' + (darkTheme ? 'bg-dark-2' : '')}
    >
      <div className={'container-100 p-0 ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Overlay */}

        {isOverlay && (
          <div className='justify-space-between align-items-center mh-100 service-mask bg-light-1'>
            <i
              className='fa-regular fa-circle-xmark fa-2xl close-btn'
              onClick={(e) => {
                e.preventDefault();
                setIsOverlay(false);
              }}
            ></i>
            <div className=' pic-container'>
              <img
                className='img-responsive'
                src={cardContent[cardElement].picture}
                alt={cardContent[cardElement].title}
              />
            </div>
            <div className='container-fluid pr-4 flex-column text-center'>
              <h2 className='mb-5'>{cardContent[cardElement].title}</h2>
              <p>{cardContent[cardElement].content}</p>
            </div>
          </div>
        )}

        {/* Overlay end */}

        {/* Heading */}
        <div
          className={
            'position-relative d-flex text-center mb-5 ' +
            (isOverlay ? 'fade-out' : '')
          }
        >
          <h2
            className={
              'text-20 text-uppercase fw-600 w-100 mb-0 pt-4 ' +
              (darkTheme ? 'text-white-50  opacity-1' : 'text-light  opacity-4')
            }
          >
            Mūsų veikla
          </h2>
          <p
            className={
              'text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 mt-4 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            Kas jūsų laukia?
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        {/* Cards start */}
        <section className={'card-container ' + (isOverlay ? 'fade-out' : '')}>
          <div className='card'>
            <div className='content'>
              <h2 className='title text-light'>Kvėpavimo terapija</h2>
              <p className='copy'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                nam?
              </p>
              {/* <Link to='/DiveIn'> */}
              <button
                className='btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOverlay(true);
                  handleCardButtonClick('breathing');
                }}
              >
                Daugiau
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2 className='title text-light'>Empatiškas bendravimas</h2>
              <p className='copy'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt dicta doloremque aliquid, quod distinctio sit.
              </p>
              <button
                className='btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOverlay(true);
                  handleCardButtonClick('empathy');
                }}
              >
                Daugiau
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2 className='title text-light'>Kūno terapija</h2>
              <p className='copy'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                quae repellat facere inventore autem nisi soluta reiciendis
                voluptatum laudantium nam!
              </p>
              <button
                className='btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOverlay(true);
                  handleCardButtonClick('body');
                }}
              >
                Daugiau
              </button>
            </div>
          </div>
          {/* <div className='card'>
        <div className='content'>
          <h2 className='title'>Title1</h2>
          <p className='copy'>content1</p>
          <button className='btn'>Button1</button>
        </div>
      </div> */}
          {/* <CardGroup className='w-100'>
            <Card key='1' onClick={(e) => console.log(e)}>
              <Card.Img variant='top' src={soundwave} />
              <Card.Body>
                <Card.Title>{lang.en.home.card.titles[0]}</Card.Title>
                <Card.Text>{lang.en.home.card.contents[0]}</Card.Text>
              </Card.Body>
            </Card>
            <Card key='2'>
              <Card.Img variant='top' src={universalCircle} />
              <Card.Body>
                <Card.Title>{lang.en.home.card.titles[1]}</Card.Title>
                <Card.Text>{lang.en.home.card.contents[1]}</Card.Text>
              </Card.Body>
            </Card>
            <Card key='3'>
              <Card.Img variant='top' src={virus} />
              <Card.Body>
                <Card.Title>{lang.en.home.card.titles[2]}</Card.Title>
                <Card.Text>{lang.en.home.card.contents[2]}</Card.Text>
              </Card.Body>
            </Card>
            <Card key='4'>
              <Card.Img variant='top' src={hypnotize} />
              <Card.Body>
                <Card.Title>{lang.en.home.card.titles[3]}</Card.Title>
                <Card.Text>{lang.en.home.card.contents[3]}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup> */}
        </section>
        {/* Cards end */}
      </div>
    </section>
  );
};

export default Services;
