const navbar = document.querySelector('.header');
// const navbarItems = document.querySelectorAll('.linkrr');    

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#10253f83'; // Change to your desired background color
        // navbarItems.style.color = 'red';
        
    } else {
        navbar.style.backgroundColor = '#10253F';
        // navbarItems.style.color = '#FCB504';
    }
});



// const Header = () => {
//     const [isNavOpen, setNavOpen] = useState(false);
  
//     const handleToggleNav = () => {
//       setNavOpen(!isNavOpen);
//     };
// };



// Image Slider Script 


const container = document.querySelector('.carousel-container');
        let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');

        function changeSlide(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            const translateX = -currentIndex * 100;
            container.style.transform = `translateX(${translateX}%)`;
        }

        setInterval(() => {
            changeSlide(1);
        }, 1000);







