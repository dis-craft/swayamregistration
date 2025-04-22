import Image from "next/image";
import FadeInBlock from "@/components/FadeInBlock";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 px-4 md:px-6">
      <FadeInBlock>
        <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8">
          About
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="order-2 md:order-1">
            <h4 className="text-xl sm:text-2xl py-2 md:py-3 text-center md:text-left">
              About MVJ College Of Engineering
            </h4>
            <p className="w-full md:w-auto md:max-w-xl lg:max-w-2xl h-auto">
              Founded in 1982 by the Venkatesha Education Society, MVJ College
              of Engineering has been a steadfast provider of quality education
              in engineering and technology. With a focus on holistic learning,
              the college offers well-structured programs that emphasize both
              theoretical foundations and practical applications. Over the
              years, MVJCE has nurtured a vibrant academic environment,
              fostering innovation, collaboration, and a strong sense of
              community. The institution values experiential learning,
              encouraging students to engage in projects that bridge academic
              concepts with real-world challenges. Its alumni carry forward a
              legacy of integrity and ingenuity, making meaningful contributions
              in diverse fields. MVJCE remains committed to shaping individuals
              who aspire to excel and drive positive change in society.
            </p>
          </div>

          <div className="order-1 md:order-2 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
            <Image
              src="/assets/AboutImg1.png"
              alt="AboutImg1"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeInBlock>

      <FadeInBlock>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
            <Image
              src="/assets/aboutSwayam.png"
              alt="AboutSwayam"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="md:order-1 order-2">
            <h4 className="text-xl sm:text-2xl py-2 md:py-3 text-center md:text-left">
              About Swayam
            </h4>
            <p className="w-full md:w-auto md:max-w-xl lg:max-w-2xl h-auto">
              For years, SWAYAM has been a beacon of creativity and expression,
              bringing together the brightest minds and talents in a celebration
              of cultural brilliance. Rooted in a legacy of excellence, SWAYAM
              has grown into a dynamic confluence of ideas, art, and innovation.
              It is more than just a fest; it is a tradition of passion, a
              testament to artistic exploration, and a stage where inspiration
              meets execution. Within its hallowed grounds, SWAYAM fosters a
              spirit of unity and showcases the boundless potential of human
              imagination. A journey in abundance of fascinating stories,
              voices, and visions, an exquisite tapestry of expression. SWAYAM
              stands not merely as an event but as a movement, echoing the
              unyielding drive to create, connect, and inspire.
            </p>
          </div>
        </div>
      </FadeInBlock>

      <FadeInBlock>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="order-2 md:order-1">
            <h4 className="text-xl sm:text-2xl py-2 md:py-3 text-center md:text-left">
              About the Theme
            </h4>
            <p className="w-full md:w-auto md:max-w-xl lg:max-w-2xl h-auto">
              VIRASATH, a vibrant blend of cultures and customs, the emblem of
              pride and motivation; ushers us to discover the rich artistic
              treasures of our past and weave them into the fabric of our
              present. It is an exultation of dynasties, a promenade to the
              folklore and manifestations that exemplify who we are. Through
              VIRAASATH, we bridge the classic with the contemporary, blending
              the echoes of yesterday with the aspirations of tomorrow. With
              every stride, a gateway to the mesmerizing bounty of eloquence, a
              glorious euphony of ethereal splendour. Embark with us on a
              journey through the extensive and vibrant culture of India, where
              even the smallest pieces stir a variety of narratives and an
              orchestra of melodies.
            </p>
          </div>
          <div className="order-1 md:order-2 w-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
            <Image
              src="/assets/AboutImg1.png"
              alt="AboutImg3"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeInBlock>
    </div>
  );
};

export default About;
