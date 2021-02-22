$(function () {

    $('.review__slider').slick({
        infinite: false,
        prevArrow: '<button type="button" class="slider-btn slider-btn__left"><img src="./images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn__right"><img src="./images/arrow-next.svg" alt="arrow-next"></button>',
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


    $('.menu__btn').on('click', function () {
        $(this).next().toggleClass('menu__list--active')
    })




    const form = document.querySelector('.contacts__form')
    form.addEventListener('submit', sendForm)

    // Отправка формы
    function sendForm(e) {
        e.preventDefault()

        let error = formValidate()

        if (error === 0) {
            alert('Your message has been sent!')
            location.reload()
        }
    }

    // Валидация формы
    function formValidate() {
        let error = 0

        let name = document.getElementsByName('name')[0]
        let email = document.getElementsByName('email')[0]
        let textarea = document.getElementsByName('textarea')[0]

        let elementsValidate = [name, email, textarea]

        for (const input of elementsValidate) {
            formRemoveError(input)

            if (input.classList.contains('contacts__form-email')) {
                if (emailTest(input)) {
                    input.classList.add('contacts__form-error')
                    input.after(createErrorMessage('Incorrect email type'))
                    error++
                } else {
                    inputRequired(input)
                }
            }
            else {
                inputRequired(input)
            }
        }

        function inputRequired(input) {
            if (input.value == '') {
                input.classList.add('contacts__form-error')
                input.after(createErrorMessage('Required field'))
                error++
            }
            else {
                input.classList.add('contacts__form-valide')
            }
        }

        return (error);
    }

    // Проверка почты
    function emailTest(input) {
        return !/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i.test(input.value)
    }

    // Cоздание сообщения с ошибкой
    function createErrorMessage(message) {
        let p = document.createElement('p')
        p.classList.add('contacts__error-message')
        p.innerHTML = message
        return p
    }

    // Удаление сообщений с ошибкой
    function formRemoveError(input) {
        if ($(input).next('p')[0]) {
            input.classList.remove('contacts__form-error')
            $(input).next('p')[0].remove()
        }
    }
});