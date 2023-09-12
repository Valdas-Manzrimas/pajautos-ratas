import React from 'react';

const Services = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id='services'
      className={'section ' + (darkTheme ? 'bg-dark-2' : '')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-white-50  opacity-1' : 'text-light  opacity-4')
            }
          >
            Pajautos ratas
          </h2>
          <p
            className={
              'text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            Kas jūsų laukia?
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className='row'>
          <div className='col-lg-11 mx-auto'>
            <div className={'row mb-4 ' + (darkTheme ? 'text-white' : '')}>
              <p>
                Tyrinėsime santykį su savo kūnu - jo siunčiamas žinutes, taip
                pat galimybes atpažinti ir išbūti su pačiais įvairiausiais
                kylančiais jausmais, prisiliesime prie giliausiai slypinčių
                poreikių ir empatijos sau bei kitiems temų.
              </p>
              <br />
              <p>
                Mūsų supratimu - žmogus tai vientisa kūno, jausmų, poreikių,
                minčių, įsitikinimų ir giliai slypinčių vertybių visuma. Manome,
                kad prisilietus ir saugioje grupės aplinkoje tyrinėjant savo
                vidinį pasaulį kaip visumą atsiveria galimybės darniai apjungti
                skirtingas asmenybės dalis, atrasti savo vidinę ašį ir
                vientisumą. Augant sąmoningumui savo vidinio pasaulio atžvilgiu,
                dažnai keičiasi ir mūsų patiriamas išorinis pasaulis.
              </p>
              <br />
            </div>
            <div className='row mb-4'>
              <div className='col-md-6'>
                <span
                  className={'text-3 fw-600 ' + (darkTheme ? 'text-white' : '')}
                >
                  Kviečiame sau priimtinu tempu:
                </span>
                <ul
                  className={
                    'mt-2 list-style-1 ' + (darkTheme ? 'text-white-50' : '')
                  }
                >
                  <li>Pažinti save per kūno patirtį;</li>
                  <li>
                    Atskleisti sau, kas buvo ignoruojama, išstumta,
                    nepripažinta, pamiršta;
                  </li>
                  <li>Patirti save kaip autentišką visumą;</li>
                  <li>Dalintis tuo, kas svarbu;</li>
                  <li>Atrasti palaikančius vidinius ir išorinius resursus;</li>
                  <li>Būti pamatytai(-am) ir išgirstai(-am);</li>
                  <li>
                    Sulėtėti, būti dabarties momente, dėmesingai kontaktuoti su
                    realybe;
                  </li>
                  <li>Tyrinėti santykį su Savimi, Kitu ir Pasauliu.</li>
                </ul>
              </div>
              <div className='col-md-6'>
                <span
                  className={'text-3 fw-600 ' + (darkTheme ? 'text-white' : '')}
                >
                  Susitikimų ciklo temos:
                </span>
                <ul
                  className={
                    'mt-2 list-style-1 ' + (darkTheme ? 'text-white-50' : '')
                  }
                >
                  <li>Susipažinimo ratas</li>
                  <li>Ryšis su savo kūnu ir įsižeminimas</li>
                  <li>Kūno pojūčių tyrinėjimas</li>
                  <li>Savo ribų atpažinimas</li>
                  <li>Spalvotas jausmų pasaulis</li>
                  <li>Vidinio pasaulio dialogas</li>
                  <li>Empatiškas santykis su savimi ir kitu</li>
                  <li>Pusiausvyros ir vientisumo pajautimas</li>
                  <li>Poreikių kalba ir kaip juos išgirsti</li>
                  <li>Ribojantys įsitikinimai ir jų perkeitimas</li>
                  <li>Giluminės vertybės - kas man išties brangu</li>
                  <li>Baigiamasis ratas - kūno ir širdies namai</li>
                </ul>
              </div>
            </div>
            <div className={'row ' + (darkTheme ? 'text-white' : '')}>
              <p>
                Visi drauge kursime bendrą buvimą grupėje. Jei susitikimų eigoje
                taptų aktualios kitos temos arba ties tam tikra tema norėsis
                pabūti ilgėliau, šis sąrašas gali keistis.
              </p>
              <p>
                Šios praktikos padeda sluoksnis po sluoksnio atrasti save ir
                pažinti save autentišką, tikrą. Auga pasitikėjimas giliu vidiniu
                žinojimu, stiprėja intuityvumas ir kūrybingumas. Taip pat
                plečiasi galimybių laukas padėti sau.{' '}
              </p>
              <p>
                Prieš grupės pradžią kiekvieną dalyvį kviesime nemokamam
                individualiam susitikimui, kurio metu susipažinsime ir aptarsime
                abipusius poreikius bei lūkesčius.
              </p>
              <p>Vienos grupinės sesijos kaina asmeniui – 20 Eur.</p>
              <p>
                Mokant už visas 12 savaičių iš karto taikoma 40 Eur nuolaida
                (vieno susitikimo kaina – 17 Eur).
              </p>
              <p>
                Kad mokestis nebūtų kliūtis asmeniniam augimui, kainą susitikus
                galime derinti.
              </p>
              <p>
                Susitikimai vyks antradieniais, nuo rugsėjo 19 d., 19:00 – 21:00
                valandomis, Lazdynų g. 21, Vilnius.
              </p>
            </div>

            {/* {services.length > 0 &&
                services.map((service, index) => (
                  <div className='col-md-6' key={index}>
                    <div className='featured-box style-3 mb-5'>
                      <div
                        className={
                          'featured-box-icon text-primary  shadow-sm rounded ' +
                          (darkTheme ? 'bg-dark-1' : 'bg-white')
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? 'text-white' : ''}>
                        {service.name}
                      </h3>
                      <p
                        className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))} */}
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
