import HomeBookingCollege from "../HomeBookingCollege/HomeBookingCollege";
import HomeHolyChild from "../HomeHolyChild/HomeHolyChild";
import HomeToyFair from "../HomeToyFair/HomeToyFair";
import HomeTastyRecipes from "../homeTastyRecipes/homeTastyRecipes";


const Projects = () => {
    const title= document.getElementById('title')

    title.innerText='Projects' 
    return (
        <div className="w-[80%] md:w-[90%] mx-auto py-[120px]">
            <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>All Projects</h3>


            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-20 md:gap-10">

                <HomeHolyChild></HomeHolyChild>
                <HomeBookingCollege></HomeBookingCollege>
                <HomeToyFair></HomeToyFair>
                <HomeTastyRecipes></HomeTastyRecipes>
            </div>

        </div>
    );
};

export default Projects;