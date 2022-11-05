
const About = 
                ['<h4 class="pb-lg-3 pb-3"><a href="index.html" class="headFott">About us</a></h4>','<p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla</p>','<p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla</p>','<div class="bottom-social pt-2"><a href="#"><span class="fab fa-facebook-f fottIcon"></span></a><a href="#"><span class="fab fa-google-plus-g fottIcon"></span></a><a href="#"><span class="fab fa-twitter fottIcon"></span></a></div>']

const workingTime =
                    ['<h4 class="pb-lg-3 pb-3 headFott">Working time</h4>','<li class="d-flex">Monday   <span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Tuesday  <span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Wednesday<span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Thursday <span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Friday   <span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Saturday <span class="time ms-auto underDot"> 9:30-18:30</span></li>','<li class="d-flex">Sunday   <span class="time ms-auto underDot">     closed</span></li>']
const twitterUs = 
                    ['<h4 class="pb-lg-3 headFott">Twitter Us</h4>','<div class="bottom-para"><p>ultricies nec, pellentesque eu, pretium quis,</p></div>','<div class="bottom-para">       <p>ultricies nec, pellentesque eu, pretium quis,</p></div>','<div class="bottom-para"><p>ultricies nec, pellentesque eu, pretium quis,</p></div>']
const subscribe = 
                    ['<h4 class="pb-lg-3 pb-3 headFott">SUBSCRIBE US</h4>','<div class="footer-post d-flex mb-2">    <div class="news-letter"><form action="#" method="post"><div class="form-group"><input type="email" class="form-control" placeholder="name@example.com" required="required"></div><button type="submit" class="btn btn-lg pinkButtoNN">Send</button></form></div></div>','<div class="bottom-para pt-sm-3 pt-2"><p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla</p></div>']

export const section11 = document.createElement('section')
    section11.setAttribute('class','section11 py-5')


    const container = document.createElement('div');
    container.setAttribute('class','container py-4')
    const row = document.createElement('div');
    row.setAttribute('class','row justify-content-center')

    const div1 = document.createElement('div')
    div1.setAttribute('class','dance-agile-info col-11 col-md-5 col-lg-3  py-4')
    for( let i = 0 ; i < About.length ; i ++){

        const span = document.createElement('span');
        span.setAttribute('class','nav-item liHover');

        span.innerHTML = About[i];

        div1.append(span);
    
    }
    
    const div2 = document.createElement('div')
    div2.setAttribute('class','dance-agile-info col-11 col-md-5 col-lg-3 py-4')
    for( let i = 0 ; i < workingTime.length ; i ++){

        const span1 = document.createElement('li');
        span1.setAttribute('class','nav-item liHover');

        span1.innerHTML = workingTime[i];

        div2.append(span1);
    
    }

    const div3 = document.createElement('div')
    div3.setAttribute('class','dance-agile-info col-11 col-md-5 col-lg-3 aboutHei py-4')
    for( let i = 0 ; i < twitterUs.length ; i ++){

        const span2 = document.createElement('li');
        span2.setAttribute('class','nav-item liHover');

        span2.innerHTML = twitterUs[i];

        div3.append(span2);
    
    }

    const div4 = document.createElement('div')
    div4.setAttribute('class','dance-agile-info col-11 col-md-5 col-lg-3 py-4')
    for( let i = 0 ; i < subscribe.length ; i ++){

        const span3 = document.createElement('li');
        span3.setAttribute('class','nav-item liHover');

        span3.innerHTML = subscribe[i];

        div4.append(span3);
    
    }

    const divfoot = document.createElement('div')
    divfoot.setAttribute('class','footP text-center text-white py-4 px-3')
    divfoot.innerHTML = `<p>© 2018 Bake. All Rights Reserved | Design by <a href="#" target="_blank">W3Layouts</a></p>`

    row.append(div1,div2,div3,div4)
    container.append(row)
    section11.append(container,divfoot)