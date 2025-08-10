const generateRandomElements = () => {
    const container = document.getElementById('floating-elements')

    const element = document.createElement('div')
    element.className = 'floating-element'

    const size = Math.random() * 60 + 20 // Random size between 20px and 80px
    element.style.width = `${size}px`
    element.style.height = `${size}px`
    element.style.left = Math.random() * 100 + 'vw'
    element.style.animationDuration = (Math.random() * 10 + 13) + 's'

    container.appendChild(element)

    setTimeout(() => {
        element.remove()
    }, 20000)
}

const typingEffect = () => {
    const HELLO_TEXT = '// Hello world, I\'am Rollan - Frontend Web Developer'

    let textIndex = 0
    const element = document.getElementById('hello-text')
    let isTyping = true;

    function typeText() {
        if (isTyping) {
            if (textIndex < HELLO_TEXT.length) {
                element.innerHTML += HELLO_TEXT[textIndex];
                textIndex++;
            } else {
                isTyping = false;
                setTimeout(() => {
                    element.innerHTML = '';
                    textIndex = 0;
                    isTyping = true;
                }, 2000);
            }
        }
    }

    setInterval(typeText, 100);
}

const handlePageScroll = () => {
    let positionY = window.scrollY
    const header = document.getElementById('header')

    window.addEventListener('scroll', () => {
        const currentPositionY = window.scrollY

        if (currentPositionY > positionY) {
            header.style.top = '-200px'
        } else {
            header.style.top = '0'
        }
        positionY = currentPositionY
    })
}

setInterval(generateRandomElements, 2000)
typingEffect()

handlePageScroll()
