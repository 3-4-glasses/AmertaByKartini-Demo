function Review() {

    return (
        <div className="flex flex-wrap bg-yellow-100 pt-20 pb-20">
          <div className="container mx-auto flex flex-col items-center justify-center bg-orange-50 shadow-lg w-1/2 p-4">
            <div className="w-full h-[5vh] text-4xl text-center p-2">I love this Product!</div>
    
            <div className="w-full p-10">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
    
            <div className="w-full p-2 flex justify-center">
              <img 
                src="somethingsomething.spg" 
                alt="Orr or urr" 
                className="max-w-[10vw] max-h-[10vh] w-full h-full"
              />
            </div>
    
            <div className="w-full p-2 text-center">David Nielson</div>
          </div>
        </div>
      )
  }
  
  export default Review