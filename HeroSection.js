import aUs from "../Assets/aUs.jpg";
import aUs2 from "../Assets/aUs2.jpg";
import aUs3 from "../Assets/aUs3.jfif";

const HeroSection = () => {
    return (
        <div className="grid grid-rows-6 bg-black px-1">
            <div>
                <div className="bg-cover"><img src={aUs} width="700" />
                </div>
            <div className="flex-2 bg-white">
                <div className="text-center text-2xl">
                    <a>man is man</a>
                </div>
            </div>
            </div>
            <div className="bg-red-600">
                <div className="text-center pb-5 text-white text-2xl">
                   <a>Our Vision</a> 
                </div>
                <div className="text-right text-2xl text-white px-5 pt-10">
                    <a>You are hungry 1 and you need no food to be satisfied</a>
                    <div className="px-36">
                        <a>You are hungry 2</a>
                    </div>
                </div>
                <div className="pb-20 px-72">
                    <img src={aUs2} width="300" />
                </div>
            </div>
            <div class="bg-us_green">
                <div className="text-center pb-5 text-white text-2xl">
                    <a>Our Mission</a>
                </div>
                <div className="text-left text-2xl text-white px-5">
                    <a>You are hungry 3 and you need no food to be satisfied</a>
                    <div className="px-36">
                        <a>You are hungry 4</a>
                    </div>
                </div>
                <div className="px-72 pb-20 pr-96">
                    <img src={aUs3} width="300" />
                </div>
            </div>
            <div className="bg-purple-500">\
                <div className="text-2xl text-center text-white pb-5">
                    <a>From Director's Desk</a>
                </div>
                <div className="text-sm text-white"><a>You are hungry 5 and maybe, you need to grab a table of dishes for your up keep for a year and a half or max.</a></div>
            </div>
            <div className="bg-yellow-500">
                <div className="text-2xl text-center text-white pb-5">
                    <a>Principle speaks</a>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;