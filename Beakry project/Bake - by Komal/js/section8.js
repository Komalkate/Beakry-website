
    const arr = ['<div class="textagile"><p><span class="fas fa-quote-left agile-side-by"></span> At vero eos et accusam kasd gubergren sed diam aliquyamerat, sed voluptua laboreet doloremagnal aliquyamerat, sed diam voluptua.<span class="fas fa-quote-right agile-side-by"></span></p><div class="test-name mt-3"><h5>Willson</h5></div></div>','<div class="textagile"><p><span class="fas fa-quote-left agile-side-by"></span> At vero eos et accusam kasd gubergren sed diam aliquyamerat, sed voluptua laboreet doloremagnal aliquyamerat, sed diam voluptua.<span class="fas fa-quote-right agile-side-by"></span></p><div class="test-name mt-3"><h5>Willson</h5></div></div>','<div class="textagile"><p><span class="fas fa-quote-left agile-side-by"></span> At vero eos et accusam kasd gubergren sed diam aliquyamerat, sed voluptua laboreet doloremagnal aliquyamerat, sed diam voluptua.<span class="fas fa-quote-right agile-side-by"></span></p><div class="test-name mt-3"><h5>Willson</h5></div></div>']

export const section8 = document.createElement('section')
    section8.setAttribute('class','section8 Slider')

    const container = document.createElement('div');
    container.setAttribute('class','container py-5');

    const heading = document.createElement('div')
    heading.setAttribute('class','heading text-center py-5')
    heading.innerHTML= `<h2 class="text-uppercase heading1 fw-bold">Testimonials</h2>`

    const div = document.createElement('div');
    div.setAttribute('class','owl-carousel owl-theme owl-stage py-5 text-center')
    div.setAttribute('id','MySlider')
    div.innerHTML = arr[0] + arr[1] + arr[2]


    container.append(heading,div)
    section8.append(container)

    $(() => {
        $("#MySlider").owlCarousel({
            items : 1,
            loop : true,
            nav : false,
            dots: true,
            autoplay : true,
            autoplayHoverPause: true,
            smartSpeed: 300,
            responsive : {
                0 : {
                    items: 1
                },
    
                480 : {
                    items: 1
                },
    
                768 : {
                    items : 1
                },
    
                992 : {
                    items : 1
                },
    
                1200 : {
                    items : 1
                }
    
            }
        });
    
    });