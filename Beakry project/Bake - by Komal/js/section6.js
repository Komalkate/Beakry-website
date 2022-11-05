
const row1 = ['<div class="col-lg-6 col-md-6 gallery-grids"><figure class="effect-marley gap-gap"><img src="images/g1.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g1.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>','<div class="col-lg-3 col-md-3 col-sm-6 gallery-grids"><figure class="effect-marley gap-gap"><img src="images/g2.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g2.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>','<div class="col-lg-3 col-md-3 col-sm-6 gallery-grids"><figure class="effect-marley gap-gap"><img src="images/g3.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g3.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>']

const row2 = [
    '<div class="col-lg-3 col-md-3 col-sm-6 gallery-grids"><figure class="effect-marley gap-gap2"><img src="images/g4.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g4.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>',
    '<div class="col-lg-3 col-md-3 col-sm-6 gallery-grids"><figure class="effect-marley gap-gap2"><img src="images/g5.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g5.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>',
    '<div class="col-lg-6 col-md-6 gallery-grids"><figure class="effect-marley"><img src="images/g6.jpg" alt="" class="img-fluid"><figcaption><h2 class=" text-uppercase">our<span class="fw-bold">Gallery</span></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p><a href="images/g6.jpg" class="gallery-box" data-lightbox="example-set" data-title=""></a></figcaption></figure></div>'
]

export const section6 = document.createElement('section');
    section6.setAttribute('class','section6')

    const haeding = document.createElement('div');
    haeding.setAttribute('class','heading  text-center py-5')
    haeding.innerHTML = `<h2 class="display-5 fw-bold">OUR GALLERY</h2>`

    const divRow = document.createElement('div');
    divRow.setAttribute('class','row');
    divRow.innerHTML = row1[0]+row1[1]+row1[2]
    
    const div2Row = document.createElement('div');
    div2Row.setAttribute('class','row');
    div2Row.innerHTML = row2[0]+row2[1]+row2[2]


section6.append(haeding,divRow,div2Row)
