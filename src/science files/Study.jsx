

const Study = () => {
    return (
        <div className=" mb-10 mt-10 mr-5 ml-5">

            <div>
              
              <div className=" flex-col md:flex-row lg:flex-row flex justify-center  items-center gap-10">
               
               <div>
                 <img className=" rounded-xl h-[400px] w-[600px]" src="https://img.freepik.com/free-vector/education-concept-hand-drawn-sketch-vector-illustration_460848-14587.jpg?t=st=1722778648~exp=1722782248~hmac=32bae4b09f66734cc161e690388d9a2d9f5ecdefbcc61b5f2271f811451c3379&w=740" alt="" />
               </div>


               <div>
                <img className=" rounded-xl" src="https://img.freepik.com/premium-photo/globe-with-pencil-bookglobe-with-pencil-book_912214-115061.jpg?w=360" alt="" />
               </div>


              </div>


             {/* ------------------------------------------ */}
              


              <div className=" flex-col md:flex-row lg:flex-row mt-10 flex justify-center gap-28  ">


              <div>

               <p className=" text-[#40F8FF] text-5xl font-serif">Online Study</p>

               <p className=" text-[#40F8FF] mt-5">
                
               Dignissim enim sit amet venenatis urna cursus.<br></br> Vitae sapien pellentesque habitant morbi<br></br>tristique senectus et. Aenean sed adipiscing diam donec <br></br>adipiscing tristique risus. At imperdiet dui accumsan<br></br> sit amet nulla facilisi morbi tempus.<br></br> Id semper risus in hendrerit gravida rutrum.


               </p>


              </div>


               
               <div>
                <p className=" text-[#40F8FF] text-3xl font-serif">Trending New Courses</p>

                <p className=" mt-5 text-[#40F8FF] font-serif ">Feugiat nisl pretium fusce id. In ornare quam viverra orci sagittis.<br></br> Amet commodo nulla facilisi nullam vehicula ipsum.</p>
                 
                <button className=" mt-5 text-[#40F8FF] btn bg-[#030637] border-[1px] border-[#40F8FF] ">LEARN MORE</button>

               </div>





              </div>









            </div>
            
        </div>
    );
};

export default Study;