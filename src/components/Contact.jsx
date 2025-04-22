import Image from "next/image";
import FadeInBlock from "./FadeInBlock";

const Contact = () => {
  return (
    <div className="bg-[#453517] text-[#f9efd1] py-10 px-4 sm:px-6 md:px-8">
      <FadeInBlock>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-5 sm:mb-10 md:mb-8">Contact Us</h2>
      </FadeInBlock>
      
      <div className="max-w-4xl mx-auto">
        <FadeInBlock>
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-14">
            {/* Contact Information */}
            <div className="flex flex-col gap-6 md:gap-5">
              <div className="bg-[#5a471f] bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-sm mb-2 font-medium">Phone</h3>
                <p className="py-1">080-4299-1022</p>
                <p className="py-1">080-4299-1000</p>
              </div>
              
              <div className="bg-[#5a471f] bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-sm mb-2 font-medium">Faculty Coordinators</h3>
                <p className="py-1">Hameem: 9620659690</p>
                <p className="py-1">Magesh: 9786243356</p>
              </div>
            </div>
            
            {/* Email Information */}
            <div className="bg-[#5a471f] bg-opacity-30 p-4 rounded-lg md:self-start">
              <h3 className="text-sm mb-2 font-medium">Email</h3>
              <p className="py-1 break-words">helpdesk@mvjce.edu.in</p>
              
              {/* Optional: Add more contact methods */}
              <div className="mt-4">
                <h3 className="text-sm mb-2 font-medium">Address</h3>
                <p className="py-1">
                  MVJCE Campus, Near ITPB,<br />
                  Whitefield, Bangalore,<br />
                  Karnataka - 560067
                </p>
              </div>
            </div>
          </div>
        </FadeInBlock>
      </div>
    </div>
  );
};

export default Contact;