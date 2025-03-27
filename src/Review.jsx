function Review() {

    return (
<<<<<<< HEAD:src/Revision.jsx
      <div className="flex flex-wrap bg-blue-200 pt-[20vh] min-h-screen justify-center">
        <div className="container flex flex-wrap justify-center items-center max-w-[60vw] mx-auto">
          <div className="flex w-full max-w-full max-h-[8vh]">
            <div className="flex-1 p-2">
              <img src="face.png" alt="Orr or urr" className="rounded-full h-[15vh] w-[15vh] bg-gray-100 object-cover mx-auto" />
=======
        <div className="flex flex-wrap bg-yellow-100 pt-20 pb-20">
          <div className="container mx-auto flex flex-col items-center justify-center bg-orange-50 shadow-lg w-1/2 p-4">
            <div className="w-full h-[5vh] text-4xl text-center p-2">I love this Product!</div>
    
            <div className="w-full p-10">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
>>>>>>> f1def533096adbd2e48bff5b2c856fcbb9d173d5:src/Review.jsx
            </div>
            <div className="flex-1 p-2">
              <img src="face.png" alt="Orr or urr" className="rounded-full h-[15vh] w-[15vh] bg-gray-100 object-cover mx-auto" />
            </div>
            <div className="flex-1 p-2">
              <img src="face.png" alt="Orr or urr" className="rounded-full h-[15vh] w-[15vh] bg-gray-100 object-cover mx-auto" />
            </div>
          </div>
          <div className="flex flex-wrap z-0">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex-1 max-w-[20vw] bg-gray-100 m-2 p-4 text-center">
                <div className="w-full text-4xl text-center pb-2 mt-[10vh]">
                  <p>I love this Product!</p>
                </div>
                <div className="w-full p-2 text-center text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="w-full p-2 text-center text-lg">David Nielson</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Review