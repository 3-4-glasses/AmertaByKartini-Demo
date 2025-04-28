import defaultPfp from "./assets/defaultProfilePic.jpg";

function PfpImage({ pfp }) {
  return (
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
      <img 
        src={pfp} 
        loading="lazy"
        className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover aspect-square border-4 border-[#BCD0DB] shadow-lg transition-transform duration-300 group-hover:scale-110" 
        alt="Profile" 
      />
    </div>
  );
}

function ReviewBody({ content, name, role }) {
  return (
    <div className="group relative flex flex-col w-full sm:max-w-[30vw] bg-[#BCD0DB] p-6 pt-20 text-center items-center rounded-xl shadow-md mb-16 sm:mb-12 sm:mx-4
      transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-20 hover:bg-[#a8c0d0]">
      <PfpImage pfp={defaultPfp} />

      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl font-semibold text-[#F6F5F0] group-hover:text-white aileron-heavy">{name}</h3>
        <p className="text-sm text-[#F6F5F0] mb-4 group-hover:text-white montserrat-light">{role || "Customer"}</p>
        
        <div className="relative w-full mb-4">
          <div className="w-16 h-px bg-[#F6F5F0] mx-auto group-hover:bg-white"></div>
        </div>
        
        <div className="relative px-2">
          <span className="absolute -top-4 -left-2 text-6xl text-gray-200 opacity-30 group-hover:opacity-50">"</span>
          <p className="text-lg italic text-[#F6F5F0] relative z-10 group-hover:text-white montserrat">
            {content}
          </p>
          <span className="absolute -bottom-8 -right-2 text-6xl text-gray-200 opacity-30 group-hover:opacity-50">"</span>
        </div>
      </div>
    </div>
  );
}

function Review() {
  const testimonials = [
    {
      heading: "Excellent Service!",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi, iure vero nihil expedita voluptatem iusto deleniti at.",
      name: "David Nielson",
      role: "Company ABC"
    },
    {
      heading: "Great decorations and fun times.",
      content: "Saepe nesciunt dolorem voluptate unde molestiae atque. Libero natus explicabo maxime perspiciatis?",
      name: "Sarah Johnson",
      role: "Director of XYZ"
    },
    {
      heading: "So beautiful and unique!",
      content: "Dolorum eligendi, iure vero nihil expedita voluptatem iusto deleniti at, saepe nesciunt dolorem voluptate unde molestiae atque.",
      name: "Michael Chen",
      role: "Sweet 17th Anniversary"
    }
  ];

  return (
    <section className="bg-[#F6F5F0] py-12 md:py-20 px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-[#BCD0DB] drop-shadow-lg mb-16 md:mb-20 theseasons-bold">Testimonials</h2>
      
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-8 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <ReviewBody 
            key={index}
            heading={testimonial.heading}
            content={testimonial.content}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}

export default Review;