
//intro 텍스트
const intro = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 0,
        onLeave: function(){
            $('.intro__desc--scrolldown').addClass('hide')
        },
        onEnterBack: function(){
            $('.intro__desc--scrolldown').removeClass('hide')
        }
    },
    
});

intro.to('.intro__dim', { opacity: 1})
intro.to('.intro__desc--text.first', { opacity: 1},"<")
intro.to('.intro__desc--text.first', { opacity: 0,
    onStart: function(){
        $('.header').addClass('show')
    },
    onReverseComplete: function(){
        $('.header').removeClass('show')
    }
}, )

intro.to('.intro__desc--text.second', { opacity: 1})
intro.to('.intro__desc--text.second', { opacity: 0}, )

intro.to('.intro__desc--text.third', { opacity: 1})
intro.to('.intro__desc--text.third', { opacity: 0}, )

intro.to('.intro__desc--text.fourth', { opacity: 1})


//showcase intro텍스트 나타나기
const showcaseIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.showcase',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
    }
});
showcaseIntro
.to('.showcase__dim', { opacity: 1})
.to('.showcase__intro--desc', {opacity: 1},"<")
.to('.showcase__intro--text.top', {xPercent: 100})
.to('.showcase__intro--text.bottom', {xPercent: -100}, "<")
.to('.showcase__dim', { opacity: 0}, "<")
.to('.showcase__intro--desc', {opacity: 0})

.to('.showcase__img-list img:nth-child(3)', {  'clip-path': 'inset(0% 0% 100% 0%)'})
.to('.showcase__img-list img:nth-child(2)', {  'clip-path': 'inset(0% 0% 100% 0%)'})

.to('.showcase__dim', { opacity: 1})
.to('.showcase__bottom--text', {opacity: 1}, "<")


//header 색상반전
ScrollTrigger.create({
    trigger: '#challenge1',
    start: 'top 10%',
    endTrigger: '.possibility',
    end: '0% 50%',
    toggleClass: {
        targets: '.header',
        className: 'dark'
    }
})
//header 색상반전2
ScrollTrigger.create({
    trigger: '#challenge3',
    start: 'top 10%',
    onEnter: function() {
        $('.header').addClass('dark');
    },
})
//배경 색상반전
ScrollTrigger.create({
    trigger: '.possibility',
    start: 'top 50%',
    endTrigger: '.challenge-asset',
    end: '0% 50%',
    toggleClass: {
        targets: 'body',
        className: 'dark'
    }
})

//prove 박스&텍스트 애니메이션
$('.prove').each(function(){
    const prove = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 0,
        }
    })
    prove.to($(this),{
        '--progress': 1
    })
})

//possibility 가로 스크롤
const possibility = gsap.timeline({
    scrollTrigger: {
        trigger: '.possibility',
        start: 'top top',
        end: '100% 100%',
        scrub: 0,
        inValidateOnRefresh: true,
    }
});
possibility
.to('.possibility .slide__inner', {
    xPercent:-100,
    x:function(){
        return window.innerWidth-100
    }
});

//banner 박스 애니메이션 & after 백드롭필터 & 텍스트 나타나기
const banner = gsap.timeline({
    scrollTrigger: {
        trigger: '.banner',
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: 0,
    }
});
banner
.from('.banner__item.first',{xPercent:-50},0)
.from('.banner__item.second',{xPercent:-50},0)
.from('.banner__item.third', {xPercent:50},0)
.to('.banner__title', {opacity: 1,
    delay:1,
    onStart:function(){
        $('.banner').addClass('blur')
    },
    onReverseComplete:function(){
        $('.banner').removeClass('blur')
    }
});

//service card 가로 스크롤
const service1Text1 = $('#service1 .slide__head').outerWidth();

const service01 = gsap.timeline({
    scrollTrigger: {
        trigger: '#service1',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 0,
        inValidateOnRefresh: true
    }
});
service01
.to('#service1 .slide__inner',1, {
    x: function() {
        return service1Text1*-1
    }
    })
.to('#service1 .card__item:nth-child(2)',1, {
    xPercent:-100, x:-40
},'a')
.to('#service1 .card__item:nth-child(3)',1, {
    xPercent:-100*2, x:-40*2
},'a')
.to('#service1 .card__item:nth-child(4)',1, {
    xPercent:-100*3, x:-40*3
},'a')

