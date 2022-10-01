import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col py-10 lg:justify-center lg:h-screen  items-center container mx-auto">
      <div className="header flex flex-col items-center lg:flex-row justify-between lg:w-4/5">
        <div className="grid place-items-center lg:place-items-end lg:order-1">
          <p className="text-dark text-4xl lg:text-6xl font-bold">Imagine if</p>
          <p className="text-dark text-4xl  lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Snapchat
          </p>

          <p className="text-dark text-4xl lg:text-6xl font-bold">had events</p>
          <p className="text-light font-light  text-center mt-4 lg:text-2xl  lg:text-right w-[30ch] lg:w-[35ch]">
            Easily host and share events with your friends across any social
            media.
          </p>
          <button
            onClick={() => navigate("/create")}
            type="button"
            className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] p-4 rounded-xl w-1/2 mt-[2.125rem] hidden lg:block"
          >
            <span className="text-white">🎉 Create my event</span>
          </button>
        </div>
        <img
          className="w-1/2  lg:w-[27.5rem] h-full object-contain mt-[2.25rem] drop-shadow-[0px_0px_17.6435px_rgba(0, 0, 0, 0.05)] lg:order-0 lg:h-[40rem]"
          alt="event banner"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T225719Z&X-Amz-Expires=86400&X-Amz-Signature=99a5dec6b6bb0403220e403126f67771c4ec8921a7465c5ed2a059cda616969c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        />

        <button
          onClick={() => navigate("/create")}
          type="button"
          className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] p-4 rounded-xl w-1/2 mt-[2.125rem] lg:hidden"
        >
          <span className="text-white">🎉 Create my event</span>
        </button>
      </div>
    </div>
  );
}

export default Landing;
