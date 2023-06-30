import { Link } from 'react-router-dom';
import img1 from '../../assets/homeAbout/DSC06733.jpg'
import img2 from '../../assets/homeAbout/DSC06736.jpg'
import img3 from '../../assets/homeAbout/DSC06738.jpg'
import img4 from '../../assets/homeAbout/DSC06742.jpg'
import img5 from '../../assets/homeAbout/DSC06750.jpg'
import img6 from '../../assets/homeAbout/DSC06751.jpg'
import img7 from '../../assets/homeAbout/DSC06752.jpg'



const HomeAbout = () => {




  return (
    <div className='w-[90%] mx-auto my-[120px]  py-[120px]'>





      <div className='grid grid-cols-1 md:grid-cols-2  gap-20'>

        <section data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"

        >

          <div id='tonu' style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} className='p-10  border-l-4 border-blue-500
                 rounded-[50%] relative home-about-img-section group  '>
            {/* <span style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} className='text-white md:text-[50px] text-[30px] font-[500] absolute top-[45%] left-[15%]  ring-4  px-10  ml-[-1000px]  group-hover:ml-0  group-hover:inline  duration-[2s]	'>MERN STACK</span> */}


            <img className=' md:h-[700px] h-[500px] absolute top-[5%] left-[1%]   ml-[-1000px] rounded-[50%] group-hover:ml-0   w-full  hover:scale-105 duration-[2s]  border-l-[10px] border-blue-500  group-hover:border-blue-500/10    ' src={img1} alt=""
              style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} />




            <img className=' md:h-[700px] h-[500px]  w-full  hover:scale-105 duration-[2s]  border-l-[10px] border-blue-500 rounded-[30px] group-hover:opacity-0 group-hover:border-blue-500/10    ' src={img2} alt=""
              style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} />

          </div>
        </section>

        <section data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" >
          <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>About Me</h3>
          <p className=" text-white text-[20px] font-[400]  hover:scale-110 duration-[2s]">My name is Showmik arifen Tonmoy, and I am a junior web developer with nearly 12 months of learning experience. I have acquired a diverse skill set, including proficiency in React.js, HTML, CSS, Bootstrap, Tailwind, JavaScript, Express.js, Node.js,FireBase,andMongoDB. I am also knowledgeable about authentication using Google Firebase and proficient in utilizing various development tools... <br /> <Link to='/about' className='p-2  rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2  '>See More</Link>


          </p>

        </section>

      </div>
    </div>
  );
};

export default HomeAbout;






