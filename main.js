 /*=============== SHOW/HIDE MENU ===============*/
      const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close');
 
      if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
      if(navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
 
      document.querySelectorAll('.nav__link').forEach(n =>
         n.addEventListener('click', () => navMenu.classList.remove('show-menu'))
      );

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')

   if(window.scrollY >= 50){
      header.classList.add('blur-header')
   }else{
      header.classList.remove('blur-header')
   }
}

window.addEventListener('scroll', scrollHeader)


/*=============== ACTIVE LINK ===============*/
      const sections = document.querySelectorAll('section[id]');
      window.addEventListener('scroll', () => {
         const scrollY = window.scrollY;
         sections.forEach(section => {
            const id = section.id,
                  top = section.offsetTop - 100,
                  height = section.offsetHeight,
                  link = document.querySelector('.nav__menu a[href*=' + id + ']');
            if(!link) return;
            link.classList.toggle('active-link', scrollY > top && scrollY <= top + height);
         });
      });
 
      /*=============== SCROLL UP ===============*/
      window.addEventListener('scroll', () => {
         const scrollUp = document.getElementById('scroll-up');
         window.scrollY >= 350
            ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
      });

       /*=============== SKILLS TABS ===============*/
      document.querySelectorAll('.skills__tab').forEach(tab => {
         tab.addEventListener('click', () => {
            document.querySelectorAll('.skills__tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.skills__tab-content').forEach(c => c.style.display = 'none');
            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).style.display = 'block';
            animateBars();
         });
      });
 
      /*=============== SKILL BARS ANIMATION ===============*/
      function animateBars() {
         document.querySelectorAll('.skill__bar-fill:not(.animated)').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
            bar.classList.add('animated');
         });
      }
 
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => { if(entry.isIntersecting) animateBars(); });
      }, { threshold: 0.3 });
      const skillsSection = document.querySelector('.skills');
      if(skillsSection) observer.observe(skillsSection);


      /*=============== RESUME TABS ===============*/
      document.querySelectorAll('.resume__tab').forEach(tab => {
         tab.addEventListener('click', () => {
            document.querySelectorAll('.resume__tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.resume__content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('resume-' + tab.dataset.tab).classList.add('active');
         });
      });
 
      /*=============== PROJECTS FILTER ===============*/
      document.querySelectorAll('.projects__filter').forEach(btn => {
         btn.addEventListener('click', () => {
            document.querySelectorAll('.projects__filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.project__card').forEach(card => {
               if(filter === 'all' || card.dataset.category === filter) {
                  card.style.display = 'block';
               } else {
                  card.style.display = 'none';
               }
            });
         });
      });      

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // service - templateID - #form - publicKey
   emailjs.sendForm('service_84ds00m' , 'template_9vvvcsj' , '#contact-form' , 'l-MT6YAxf4GZY8a9G' )
      .then(() => {
         //Show sent message
         contactMessage.textContent = 'Message sent Successfully✅'
         //remove message after five seconds
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)
         // clear input flied
         contactForm.reset()
      }, () =>{
         //Show error message 
         contactMessage.textContent = 'Message not sent (serious error)❌'
      })

}  
contactForm.addEventListener('submit', sendEmail)    


/*=============== footer===============*/ 
document.getElementById('year').textContent = new Date().getFullYear();


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
