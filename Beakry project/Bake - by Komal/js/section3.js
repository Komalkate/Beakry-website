const secOne = [
    '<div class="col-md-3 col-lg-3 purPle"><h3 class="py-2 text-light">Tradition</h3><p class="spanHero">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p></div>',
    '<div class="col-md-6 col-lg-6"><img src="../images/ab1.jpg" class="w-100 img-fluid"></div>',
    '<div class="col-md-3 col-lg-3 Pink"><h3 class="py-2 text-light">Creativity</h3><p class="spanHero">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolors</p></div>'
]

const secTwo = [
    '<div class="col-md-6 col-lg-6 LightPink"><h3 class="py-2 text-light">What We Bake Best For You</h3><p class="spanHero">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorL orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p></div>',
    '<div class="col-md-3 col-lg-3"><img src="../images/ab2.jpg" class="w-100 img-fluid"></div>',
    '<div class="col-md-3 col-lg-3 LightPurple"><h3 class="py-2 text-light">Quality</h3><p class="spanHero">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.</p></div>'
]

const secThree = [
    '<div class="col-md-3 col-lg-3"><img src="../images/ab3.jpg" class="w-100 img-fluid"></div>',
    '<div class="col-md-3 col-lg-3 purPle"><h3 class="py-2 text-light">Tasty Cakes</h3><p class="spanHero">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.</p></div>',
    '<div class="col-md-6 col-lg-6"><img src="../images/ab4.jpg" class="w-100 img-fluid"></div>'
]

export const section3 = document.createElement('section');
section3.setAttribute('class', 'section3 ');

const sec3Div = document.createElement('div')
sec3Div.setAttribute('class', 'text-center')

const Div1 = document.createElement('div');
Div1.setAttribute('class', 'row g-0')
Div1.innerHTML = secOne[0] + secOne[1] + secOne[2]

const Div2 = document.createElement('div');
Div2.setAttribute('class', 'row g-0')
Div2.innerHTML = secTwo[0] + secTwo[1] + secTwo[2]

const Div3 = document.createElement('div');
Div3.setAttribute('class', 'row g-0')
Div3.innerHTML = secThree[0] + secThree[1] + secThree[2]

sec3Div.append(Div1, Div2, Div3);
section3.append(sec3Div)