.to('#service1 .card__item-box-ico img.before',0.5,{opacity: 0},'b-=1')
.to('#service1 .card__item-box-ico img.after',0.5,{opacity: 1},'b-=0.5')

gsap.set('#service2 .service__main-cardarea',{autoAlpha: 0})

ScrollTrigger.create({
    trigger: '#service2',
    start: 'top 0%',
    end: '100% 0%',
    onEnter: function(){
        gsap.set('.service .slide__body', {autoAlpha: 0})
        gsap.set('.service__main-cardarea',{autoAlpha: 1})
    },
    onLeaveBack: function(){
        gsap.set('.service .slide__body', {autoAlpha: 1})
        gsap.set('.service__main-cardarea',{autoAlpha: 0})
    }
})

//service3
gsap.set('#service3 .main--title-card02',{autoAlpha: 0})

ScrollTrigger.create({
    trigger: '#service3',
    start: 'top top',
    end: '100% 0%',
    onEnter: function(){
        gsap.set('#service2 .service__main-cardarea', {autoAlpha: 0})
        gsap.set('#service3 .main--title-card02',{autoAlpha: 1})
    },
    onLeaveBack: function(){
        gsap.set('#service2 .service__main-cardarea', {autoAlpha: 1})
        gsap.set('#service3 .main--title-card02',{autoAlpha: 0})
    }
})
const service03 = gsap.timeline({
    scrollTrigger: {
        trigger: '#service3',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 0,
        inValidateOnRefresh: true
    }
});
service03
.to('#service3 .card__item:nth-child(2)',1, {
    xPercent:-100, x:-40
},'a')
.to('#service3 .card__item:nth-child(3)',1, {
    xPercent:-100*2, x:-40*2
},'a')
.to('#service3 .card__item:nth-child(4)',1, {
    xPercent:-100*3, x:-40*3
},'a')

//service4
gsap.set('#service4 .main--title-card03',{autoAlpha: 0})
gsap.set('#service4 .service__main--title-card::before', {opacity:0})

ScrollTrigger.create({
    trigger: '#service4',
    start: 'top top',
    end: '100% 0%',
    onEnter: function(){
        gsap.set('#service3 .slide02__card__list', {autoAlpha: 0})
        gsap.set('#service4 .main--title-card03',{autoAlpha: 1})
        gsap.set('#service4 .service__main--title-card::before', {opacity:1})
    },
    onLeaveBack: function(){
        gsap.set('#service3 .slide02__card__list', {autoAlpha: 1})
        gsap.set('#service4 .main--title-card03',{autoAlpha: 0})
        gsap.set('#service4 .service__main--title-card::before', {opacity:0})
    }
})


//slide-asset down바 나타나기
const slideasset = gsap.timeline({
    scrollTrigger: {
        trigger: '.slide-asset',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 0,
        markers: true,
    }
});
slideasset
.to('.slide-asset .slide__inner', 1,{x: -1000}, 0)
.to('.slide-asset .down', 1,{opacity: 1, visibility: 'visible', y: -50}, 0)
.to('.slide-asset .down__title--item.first',0.5, {opacity: 0})
.to('.slide-asset .down__title--item.second',0.5, {opacity: 1},1)
.to('.slide-asset .down', {opacity: 0},2)
 

//creator 텍스트 나타나기
const creatorIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.creator',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
});

creatorIntro.to('.creator__intro', { opacity: 1, duration: 1 });
creatorIntro.to('.creator__intro', { opacity: 0, duration: 1 }, '+=0.5');


//creator-slide
const creatorslide = gsap.timeline({
    scrollTrigger: {
        trigger: '.creator__slide',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 1,
    }
});
creatorslide
.to('.creator__slide .creator__slide__inner', {x: -1000},0);

//join 
const join = gsap.timeline({
    scrollTrigger: {
        trigger: '.ground',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
    }
});
join
.from('.join', {opacity: 0, y: 100},0)
.to('.join',{opacity: 1, y: 0}, 0);

//join x축으로 흐르는 애니메이션
const join02 = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    ease: 'none',
})
join02.to('.join__content-inner',{
    x:'-100%',
    stagger: 0.1,
    ease: 'none',
    duration: 20,
});