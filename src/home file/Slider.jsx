



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>


           
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
           <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/premium-photo/young-girl-with-pigtails-sits-desk-focused-writing-notebook_1301918-257.jpg?w=826" alt="" />
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150931058.jpg?t=st=1722678574~exp=1722682174~hmac=ab0cc69e2c998cdb5f6681ec1b004f1c21237f1ba7dd92c719faae6bddc99e67&w=826" alt="" />
           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/premium-photo/child-study-desk_997641-9920.jpg?w=826" alt="" />
           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/premium-photo/generative-ai-image-russian-little-boy-studying-class-while-smiling_467541-9931.jpg?w=740 " alt="" />
           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/premium-photo/kid-doing-homework_952161-86739.jpg?w=826" alt="" />
           </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center'>
             <img className=' h-[500px] w-[800px] rounded-xl ' src="https://img.freepik.com/premium-photo/generative-ai-image-portrait-indonesian-little-boy-student-studying-school-while-smiling_467541-9936.jpg?w=740" alt="" />
           </div>

        </SwiperSlide>
       
        </Swiper>
        </>











            </div>
            
        </div>
    );
};

export default Slider;