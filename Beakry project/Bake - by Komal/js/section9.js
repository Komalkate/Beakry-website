





export const section9 = document.createElement('section');
    section9.setAttribute('class','section9 py-5')

    const container = document.createElement('div');
    container.setAttribute('class','container py-5');

    const heading = document.createElement('div');
    heading.setAttribute('class','heading text-center')
    heading.innerHTML = `<h2 class="heading1 text-dark py-5">CONTACT</h2>`


    const div = document.createElement('div')
    div.setAttribute('class','InPut')
    div.innerHTML=`<div class="contact-us">
    <form action="#" method="post">
       <div class="row contact-grid">
          <div class="col-lg-6 col-md-6 col-sm-6 form-group styled-input">
             <input type="text" class="form-control my-2 border-dark py-3" name="Name" placeholder="Name" required="">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 form-group styled-input">
             <input type="text" class="form-control my-2 border-dark py-3" name="Last Name" placeholder="Last Name" required="">
          </div>
          <div class="col-lg-6 col-lg-6 col-md-6 col-sm-6 form-group styled-input">
             <input type="email" class="form-control my-2 border-dark py-3" name="Email" placeholder="Email" required=""> 
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 form-group styled-input">
             <input type="text" class="form-control my-2 border-dark PhoneValidation py-3" name="Phone" placeholder="Phone" required="">
          </div>
       </div>
       <div class="styled-input">
          <textarea name="Message" placeholder="Message" required="" class="form-control my-2 border-dark rounded-0"></textarea>
       </div>
       <div>
          <div class="click mt-lg-3 mt-2">
             <input type="submit" value="Send" class="form-control rounded-0 fw-bold inputButton">
          </div>
       </div>
    </form>
 </div>`

 container.append(heading,div)
 section9.append(container)

$(document).ready(function(){
  
    $(".PhoneValidation").on("blur", function(){
          const mobNum = $(this).val();
          const filter = /^\d*(?:\.\d{1,2})?$/;
  
            if (filter.test(mobNum)) {
              if(mobNum.length==10){
                    alert("valid");
                $("#mobile-valid").removeClass("hidden");
                $("#folio-invalid").addClass("hidden");
               } else {
                  alert('Please put 10  digit mobile number');
                 $("#folio-invalid").removeClass("hidden");
                 $("#mobile-valid").addClass("hidden");
                  return false;
                }
              }
              else {
                alert('Not a valid number');
                $("#folio-invalid").removeClass("hidden");
                $("#mobile-valid").addClass("hidden");
                return false;
             }
      
    });
    
  });