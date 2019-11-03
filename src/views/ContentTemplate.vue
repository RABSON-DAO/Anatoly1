<template>
    <transition name="slide">
        <div class="inner-fader">
            <div class="inner-page">
                <div class="breadcrumbs-block padding-inner">
                    <a class="crumb-item" href="#">Главная</a>
                    <a class="crumb-item" href="#">Подробнее о компании</a>
                    <span class="crumb-item active">Название</span>
                </div>
                <vue-custom-scrollbar :settings="settings" class="ps--active-y padding-inner scroll-area inner-page-content">
                        <div class="inner-heading">
                            <h2 class="inner-title">Заголовок</h2>
                            <div class="inner-decorator"></div>
                        </div>
                            <section class="sub">
                                <h3 class="inner-subhead">Подзаголовок</h3>
                                <div class="inner-nav">
                                    <ul>
                                        <li>Пункт</li>
                                        <li>Пункт</li>
                                        <li>Пункт</li>
                                        <li>Пункт</li>
                                    </ul>
                                </div>
                                <div class="content-body">
                                    <p class="inner-text">
                                        Текст. Основным видом деятельности компании «ГТ Север» является строительство гидротехнических сооружений.
                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                    </p>
                                    <p class="inner-text">
                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                    </p>
                                    <div class="main-img">
                                        <img class="img-fluid w-100" src="@/assets/image-content-main.png" alt="">
                                    </div>
                                    <p class="inner-text">
                                        Текст. Основным видом деятельности компании «ГТ Север» является строительство гидротехнических сооружений.
                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                    </p>
                                    <p class="inner-text">
                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                    </p>

                                </div>
                            </section>
                            <section class="sub">
                                <h3 class="inner-subhead">Слайды</h3>
                                <div class="content-body">
                                    <div class="d-md-none d-block hidden-slides">
                                        <slick ref="slicks3" :options="slickLicensez">
                                            <div class="slide-item">
                                                <img class="img-fluid" src="@/assets/image-content-slide.png" alt="">
                                            </div>
                                            <div class="slide-item">
                                                <img class="img-fluid" src="@/assets/image-content-slide.png" alt="">
                                            </div>
                                            <div class="slide-item">
                                                <img class="img-fluid" src="@/assets/image-content-slide.png" alt="">
                                            </div>
                                            <div class="slide-item">
                                                <img class="img-fluid" src="@/assets/image-content-slide.png" alt="">
                                            </div>
                                        </slick>
                                        <div class="right-lighter"></div>
                                    </div>
                                    <div class="row d-none d-md-flex">
                                        <div class="col-lg-4 col-md-4">
                                            <img class="img-fluid w-100" src="@/assets/image-content-slide.png" alt="">
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <img class="img-fluid w-100" src="@/assets/image-content-slide.png" alt="">
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <img class="img-fluid w-100" src="@/assets/image-content-slide.png" alt="">
                                        </div>
                                    </div>
                                    <p class="inner-text">
                                        Текст. Основным видом деятельности компании «ГТ Север» является строительство гидротехнических сооружений.
                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                    </p>
                                    <p class="inner-text">

                                        Специалисты компании разрабатывают проект, проводят необходимые экспертизы, исследования и согласования, осуществляют строительство и ввод объекта.
                                </p>
                                    <p class="inner-text">

                                        Мы смогли собрать коллектив способный решать самые сложные задачи в установленные сроки с европейским качеством. На данный момент в компании трудятся более 60 сотрудников ИТР и 250 рабочих.
                                </p>
                                    <p class="inner-text">

                                        Специфика компании — выполнение работ в условиях Крайнего Севера, для этого существует парк соответствующего оборудования и персонал с многолетним стажем работы. Компания готова осуществить любой проект от момента проектирования до конечной его реализации.
                                    </p>
                                </div>
                            </section>
                </vue-custom-scrollbar>
                <button class="close-btn" @click="$emit('close-inner')">
                    <InnerClose></InnerClose>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import Slick from 'vue-slick';
    import InnerClose from '@/assets/inner-close.svg'
    export default {
        name: "ContentTemplate",
        components: { vueCustomScrollbar, Slick, InnerClose },
        data() {
            return {
                slickLicensez: {
                    //options can be used from the plugin documentation
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    accessibility: true,
                    adaptiveHeight: false,
                    arrows: false,
                    dots: false,
                    draggable: true,
                    edgeFriction: 0.30,
                    swipe: true,
                    prevArrow: `<button type="button"></button>`,
                    nextArrow: `<button type="button"></button>`,
                },
                settings: {
                    maxScrollbarLength: 20,
                    suppressScrollX: true
                },
            }
        }
    }
</script>

<style scoped>

</style>