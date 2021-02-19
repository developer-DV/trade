$(function () {

    $('.review__slider').slick({
        infinite: false,
        prevArrow: '<button type="button" class="slider-btn slider-btn__left"><img src="/images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn__right"><img src="/images/arrow-next.svg" alt="arrow-next"></button>',
        adaptiveHeight: true,
    })


    $('.questions__item-title').on('click', function () {
        if ($(this).parent().hasClass('questions__item--active')) {
            $(this).parent().removeClass('questions__item--active')
        }
        else {
            $('.questions__item').removeClass('questions__item--active')
            $(this).parent().addClass('questions__item--active')
        }
    })

});


