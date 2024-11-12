const navLink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon= document.querySelector('#menu-icon');
const navbar= document.querySelector('header nav');

menuIcon.addEventListener('click', () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
});

const activePage = () => {
    const header =document.querySelector('header');
    const barBox =document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => { 
        header.classList.add('active');
    },1100);

    navLink.forEach(link => {
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() => { 
        barBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

}

navLink.forEach((link, idx)=>{ 
    link.addEventListener('click', () => { 
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => { 
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logoLink.addEventListener('click', () => { 
    if (!navLink[0].classList.contains('active')) {
        activePage();

        navLink[0].classList.add('active');

        setTimeout(() => { 
            sections[0].classList.add('active');
        },1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn,idx)=> {
    btn.addEventListener('click', () => { 
        const resumeDetails = document.querySelectorAll('.resume-detail'); 

        resumeBtns.forEach(btn => { 
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => { 
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

    });
});