
const arr = ['<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978" width="100%" height="350"> </iframe>']

const contact = ['<div class="col-11 col-lg-3"><span class="fa solid fa-house-user h3 logoBottm py-2"></span><p>25478 Road St.121<br><span>USA New Hill</span></p></div>','<div class="col-11 col-lg-3"><span class="fa solid fa-phone h3 logoBottm py-2"></span><p>+(000) 123 4565 32 <br><span>+(010) 123 4565 35</span></p></div>','<div class="col-11 col-lg-3"><span class="fa solid fa-envelope h3 logoBottm py-2"></span><p><a href="mailto:info@example.com" class="text-dark">info@example1.com</a><br><span><a href="mailto:info@example.com" class="text-dark">info@example2.com</a></span></p></div>']



export const section10 = document.createElement('section');
    section10.setAttribute('class','section10 container-fluid');

    const div = document.createElement('div')
    div.setAttribute('class','')
    div.innerHTML = arr[0]

    const div2 = document.createElement('div');
    div2.setAttribute('class','row justify-content-center text-center py-5')
    div2.innerHTML= contact[0] + contact[1] + contact[2]



section10.append(div,div2)
