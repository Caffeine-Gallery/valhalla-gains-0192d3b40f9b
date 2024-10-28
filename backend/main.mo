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
            author = "Bjorn Ironside";
            title = "Berserker Trainee";
            content = "Viking Fitness forged me into an unstoppable force! The axe throwing class honed my battle skills to perfection!"
        },
        { 
            author = "Lagertha Shieldmaiden";
            title = "Shield Wall Champion";
            content = "The shield wall workout pushed me beyond my limits. Now, I feel invincible on the battlefield!"
        },
        { 
            author = "Ragnar Lothbrok";
            title = "Longship Captain";
            content = "The longship rowing machines prepared me for conquering new lands. My endurance is unmatched thanks to Viking Fitness!"
        },
        {
            author = "Astrid the Valkyrie";
            title = "Warrior's Path Graduate";
            content = "Viking Fitness turned me into a true Valkyrie. The intensity of their training is unparalleled!"
        },
        {
            author = "Ivar the Boneless";
            title = "Master Strategist";
            content = "Despite my physical limitations, Viking Fitness helped me become a formidable warrior. Their adaptive training is second to none!"
        }
    ];

    public query func getTestimonials() : async [Testimonial] {
        testimonials
    };

    public func submitContactForm(name: Text, email: Text, message: Text) : async () {
        Debug.print("New battle cry received:");
        Debug.print("Warrior's Name: " # name);
        Debug.print("Raven's Path (Email): " # email);
        Debug.print("Battle Cry: " # message);
        // In a real-world scenario, you would store this information or send it to an email service
    };
}
