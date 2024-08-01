

const Banner = () => {
    return (
        <div className="  mb-52 mt-10 ml-5 mr-5">
           


            <div className=" flex-row md:flex-row ">

            <div className="  flex justify-center items-center">
              <div>
              <img className=" rounded-xl h-[400px] w-[500px]" src="https://img.freepik.com/premium-photo/fun-educational-activities-our-back-school-event-kids-parents_483861-14130.jpg?w=740" alt="" />
              </div>

              
              <div className=" -ml-20  -mb-40 bg-[#030637] border-[1px] border-[#40F8FF] p-10 rounded-xl">
                <h1 className=" text-[#40F8FF] text-6xl">Learning<br></br> Science is Fun!</h1>
                <p className=" text-xl text-white mt-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br> do eiusmod tempor incididunt ut labore et dolore.</p>
                <button className=" mt-5 text-[#40F8FF] btn bg-[#030637] border-[1px] border-[#40F8FF] ">LEARN MORE</button>
              </div>
            </div>


            </div>

            
        </div>
    );
};

export default Banner;