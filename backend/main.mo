import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor {
    public type Testimonial = {
        author: Text;
        content: Text;
    };

    stable var testimonials: [Testimonial] = [
        { author = "Bjorn Ironside"; content = "Viking Fitness transformed me into a true warrior. The axe throwing class is my favorite!" },
        { author = "Lagertha Shieldmaiden"; content = "The shield wall workout is intense and effective. I've never felt stronger!" },
        { author = "Ragnar Lothbrok"; content = "The longship rowing machines provide an incredible full-body workout. I'm ready to conquer new lands!" }
    ];

    public query func getTestimonials() : async [Testimonial] {
        testimonials
    };

    public func submitContactForm(name: Text, email: Text, message: Text) : async () {
        Debug.print("New contact form submission:");
        Debug.print("Name: " # name);
        Debug.print("Email: " # email);
        Debug.print("Message: " # message);
        // In a real-world scenario, you would store this information or send it to an email service
    };
}
