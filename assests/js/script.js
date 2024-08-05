//  NEW ARRIVALS OR TOP SELLING ITEMS

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility of product cards
    function toggleProductCards(button, container) {
        const productCards = container.querySelectorAll('.product-card');
        const initialVisibleCount = 4;

        // Show only the first initialVisibleCount product cards initially
        productCards.forEach((card, index) => {
            if (index >= initialVisibleCount) {
                card.classList.add('hidden');
            }
        });

        button.addEventListener('click', function() {
            const isHidden = container.querySelector('.hidden');

            productCards.forEach((card, index) => {
                if (index >= initialVisibleCount) {
                    card.classList.toggle('hidden');
                }
            });

            button.textContent = isHidden ? 'Close' : 'View All';
        });
    }

    // New Arrivals section
    const newArrivalsBtn = document.querySelector('.new-arrivals-view-all .btn');
    const newArrivalsContainer = document.querySelector('.new-arrivals-container');
    toggleProductCards(newArrivalsBtn, newArrivalsContainer);

    // Top Selling Items section
    const topSellingBtn = document.querySelector('.top-selling-view-all .btn');
    const topSellingContainer = document.querySelector('.top-selling-container');
    toggleProductCards(topSellingBtn, topSellingContainer);
});









function toggleImages() {
    const additionalImages = document.querySelector('.additional-images');
    const viewAllButton = document.getElementById('viewAllButton');
    additionalImages.classList.toggle('d-none');
    if (additionalImages.classList.contains('d-none')) {
        viewAllButton.textContent = 'View All Categories';
    } else {
        viewAllButton.textContent = 'View Less Categories';
    }
}


























//Ours Happy Customers

$(document).ready(function(){
    function prevSlide() {
        $('#testimonialCarousel').carousel('prev');
    }

    function nextSlide() {
        $('#testimonialCarousel').carousel('next');
    }
    
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;
});









// *****************************************
//                CoNTACT US PAGE
// ******************************************

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    }, false);
});



















// function changeImage(src) {
//     const mainImage = document.getElementById('mainImage');
//     mainImage.src = src;
//     document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
//     event.currentTarget.classList.add('active');
// }








    function changeImage(imagePath) {
        const mainImage = document.getElementById('mainImage');
        mainImage.src = imagePath;

        // Update active class on thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail-img');
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('active');
            if (thumbnail.src.includes(imagePath)) {
                thumbnail.classList.add('active');
            }
        });
    }




















    
// mpbile wala chota view













var modal = document.getElementById("myModal");

// Get the "More" link
var moreLink = document.querySelector(".nav-item.nav-link[href='#']:last-child");

// Get the close button
var closeButton = modal.querySelector(".close");

// When the user clicks on the "More" link, open the modal
moreLink.onclick = function() {
  modal.classList.add("show");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.classList.remove("show");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    modal.style.display = "none";
  }
}




