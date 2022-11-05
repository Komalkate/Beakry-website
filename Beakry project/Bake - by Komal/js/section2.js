const HeroContaine = {
    heading: '<h1 class="heading1 py-2">Best Bake Here</h1>',
    text: '<span class="text-secundary spanHero py-2">Donec at massa nec sem eleifend fermentum.</span>',
    button: '<div><button class="buttonPink">LEARN MORE</button></div>'
}

export const section2 = document.createElement('section');
    section2.setAttribute('class','section2');

    const container = document.createElement('div');
    container.setAttribute('class','container text-center')

    container.innerHTML = ` ${HeroContaine.heading + HeroContaine.text + HeroContaine.button} `

section2.append(container)