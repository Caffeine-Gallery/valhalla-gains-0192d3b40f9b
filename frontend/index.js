import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const testimonialCarousel = document.querySelector('#testimonialCarousel .carousel-inner');
    const instagramFeedContainer = document.getElementById('instagram-feed-container');

    // Fetch and display testimonials
    try {
        const testimonials = await backend.getTestimonials();
        displayTestimonials(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }

    // Fetch and display Instagram feed
    fetchInstagramFeed();

    function displayTestimonials(testimonials) {
        testimonials.forEach((testimonial, index) => {
            const testimonialHTML = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="d-flex justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-text">"${testimonial.content}"</p>
                                    <p class="card-text"><small class="text-muted">- ${testimonial.author}, ${testimonial.title}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            testimonialCarousel.innerHTML += testimonialHTML;
        });
    }

    function fetchInstagramFeed() {
        // Replace this with actual Instagram API call or embed code
        const dummyPosts = [
            { imageUrl: 'https://picsum.photos/300/300?random=1', caption: 'Intense workout session!' },
            { imageUrl: 'https://picsum.photos/300/300?random=2', caption: 'New equipment arrived!' },
            { imageUrl: 'https://picsum.photos/300/300?random=3', caption: 'Join our next fitness challenge!' },
            { imageUrl: 'https://picsum.photos/300/300?random=4', caption: 'Meal prep tips for fitness enthusiasts' }
        ];

        dummyPosts.forEach(post => {
            const postHTML = `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card">
                        <img src="${post.imageUrl}" class="card-img-top" alt="Instagram post">
                        <div class="card-body">
                            <p class="card-text">${post.caption}</p>
                        </div>
                    </div>
                </div>
            `;
            instagramFeedContainer.innerHTML += postHTML;
        });
    }
});
