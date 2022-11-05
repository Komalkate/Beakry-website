
const card = [
    '<div class=""><div class="white-shadow"><div class="text-wls-ser-bake"><span class="far fa-snowflake banner-icon"></span></div><div class="ser-inner-info"><h4>Creativity</h4><p class="py-3 px-4">delectus reiciendis maiores alias consequatur aut.maiores alias</p></div><div class="outs-agile-buttn mt-lg-3 mt-2"><a href="#" class="scroll buttonPink">Learn more</a></div></div></div>','<div class=""><div class="white-shadow"><div class="text-wls-ser-bake"><span class="fas fa-adjust banner-icon"></span></div><div class="ser-inner-info"><h4>Tasty Cakes</h4><p class="py-3 px-4">delectus reiciendis maiores alias consequatur aut.maiores alias</p></div><div class="outs-agile-buttn mt-lg-3 mt-2"><a href="#" class="scroll buttonPink">Learn more</a></div></div></div>','<div class=""><div class="white-shadow"><div class="text-wls-ser-bake"><span class="fas fa-chart-pie banner-icon"></span></div><div class="ser-inner-info"><h4>Tradition</h4><p class="py-3 px-4">delectus reiciendis maiores alias consequatur aut.maiores alias</p></div><div class="outs-agile-buttn mt-lg-3 mt-2"><a href="#" class="scroll buttonPink">Learn more</a></div></div></div>','<div class=""><div class="white-shadow"><div class="text-wls-ser-bake"><span class="fab fa-slideshare banner-icon"></span></div><div class="ser-inner-info"><h4>Quality</h4><p class="py-3 px-4">delectus reiciendis maiores alias consequatur aut.maiores alias</p></div><div class="outs-agile-buttn mt-lg-3 mt-2"><a href="#" class="scroll buttonPink">Learn more</a></div></div></div>'
]

export const section5 = document.createElement('section');
    section5.setAttribute('class','section5 py-5');

    const container = document.createElement('div');
    container.setAttribute('class','container')

    const sec5div1 = document.createElement('div');
    sec5div1.setAttribute('class','heading text-center pt-5');
    sec5div1.innerHTML = `<h2 class="py-5 heading2">OUR SERVICES</h2>`;

    const sec5div2 = document.createElement('div');
    sec5div2.setAttribute('class','row justify-content-center');

    const div2div1 = document.createElement('div');
    div2div1.setAttribute('class','col-lg-3 col-md-6 col-sm-6 w3layouts-service-list text-center my-4')
    div2div1.innerHTML = card[0]

    const div2divimg = document.createElement('div')
    div2divimg.setAttribute('class','col-lg-3 col-md-6 col-sm-6 w3layouts-service-list text-center my-4')
    div2divimg.innerHTML = card[1]

    const div2div3 = document.createElement('div');
    div2div3.setAttribute('class','col-lg-3 col-md-6 col-sm-6 w3layouts-service-list text-center my-4')
    div2div3.innerHTML = card[2]
    
    const div2div4 = document.createElement('div');
    div2div4.setAttribute('class','col-lg-3 col-md-6 col-sm-6 w3layouts-service-list text-center my-4')
    div2div4.innerHTML = card[3]

   
    

    sec5div2.append(div2div1,div2divimg,div2div3,div2div4)
    container.append(sec5div1,sec5div2)
section5.append(container)

 