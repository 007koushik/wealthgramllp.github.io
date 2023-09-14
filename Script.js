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








