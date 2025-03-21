import aboutUsImg from './assets/about-us.jpg';
import bgVid from './assets/bg-vid.mp4';
import bgVidFallback from './assets/bg-vid.webm';
import bgVidPoster from './assets/bg-vid.jpg';
import './AboutUs.css';
import './assets/fonts/fonts.css';


function VidBackground(){
  return(
    <div className="top-0 absolute left-0 w-full h-screen overflow-hidden z-0">
    <video className="w-full h-full object-cover opacity-50" autoPlay muted loop preload="auto" playsinline poster={bgVidPoster}>
      <source src={bgVid} type="video/mp4" />
      <source src={bgVidFallback} type="video/webm" />
    </video>
    </div>
  )
}
function ImagSection(){
  return(
    <div className="flex justify-center lg:justify-start my-auto">
      <img src={aboutUsImg} className="mt-5 rounded-full size-35 md:size-60 lg:size-70 xl:size-86" alt="About Us" />
    </div>
    )
}

function ServiceDesc(){
  return(
    <div className="text-zinc-900 p-5">
      <h2 className="text-4xl my-3 playfair-display">
        About Us
      </h2>
      <h3 className="text-3xl lg:text-5xl my-5 lato">
        <span className="font-bold emphasis inset-shadow-grey-500 engravedText"> Amerta By Kartini </span> specializes in creating stylish and personalized mini events.
      </h3>
      <p className="text-xl lg:text-2xl my-2 lato">
        Starting from artistic design and collaboration, we offer custom decor services that elevate each event with thoughtful detail.
      </p>
    </div>
  )
}

function AboutUs() {
  return (
      <div className="mt-[100vh] overflow-x-hidden relative bg-white">
        <VidBackground/>
        <div className="h-screen flex justify-center items-center relative z-10 text-center lg:text-left px-4 py-8 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] w-full max-w-screen-xl">
            <ImagSection/>
            <ServiceDesc/>
          </div>
        </div>
      </div>
  );
}

export default AboutUs;
