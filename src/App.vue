<template>
  <div id="home" class="home" @click="baseClickHandle">
    <section class="hero">
      <div class="d-flex flex-column">
        <header>

          <nav class="navbar navbar-expand-lg navbar-dark alt-hover">
            <div class="d-lg-none nav-wrap d-flex justify-content-center">
              <a class="navbar-brand mx-auto d-lg-none" href="#"><img class="img-fluid" src="@/assets/Logo_top.png" alt="GT corporation"></a>
              <button class="navbar-toggler custom-toggler" @click="menuVisible = !menuVisible" type="button" data-toggle="collapse" aria-expanded="false" :disabled="menuVisible" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <div :class="{show: menuVisible}" class="mobile-menu-block flex-column">
                  <button class="close" @click.stop="menuVisible = !menuVisible"></button>
                  <a href="#" v-scroll-to="'#home'" class="menu-item">Главная</a>
                  <a href="#" v-scroll-to="'#our-objects'"  class="menu-item">Объекты</a>
                  <a href="#" v-scroll-to="'#services'"  class="menu-item">Услуги</a>
                  <a href="#" v-scroll-to="'#team'"  class="menu-item">Команда</a>
                  <a href="#" v-scroll-to="'#news'"  class="menu-item">Новости</a>
                  <a href="#" v-scroll-to="'#licenses'"  class="menu-item">Лицензии</a>
                  <a href="#" v-scroll-to="'#equipment'"  class="menu-item">Оборудование</a>
                  <a href="#" v-scroll-to="'#contacts'"  class="menu-item">Контакты</a>
                </div>
              </button>
            </div>
            <div class="d-lg-flex d-block w-100">
              <div class="collapse navbar-collapse mx-auto w-100 justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav w-100 justify-content-center align-items-center offset-fix">
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#home'">Главная</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#our-objects'">Объекты</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#services'">Услуги</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#team'">Команда</a>
                  <a class="navbar-brand d-none d-md-inline" href="#"><img src="@/assets/Logo_top.png" alt="GT corporation"></a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#news'">Новости</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#licenses'">Лицензии</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#equipment'">Оборудование</a>
                  <a class="nav-item nav-link color-main" href="#" v-scroll-to="'#contacts'">Контакты</a>
                </div>
              </div>
            </div>
          </nav>

        </header>
        <div class="container hero-body custom-width align-self-center mt-50">
          <h1 class="title-h1">Строительство и обслуживание
            гидротехнических сооружений</h1>
          <div class="desc">
            <p class="main-text">Основной вид деятельности компании «ГТ Север» ㅡ строительство гидротехнических сооружений.
            Мы занимаемся также мониторингом их состояния, ремонтом и реконструкцией.
          </p>
            <p class="main-text">
              Наши специалисты разрабатывают проекты, проводят необходимые экспертизы, исследования и согласования, строят и вводят объекты в эксплуатацию.</p>
          </div>
          <a class="gt-btn secondary-btn" href="#" @click="showInner()">Подробнее о компании</a>
        </div>
        <div class="gt-icon align-self-center">
          <img src="@/assets/arrow-bottom.svg" alt="">
          <ArrowBottom></ArrowBottom>
        </div>
      </div>
    </section>
    <section id="map-block" class="map-block">
      <div class="container mapscroll-block">
        <div class="scroll-bg d-block d-md-none">
          <vue-slider v-model="value" :tooltip="'none'" :drag-on-click="true" :process="false" :contained="true" :min="10" :max="80">
            <template v-slot:dot>
              <div class="scroll-pointer"></div>
            </template>
          </vue-slider>
        </div>
      </div>
      <svgmap :style="{'margin-left': param}" @click.stop="handleMapClick()"></svgmap>
      <div class="heading alt-color d-flex flex-column align-items-center">
        <h2 class="heading-title">Наши объекты на карте</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">«ГТ Север» успешно работает в самых разных точках Евразийского континента.</p>
      </div>
      <div class="logo-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo_sevmash.png" alt=""></div>
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo-zvezdochka.png" alt=""></div>
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo__mmtp.png" alt=""></div>
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo-luk.png" alt=""></div>
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo__globaleng.png" alt=""></div>
              <div class="col-lg-2 col-md-2 col-4 logo-item"><img class="img-fluid mx-auto logo" src="@/assets/logo__naryan.png" alt=""></div>
            </div>
          </div>
        </div>
      <MapItems :items="itemToShow" @map-items-close="closeMapItems"></MapItems>
    </section>
    <section id="our-objects" class="our-objects content-block d-flex flex-column">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Подробнее об объектах</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">Наши специалисты готовы работать в любых климатических зонах. Мы успешно реализовывали проекты в условиях Заполярья, вечной мерзлоты и тропического пустынного климата ОАЭ.</p>
      </div>
      <div class="objects">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo_1.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_1_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo_2.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_2_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo3.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_3_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo4.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_4_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo5.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_5_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="object">
                <img class="img-fluid hide-on-hover" src="@/assets/photo_6.png" alt="">
                <img class="img-fluid img-on-hover" src="@/assets/photo_6_hover.png" alt="">
                <div class="object-hover">
                  <h2 class="object-heading sub-heading alt-color">
                    Северодвинск.<br>Магнитоизмерительный стенд
                  </h2>
                  <p class="object-desc text-small alt-color">В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей.
                    В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                  <a class="gt-btn primary-btn align-self-center" href="#">Подробнее о компании</a>
                </div>
                <p class="object-caption d-lg-none">
                  Северодвинск. <br> Магнитоизмерительный стенд
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gt-icon align-self-center margin-bottom-top">
        <ArrowBottomBlue></ArrowBottomBlue>
      </div>
      <a class="gt-btn alter-btn align-self-center" href="#">Больше объектов</a>
    </section>
    <section id="numbers" class="numbers content-block">
      <div class="heading alt-color d-flex flex-column align-items-center">
        <h2 class="heading-title">Цифры о нас</h2>
        <div class="decorator mx-auto"></div>
      </div>
      <div class="container">
        <div class="row d-md-none d-block numbers-wrap">
          <slick ref="slicks2" :options="slickLicenses">
            <div class="col-lg-3 col-md-6">
              <div class="numbers-item d-flex flex-column align-items-center">
                <p class="heading">25</p>
                <div class="numbers-decorator mx-auto"></div>
                <p class="desc">лет успешной работы</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="numbers-item d-flex flex-column align-items-center">
                <p class="heading">350+</p>
                <div class="numbers-decorator mx-auto"></div>
                <p class="desc">высококлассных специалистов</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="numbers-item d-flex flex-column align-items-center">
                <p class="heading">376</p>
                <div class="numbers-decorator mx-auto"></div>
                <p class="desc">реализованных проектов</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="numbers-item d-flex flex-column align-items-center">
                <p class="heading">10+</p>
                <div class="numbers-decorator mx-auto"></div>
                <p class="desc">километров построенных береговых сооружений</p>
              </div>
            </div>
          </slick>
        </div>
        <div class="row d-none d-md-flex">
          <div class="col-lg-3 col-md-6">
            <div class="numbers-item d-flex flex-column align-items-center">
              <p class="heading">25</p>
              <div class="numbers-decorator mx-auto"></div>
              <p class="desc">лет успешной работы</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="numbers-item d-flex flex-column align-items-center">
              <p class="heading">350+</p>
              <div class="numbers-decorator mx-auto"></div>
              <p class="desc">высококлассных специалистов</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="numbers-item d-flex flex-column align-items-center">
              <p class="heading">376</p>
              <div class="numbers-decorator mx-auto"></div>
              <p class="desc">реализованных проектов</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="numbers-item d-flex flex-column align-items-center">
              <p class="heading">10+</p>
              <div class="numbers-decorator mx-auto"></div>
              <p class="desc">километров построенных береговых сооружений</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="services content-block d-flex flex-column block-bg">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Услуги</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">«ГТ Север» занимается гидротехническими сооружениями.
          Все наши услуги сертифицированы по европейским стандартам. </p>
      </div>
      <div class="container">
        <div class="wrap d-md-none d-block">
          <slick :options="slickLicenses">
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">01</p>
                </div>
                <p class="service-name" title="Строительство">Строительство</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">02</p>
                </div>
                <p class="service-name" title="Реконструкция и ремонт">Реконструкция и ремонт</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">03</p>
                </div>
                <p class="service-name" title="Сопровождение морских операций">Сопровождение морских операций</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">04</p>
                </div>
                <p class="service-name" title="Инженерные обследования">Инженерные обследования</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">05</p>
                </div>
                <p class="service-name" title="Подводно-технические работы">Подводно-технические работы</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">06</p>
                </div>
                <p class="service-name" title="Инжиниринг">Инжиниринг</p>
              </a>
            </div>
            <div class="col-12">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">07</p>
                </div>
                <p class="service-name" title="Испытательный центр">Испытательный центр</p>
              </a>
            </div>
          </slick>
        </div>
        <div class="wrap d-none d-lg-none d-md-block">
          <slick :options="slicksServicesMD">
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">01</p>
                </div>
                <p class="service-name" title="Строительство">Строительство</p>
              </a>
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">03</p>
                </div>
                <p class="service-name" title="Сопровождение морских операций">Сопровождение морских операций</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">02</p>
                </div>
                <p class="service-name" title="Реконструкция и ремонт">Реконструкция и ремонт</p>
              </a>
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">04</p>
                </div>
                <p class="service-name" title="Инженерные обследования">Инженерные обследования</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">05</p>
                </div>
                <p class="service-name" title="Подводно-технические работы">Подводно-технические работы</p>
              </a>
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">07</p>
                </div>
                <p class="service-name" title="Испытательный центр">Испытательный центр</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">06</p>
                </div>
                <p class="service-name" title="Инжиниринг">Инжиниринг</p>
              </a>
            </div>
          </slick>
        </div>
        <div class="wrap d-none d-lg-block">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">01</p>
                </div>
                <p class="service-name" title="Строительство">Строительство</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">02</p>
                </div>
                <p class="service-name" title="Реконструкция и ремонт">Реконструкция и ремонт</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">03</p>
                </div>
                <p class="service-name" title="Сопровождение морских операций">Сопровождение морских операций</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">04</p>
                </div>
                <p class="service-name" title="Инженерные обследования">Инженерные обследования</p>
              </a>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">05</p>
                </div>
                <p class="service-name" title="Подводно-технические работы">Подводно-технические работы</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">06</p>
                </div>
                <p class="service-name" title="Инжиниринг">Инжиниринг</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">07</p>
                </div>
                <p class="service-name" title="Испытательный центр">Испытательный центр</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a class="gt-btn alter-btn align-self-center" href="#">Подробнее об услугах</a>
    </section>
    <section id="team" class="team content-block d-flex flex-column ">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Наша команда</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">Текст о команде. Основным видом деятельности компании «ГТ Север» является строительство гидротехнических сооружений.</p>
      </div>
      <div class="container mb-35 d-md-none d-block">
        <slick ref="slick" :options="slickLicenses">
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
        </slick>
      </div>
      <div class="container mb-35 d-none d-lg-none d-md-block">
        <slick ref="slick" :options="slicksServicesMD">
          <div class="item-md">
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
          </div>
          <div class="item-md">
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
          </div>
          <div class="item-md">
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
          </div>
          <div class="item-md">
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
          </div>
          <div class="item-md">
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
            <div class="team-item text-center">
              <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
              <div class="team-item-desc">
                <h4 class="team-name">Имя Фамилия</h4>
                <p class="team-position">Должность</p>
              </div>
            </div>
          </div>
        </slick>
      </div>
      <div class="container mb-35 d-none d-lg-block">
        <slick ref="slick" :options="slicks">
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
          <div class="team-item text-center">
            <img class="img-fluid img-mask" src="@/assets/team1.png" alt="">
            <div class="team-item-desc">
              <h4 class="team-name">Имя Фамилия</h4>
              <p class="team-position">Должность</p>
            </div>
          </div>
        </slick>
      </div>
    </section>
    <section id="news" class="news content-block d-flex flex-column ">
      <div class="heading alt-color d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Новости компании</h2>
        <div class="decorator mx-auto"></div>
      </div>
      <div class="container">
        <div class="news-wrapper flex-column align-items-center d-md-none d-block">
          <slick ref="slick" :options="slickLicenses">
            <div class="main-news flex-shrink-0">
              <img class="img-fluid" src="@/assets/news_main.png" alt="">
              <div class="news-desc">
                <div class="top-desc d-flex justify-content-between">
                  <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                  <p class="news-date">02.08.2019</p>
                </div>
                <p class="news-preview">
                  В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                </p>
              </div>
            </div>
            <div class="main-news flex-shrink-0">
              <img class="img-fluid" src="@/assets/news_main.png" alt="">
              <div class="news-desc">
                <div class="top-desc d-flex justify-content-between">
                  <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                  <p class="news-date">02.08.2019</p>
                </div>
                <p class="news-preview">
                  В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                </p>
              </div>
            </div>
            <div class="main-news flex-shrink-0">
              <img class="img-fluid" src="@/assets/news_main.png" alt="">
              <div class="news-desc">
                <div class="top-desc d-flex justify-content-between">
                  <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                  <p class="news-date">02.08.2019</p>
                </div>
                <p class="news-preview">
                  В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                </p>
              </div>
            </div>
            <div class="main-news flex-shrink-0">
              <img class="img-fluid" src="@/assets/news_main.png" alt="">
              <div class="news-desc">
                <div class="top-desc d-flex justify-content-between">
                  <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                  <p class="news-date">02.08.2019</p>
                </div>
                <p class="news-preview">
                  В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                </p>
              </div>
            </div>
          </slick>
        </div>
        <div class="news-wrapper flex-column align-items-center d-none d-lg-none d-md-flex">
          <div class="main-news flex-shrink-0">
            <img class="img-fluid" src="@/assets/news_main.png" alt="">
            <div class="news-desc">
              <div class="top-desc d-flex justify-content-between">
                <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                <p class="news-date">02.08.2019</p>
              </div>
              <p class="news-preview">
                В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
              </p>
            </div>
          </div>
          <div class="news-list-wrapper col-md-12">
            <div class="news-list col-md-12">
              <slick :options="slickNews">
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="news-item-md">
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                  <div class="news-item d-flex col-md-12">
                    <img class="img-fluid" src="@/assets/news1.png" alt="">
                    <div class="news-desc">
                      <div class="top-desc d-flex justify-content-between">
                        <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                        <p class="news-date">02.08.2019</p>
                      </div>
                      <p class="news-preview">
                        В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                      </p>
                    </div>
                  </div>
                </div>
              </slick>
            </div>


