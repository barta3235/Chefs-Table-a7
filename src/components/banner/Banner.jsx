const Banner = () => {
    return (
        <div className="mb-[100px] px-[10px] lg:px-[200px] font-lexend text-[36px] lg:text-[52px] font-bold text-center bg-[url('https://i.ibb.co/jRbpLdC/pexels-lumn-568370-1.jpg')] bg-cover lg:mx-[100px] mx-[10px] rounded-3xl">
            <h1 className="mb-6 pt-10 lg:pt-[130px] text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-white text-[18px] font-normal mb-10">Chili Chronicles: Unleashing Flavorful Fire. Dive into a culinary odyssey with a collection of recipes showcasing the diverse world of chili peppers. From mild to wild, experience the tantalizing heat and bold flavors that will ignite your palate.</p>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center pb-[90px] lg:pb-[130px]">
                <button className="text-[20px] font-semibold rounded-full bg-[#0BE58A] lg:px-[50px] py-[20px]">Explore</button>

                <button className="text-white text-[20px] font-semibold rounded-full bg-transparent  lg:px-[30px] py-[20px] border border-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;