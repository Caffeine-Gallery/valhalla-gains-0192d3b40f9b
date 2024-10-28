import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor {
    public type Testimonial = {
        author: Text;
        title: Text;
        content: Text;
    };

    stable var testimonials: [Testimonial] = [
        { 
            author = "John D.";
            title = "Fitness Enthusiast";
            content = "Viking Fitness has completely transformed my physique. The trainers are top-notch and the atmosphere is motivating!"
        },
        { 
            author = "Sarah M.";
            title = "Marathon Runner";
            content = "The cardio classes at Viking Fitness have significantly improved my endurance. I've shaved minutes off my marathon time!"
        },
        { 
            author = "Mike R.";
            title = "Strength Training Addict";
            content = "I've never felt stronger! The strength training programs at Viking Fitness are challenging and effective."
        },
        {
            author = "Emily L.";
            title = "Yoga Practitioner";
            content = "The yoga classes at Viking Fitness provide the perfect balance to my high-intensity workouts. I feel more flexible and centered."
        },
        {
            author = "David K.";
            title = "Weight Loss Success Story";
            content = "I've lost 50 pounds since joining Viking Fitness. The supportive community and expert guidance have been crucial to my success."
        }
    ];

    public query func getTestimonials() : async [Testimonial] {
        testimonials
    };
}