<!--            <div class="news-shader"></div>-->
          </div>
        </div>
        <div class="news-wrapper d-none d-lg-flex">
          <div class="main-news flex-shrink-0">
            <img class="img-fluid" src="@/assets/news_main.png" alt="">
            <div class="news-desc">
              <div class="top-desc d-flex justify-content-between">
                <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                <p class="news-date">02.08.2019</p>
              </div>
              <p class="news-preview">
                В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
              </p>
            </div>
          </div>
          <div class="news-list-wrapper">
            <vue-custom-scrollbar :settings="settings" class="news-list">
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
              <div class="news-item d-flex">
                <img class="img-fluid" src="@/assets/news1.png" alt="">
                <div class="news-desc">
                  <div class="top-desc d-flex justify-content-between">
                    <h4 class="heading-news">Северодвинск.<br>Магнитоизмерительный стенд</h4>
                    <p class="news-date">02.08.2019</p>
                  </div>
                  <p class="news-preview">
                    В течение 2012–2013 годов в акватории ПО «Севмаш» был модернизован действующий стенд для обработки и измерения магнитных полей. В рамках данного проекта сотрудники «ГТ Север» занимались устройством подводной траншеи общей протяженностью 1 500 погонных метров на глубине от 14 до 26 метров...
                  </p>
                </div>
              </div>
            </vue-custom-scrollbar>
            <div class="news-shader"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="licenses" class="licenses content-block d-flex flex-column ">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Лицензии</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">Текст о команде. Основным видом деятельности компании «ГТ Север» является строительство
          гидротехнических сооружений.</p>
      </div>
      <div class="container mb-35">
        <slick ref="slicks2" :options="slickLicenses">
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
          <div class="lic-wrap">
            <img class="img-fluid img-lic" src="@/assets/license.png" alt="">
          </div>
        </slick>
      </div>
    </section>
    <section id="equipment" class="equipment content-block d-flex flex-column block-bg">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Оборудование</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">«ГТ Север» занимается гидротехническими сооружениями.
          Все наши услуги сертифицированы по европейским стандартам.</p>
      </div>
      <div class="container">
        <div class="wrap d-lg-none d-md-block">
          <slick :options="slickEquip">
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">01</p>
                </div>
                <p class="service-name" title="Механическое">Механическое</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">02</p>
                </div>
                <p class="service-name" title="Геодезическое">Геодезическое</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">03</p>
                </div>
                <p class="service-name" title="Гермокамеры">Гермокамеры</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">04</p>
                </div>
                <p class="service-name" title="Плавсредства">Плавсредства</p>
              </a>
            </div>
            <div class="col-md-6">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">05</p>
                </div>
                <p class="service-name" title="Измерительное">Измерительное</p>
              </a>
            </div>
          </slick>
        </div>
        <div class="wrap d-none d-lg-block">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">01</p>
                </div>
                <p class="service-name" title="Механическое">Механическое</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">02</p>
                </div>
                <p class="service-name" title="Геодезическое">Геодезическое</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">03</p>
                </div>
                <p class="service-name" title="Гермокамеры">Гермокамеры</p>
              </a>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">04</p>
                </div>
                <p class="service-name" title="Плавсредства">Плавсредства</p>
              </a>
            </div>
            <div class="col-lg-3 col-md-3">
              <a class="services-item d-flex margin-bottom">
                <div class="service-pointer flex-shrink-0">
                  <p class="number">05</p>
                </div>
                <p class="service-name" title="Измерительное">Измерительное</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a class="gt-btn alter-btn align-self-center" href="#">Об оборудовании</a>
    </section>
    <section id="contacts" class="contacts content-block d-flex flex-column ">
      <div class="heading d-flex flex-column align-items-center margin-bottom">
        <h2 class="heading-title">Контакты</h2>
        <div class="decorator mx-auto"></div>
        <p class="heading-desc main-text col-lg-6">«ГТ Север» занимается гидротехническими сооружениями.
          Все наши услуги сертифицированы по европейским стандартам. </p>
      </div>
      <div class="container">
        <div class="contact-item d-flex">
          <div class="col-lg-6 col-md-8 col-12">
            <div class="contact-map">
              <yandex-map :settings="settingsYmap" :coords="coords" :zoom="12">
                <ymap-marker
                        marker-id="1"
                        :coords="coords"
                />
              </yandex-map>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-12">
            <div class="contact-desc">
              <h4 class="contact-header">
                Центральный офис:
              </h4>
              <p class="contact-address">
                Россия, Архангельская обл, <br>
                г. Северодвинск, <br>
                ул. Железнодорожная, 37, <br>
                помещение 8-Н <br>
              </p>
              <p class="contact-phones">
                +7 (8184) 56-09-00, <br>
                +7 (8184) 56-20-90 <br>
                +7 (8184) 56-50-10 <br>
              </p>
              <p class="contact-mail">gtseverodvinsk@gtcorporation.com</p>
            </div>
          </div>
        </div>
        <div class="contact-item d-flex">
          <div class="col-lg-6 col-md-8 col-12">
            <div class="contact-map">
              <yandex-map :settings="settingsYmap" :coords="coords2" :zoom="11">
                <ymap-marker
                        marker-id="1"
                        :coords="coords2"
                />
              </yandex-map>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-12">
            <div class="contact-desc">
              <h4 class="contact-header">
                Обособленное подразделение <br>
                в Мурманске:
              </h4>
              <p class="contact-address">
                Россия, Мурманская обл., <br>
                г. Мурманск, <br>
                ул. Софьи Перовской, д. 17, <br>
                Офис 528 <br>
              </p>
              <p class="contact-phones">
                +7 (8152) 45-64-99
              </p>
              <p class="contact-mail">gtseverodvinsk@gtcorporation.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="gt-footer content-block">
      <div class="container">
        <div class="footer-menu">
          <nav class="navbar d-none d-lg-block navbar-expand-xl navbar-dark">
            <a class="navbar-brand d-none" href="#">Brand</a>
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavFooter" aria-controls="navbarNavFooter" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-md-flex d-block w-100">
              <div class="collapse navbar-collapse mx-auto w-100 justify-content-center" id="navbarNavFooter">
                <div class="navbar-nav w-100 justify-content-between align-items-center offset-fix">
                  <a class="nav-item nav-link color-main" href="#">Главная</a>
                  <a class="nav-item nav-link color-main" href="#">Объекты</a>
                  <a class="nav-item nav-link color-main" href="#">Услуги</a>
                  <a class="nav-item nav-link color-main" href="#">Команда</a>
                  <a class="navbar-brand d-none d-md-inline" href="#"><img src="@/assets/Logo_top.png" alt="GT corporation"></a>
                  <a class="nav-item nav-link color-main" href="#">Новости</a>
                  <a class="nav-item nav-link color-main" href="#">Лицензии</a>
                  <a class="nav-item nav-link color-main" href="#">Оборудование</a>
                  <a class="nav-item nav-link color-main" href="#">Команда</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="footer-credits d-flex">
          <div class="logo-footer d-lg-none col-md-5">
            <img class="img-fluid footer-logo" src="@/assets/logo__footer.png" alt="">
          </div>
          <div class="wrap">
            <p class="footer-credits-text">
              &copy; Правовая информация. За время существования наша компания реализовала 376 проектов. Сотрудники компании успешно трудились и выполняли поставленные задачи от знойного заполярья и вечной мерзлоты до изнуряющего солнца в ОАЭ.
            </p>
            <p class="footer-credits-text">
              Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта в эксплуатацию.
              Также компания занимается мониторингом технического состояния гидротехнических сооружений, производит их ремонт и реконструкцию.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div v-show="backToTop" class="backToTop">
      <a href="#" v-scroll-to="'#home'">
        <ArrowTop></ArrowTop>
      </a>
    </div>
    <ContentTemplate v-show="showContent" @close-inner="closeInner()"></ContentTemplate>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Slick from 'vue-slick';
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  import svgmap from '@/assets/gt-map-01.svg'
  import ArrowBottom from '@/assets/arrow-bottom.svg';
  import ArrowBottomBlue from '@/assets/arrow-bottom_blue.svg';
  import ArrowTop from '@/assets/arrow-top.svg';
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/default.css'
  import ContentTemplate from '@/views/ContentTemplate'
  import MapItems from '@/views/MapItems'
  export default {
    name: 'home',
    components: { MapItems, Slick, ContentTemplate, vueCustomScrollbar, yandexMap, ymapMarker, svgmap, ArrowTop, ArrowBottom, ArrowBottomBlue, VueSlider },
    data() {
      return {
        itemToShow: [],
        mapItems: {
          'murmansk': [
            {
              image: 'map-item-photo.png',
              title: 'Северодвинск',
              desc: 'Выполнение работ по строительству и капитальному ремонту гидротехнических сооружений градообразующих предприятий ОАО «Севмаш» и АО «Центр cудоремонта «Звездочка»...',
              link: '#'
            },
            {
              image: 'map-item-photo.png',
              title: 'Северодвинск',
              desc: 'Выполнение работ по строительству и капитальному ремонту гидротехнических сооружений градообразующих предприятий ОАО «Севмаш» и АО «Центр cудоремонта «Звездочка»...',
              link: '#'
            },
            {
              image: 'map-item-photo.png',
              title: 'Северодвинск',
              desc: 'Выполнение работ по строительству и капитальному ремонту гидротехнических сооружений градообразующих предприятий ОАО «Севмаш» и АО «Центр cудоремонта «Звездочка»...',
              link: '#'
            }
          ],
          'other': [
            {
              image: 'map-item-photo.png',
              title: 'Северодвинск',
              desc: 'Выполнение работ по строительству и капитальному ремонту гидротехнических сооружений градообразующих предприятий ОАО «Севмаш» и АО «Центр cудоремонта «Звездочка»...',
              link: '#'
            }
          ]
        },
        showContent: false,
        backToTop: false,
        value: 10,
        menuVisible: false,
        svgmap,
        coords2: [68.969250, 33.083766],
        coords: [64.560303, 39.860288],
        settingsYmap: {
          apiKey: '8e0e8ca8-fa98-4ace-8490-bd2ea53f93ff',
          lang: 'ru_RU',
          coordorder: 'latlong',
          version: '2.1',
        },
        showNav: false,
        settings: {
          maxScrollbarLength: 20
        },
        ops: {
          vuescroll: {},
          scrollPanel: {},
          rail: {
            opacity: 0,
            size: '20px',
            gutterOfEnds: '32px',
            gutterOfSide: '2px',
          },
          bar: {
            background: '#E3A600',
            opacity: 1,
            specifyBorderRadius: '50%',
            minSize: 0.1,
            size: '20px',
            disable: false,
            keepShow: true
          }
        },
        slickNumbers: {
          //options can be used from the plugin documentation
          slidesToShow: 5,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        },
        slickEquip: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: true,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
          ]
        },
        slicksServicesMD: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: true,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
        },
        slickNews: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: true,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev-white-nh.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-next-white-nh.svg" alt=""></button>`,
        },
        slicks: {
          //options can be used from the plugin documentation
          slidesToShow: 3,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
        },
        slickLicenses: {
          //options can be used from the plugin documentation
          slidesToShow: 5,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          prevArrow: `<button type="button" class="slick-prev"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          nextArrow: `<button type="button" class="slick-next"><img src="@/assets/arrow-prev.svg" alt=""></button>`,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        }
      }
    },
    computed: {
      param() {
        return `-${this.value}%`
      }
    },
    methods: {
      baseClickHandle() {
        if (this.itemToShow.length) {
          this.itemToShow = [];
        }
      },
      closeMapItems() {
        this.itemToShow = []
      },
      handleMapClick() {
        const id = event.target.id.replace('gt-map-01_svg__', '');
        this.itemToShow = this.mapItems[`${id}`] || [];
      },
      handleScroll(){
        this.backToTop = window.pageYOffset >= 600 && window.innerWidth >= 992;
      },
      showInner() {
        this.showContent = true;
        document.body.classList.add('modal-open');
      },
      closeInner() {
        this.showContent = false;
        document.body.classList.remove('modal-open');
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
  /*@import "vars";*/
  /*html {*/
  /*  font-family: 'Open Sans', sans-serif !important;*/
  /*}*/
  /*.hero {*/
  /*  background-image: url("assets/header__block.png");*/
  /*  background-position: center center;*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: cover;*/
  /*  position: relative;*/
  /*  height: 810px;*/
  /*}*/
  /*.color-main{*/
  /*  color: $white-color!important;*/
  /*}*/
  /*.nav-link {*/
  /*  &:hover {*/

  /*   }*/
  /*}*/
</style>

<!--<template>-->
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
