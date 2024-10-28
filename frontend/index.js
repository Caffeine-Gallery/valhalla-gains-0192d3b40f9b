import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const testimonialCarousel = document.querySelector('#testimonialCarousel .carousel-inner');
    const contactForm = document.getElementById('contactForm');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Fetch and display testimonials
    try {
        const testimonials = await backend.getTestimonials();
        displayTestimonials(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }

    // Handle contact form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        loadingSpinner.style.display = 'block';

        try {
            await backend.submitContactForm(name, email, message);
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('There was an error submitting your message. Please try again later.');
        } finally {
            loadingSpinner.style.display = 'none';
        }
    });

    function displayTestimonials(testimonials) {
        testimonials.forEach((testimonial, index) => {
            const testimonialHTML = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="d-flex justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-text">"${testimonial.content}"</p>
                                    <p class="card-text"><small class="text-muted">- ${testimonial.author}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            testimonialCarousel.innerHTML += testimonialHTML;
        });
    }
});
