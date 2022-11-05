const navbar = ['HOME','ABOUT','SERVICE','GALLERY','CLIENT','CONTACT']
export const section1 = document.createElement('section')
    section1.setAttribute('class','section1 sticky-top shadow');

    const container = document.createElement('div')
    container.setAttribute('class','container')

    const nav = document.createElement('nav');
    nav.setAttribute('class','navBar d-flex justify-content-center justify-content-evenly px-5 py-2 ')

    const NavBrand = document.createElement('h1')
    NavBrand.innerHTML = `<a href="#" class="pe-5 text-light">BAKE</a>`

        const Ul = document.createElement('ul');
        Ul.setAttribute('class','navMenu d-lg-flex text-start pt-2  small text-light')
        Ul.setAttribute('id','navMenuOne')
    
    for( let i = 0 ; i < navbar.length ; i ++){

        const li = document.createElement('li');
        li.setAttribute('class','nav-item pt-2 px-3');

        const ancker = document.createElement('a');
        ancker.setAttribute('class','nav-link ');
        ancker.setAttribute('href','#');

        ancker.innerHTML = navbar[i];

        Ul.append(li);
        li.append(ancker);
    
    }
    
    const buttonMenu = document.createElement('button')
    buttonMenu.setAttribute('class','rounded-3 border border-2 text-bg-dark d-lg-none butonNav')
    buttonMenu.innerHTML = `<i class="fa solid fa-bars px-2 "></i>`


    $(()=>{
        $('.butonNav').on('click',()=>{
            $('#navMenuOne').toggle(400);
            $('#navMenuOne').css({'display':'block'})
        })
    })

container.append(nav)
nav.append(NavBrand,Ul,buttonMenu)
section1.append(container)