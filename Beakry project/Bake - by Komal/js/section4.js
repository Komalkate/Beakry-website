const value = [
    '<div class="col-md-3 my-3"><h2><span class="counter"> 3500 </span></h2><p class="h5 fw-bold">Coffee</p></div>',
    '<div class="col-md-3 my-3"><h2><span class="counter"> 650 </span></h2><p class="h5 fw-bold">Happy Clients</p></div>',
    '<div class="col-md-3 my-3"><h2><span class="counter"> 10 </span></h2><p class="h5 fw-bold">Experience</p></div>',
    '<div class="col-md-3 my-3"><h2><span class="counter"> 1010 </span></h2><p class="h5 fw-bold">Expert Worker</p></div>'
]

export const section4 = document.createElement('section');
    section4.setAttribute('class','section4 py-5');

    const container = document.createElement('div');
    container.setAttribute('class','container');

    const row = document.createElement('div');
    row.setAttribute('class','row justify-content-center text-center')
    row.innerHTML = value[0] + value[1] + value[2] + value[3];

    container.append(row)
section4.append(container)




$(() => {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});