import pfp from "./assets/face.png"

function PfpImage(props) {
  return (
    <div className="absolute -top-[5vh] left-1/2 transform -translate-x-1/2 z-10">
      <img src={props.pfp} className="rounded-full w-24 h-24 object-cover aspect-square border-4 border-white shadow-lg" alt="Orr or urr" />
    </div>
  );
}


function ReviewBody(props){
  return(
  <div className="relative flex flex-col max-w-[90vw] sm:max-w-[30vw] bg-[#F6F5F0] p-4 text-center  place-items-center w-[50%] m-[2vh] mt-0 ">
    <PfpImage pfp={pfp} />

    <div className="w-full text-2xl text-center pb-2 mt-[10vh]">
      <p>{props.heading}</p>
    </div>
    <div className="w-full p-2 text-center text-base">
      <p>
        {props.content}        
      </p>
    </div>
    <div className="w-full p-2 text-center text-lg">{props.name}</div>
  </div>
  );
}

function Review() {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center place-items-center bg-[#BCD0DB] pt-20 pb-20">
              <ReviewBody 
                heading="I love this Product!"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi, iure vero nihil expedita voluptatem iusto deleniti at, saepe nesciunt dolorem voluptate unde molestiae atque. Libero natus explicabo maxime perspiciatis?"
                name="David Nielson"
              />
              
              <ReviewBody 
                heading="I love this Product!"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi, iure vero nihil expedita voluptatem iusto deleniti at, saepe nesciunt dolorem voluptate unde molestiae atque. Libero natus explicabo maxime perspiciatis?"
                name="David Nielson"
              />

              <ReviewBody 
                heading="I love this Product!"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eligendi, iure vero nihil expedita voluptatem iusto deleniti at, saepe nesciunt dolorem voluptate unde molestiae atque. Libero natus explicabo maxime perspiciatis?"
                name="David Nielson"
              />
        </div>
    )
  }
  
  export default Review