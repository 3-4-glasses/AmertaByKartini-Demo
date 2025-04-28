import aboutUsImg from './assets/about-us.jpg';
import bgVid from './assets/bg-vid.mp4';
import bgVidFallback from './assets/bg-vid.webm';
import bgVidPoster from './assets/bg-vid.jpg';
import TypewriterOnScroll from './components/TypewriterOnScroll.jsx'

function VidBackground(){
  return(
    <div className="top-0 absolute left-0 w-full h-screen overflow-hidden z-0">
    <video className="w-full h-full object-cover opacity-50" autoPlay muted loop preload="auto" playsInline poster={bgVidPoster}>
      <source src={bgVid} type="video/mp4" />
      <source src={bgVidFallback} type="video/webm" />
    </video>
    </div>
  )
}

function ImagSection(){
  return(
    <div className="flex justify-center lg:justify-start my-auto">
      <img src={aboutUsImg} loading='lazy' className="mt-5 rounded-full size-35 md:size-60 lg:size-70 xl:size-86" alt="About Us" />
    </div>
    )
}

function ServiceDesc(){
  return(
    <div className="text-zinc-900 p-5">
      <h2 className="text-4xl my-3 theseasons-bold">
        About Us
      </h2>
      <h3 className="text-3xl lg:text-5xl my-5 aileron-heavy">
        <TypewriterOnScroll
          strings={[
            "Amerta By Kartini"
          ]}
          options={{
            delay: 40,
            loop: true
          }}
          className='inline-block font-bold emphasis inset-shadow-grey-500 engravedText'
        />      
        <span className="inline">specializes in creating stylish and personalized mini events.</span>
      </h3>
      <p className="text-xl lg:text-2xl my-2 montserrat">
        Starting from artistic design and collaboration, we offer custom decor services that elevate each event with thoughtful detail.
      </p>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="snap-start h-screen overflow-x-hidden relative bg-white">
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
