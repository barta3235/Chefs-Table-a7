import { GiChiliPepper } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-green-900 py-[100px]">

            <div className='flex gap-[10px] justify-center text-white'>
               <h1 className="text-[50px]"><GiChiliPepper /></h1>
               <h1 className="mb-[50px] text-[40px] font-bold">Chillies</h1>
            </div>

            <div className="flex flex-col lg:flex-row md:flex-row items-center gap-[60px] justify-center text-white">
              <h1 className="text-[30px]"><FaFacebook /></h1>
              <h1 className="text-[30px]"><FaInstagramSquare /></h1>
              <h1 className="text-[30px]"><FaGithub /></h1>
              <h1 className="text-[30px]"><FaTwitter /></h1>
              <h1 className="text-[30px]"><FaLinkedin /></h1>
              

            </div>
            
        </div>
    );
};

export default Footer;