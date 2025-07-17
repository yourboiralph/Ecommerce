import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return <div>

    <div className="text-2xl text-center pt-8 border-t ">
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum quam expedita tempore ex. Laboriosam facilis, ex dolorum itaque ea quas, unde suscipit, voluptatum asperiores perspiciatis iste. Eius excepturi neque voluptatum, itaque alias tempora porro autem dolorem, est suscipit voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita dolor voluptates similique debitis at ullam soluta officia sunt. Quos, at vitae. Ab ut enim quas molestiae placeat quod molestias natus ipsa quisquam, est veritatis et odio. Commodi, molestiae pariatur eligendi voluptates suscipit inventore ipsum repellat officiis beatae repellendus facilis.
        </p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat delectus cumque repellat earum soluta minus consequuntur animi nulla atque doloribus, possimus quaerat accusantium veritatis eos adipisci aperiam odio, voluptatem exercitationem repudiandae? Possimus laboriosam ipsum modi nesciunt, corrupti nostrum saepe error.</p>
      </div>
    </div>

    <div className="text-xl py-4 ">
      <Title text1={'WHY'} text2={'US?'}/>
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20 ">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio iure neque quis non adipisci fugiat tempora ullam voluptatibus qui?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio iure neque quis non adipisci fugiat tempora ullam voluptatibus qui?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Customer Service</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio iure neque quis non adipisci fugiat tempora ullam voluptatibus qui?</p>
      </div>
    </div>

    <NewsLetterBox />
  </div>;
};

export default About;
