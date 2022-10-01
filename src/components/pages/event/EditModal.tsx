import React, { useState } from "react";
import { EVENT_KEY } from "../../../constants";
import { IEvent } from "../../../types";

function Edit(props: { event: any; next: (event: IEvent) => void }) {
  const { event, next } = props;
  const [details, setDetails] = useState({
    host_name: event.host_name ?? "",
    event_name: event.event_name ?? "",
    location_name: event.location_name ?? "",
    image: event.image ?? "",
    startDate: event.startDate ?? "",
    endDate: event.endDate ?? "",
  });

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <div className="p-6 overflow-x-hidden container mx-auto">
      <h1 className="text-dark text-2xl font-semibold">Edit event</h1>
      <form className="mt-4">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="host_name"
            className="py-2 text-sm text-sm w-full rounded-md pl-10 py-4 text-dark"
            placeholder="Enter host name"
            onChange={handleChange}
            value={details.host_name}
          />
        </div>

        <div className="bg-transparent  mt-10 relative">
          <p className="text-dark font-medium text-lg">set event image</p>
          <div
            className="h-60 w-full rounded-xl grid place-items-center mt-4 relative bg-[#8456EC]"
            style={{
              backgroundImage: `url(${details.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="flex items-center space-x-4">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Regular"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <title>upload</title>
                <g id="upload-Regular">
                  <path
                    id="upload-Regular-2"
                    data-name="upload-Regular"
                    className="cls-1 text-white"
                    fill="currentColor"
                    d="M8.47,7.531a.75.75,0,0,1,0-1.061l3-3a.749.749,0,0,1,1.06,0l3,3a.75.75,0,0,1-1.06,1.061l-1.72-1.72V11a.75.75,0,0,1-1.5,0V5.811L9.53,7.531A.751.751,0,0,1,8.47,7.531ZM17,10.25a.75.75,0,0,0,0,1.5A3.254,3.254,0,0,1,20.25,15v1A3.254,3.254,0,0,1,17,19.25H7A3.254,3.254,0,0,1,3.75,16V15A3.254,3.254,0,0,1,7,11.75a.75.75,0,0,0,0-1.5A4.756,4.756,0,0,0,2.25,15v1A4.756,4.756,0,0,0,7,20.75H17A4.756,4.756,0,0,0,21.75,16V15A4.756,4.756,0,0,0,17,10.25ZM18,15a1,1,0,1,0-1,1A1,1,0,0,0,18,15Z"
                  />
                </g>
              </svg>
              <p className="text-white">upload thumbnail</p>
            </div>
            <input
              type="file"
              name="id-image"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const reader = new FileReader();
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onload = function () {
                    setDetails({
                      ...details,
                      image: reader.result as string,
                    });
                  };
                }
              }}
              className="absolute inset-0  opacity-0 cursor-pointer"
              aria-labelledby="change-plan-image-label"
            />
          </div>
        </div>

        <div className="relative text-gray-600 focus-within:text-gray-400 mt-10">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="event_name"
            className="py-2 text-sm text-sm w-full rounded-md pl-10 py-4 text-dark"
            placeholder="Enter event name"
            onChange={handleChange}
            value={details.event_name}
          />
        </div>

        <div className="relative text-gray-600 focus-within:text-gray-400 mt-10">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="location_name"
            className="py-2 text-sm text-sm w-full rounded-md pl-10 py-4 text-dark"
            placeholder="Enter event location"
            onChange={handleChange}
            value={details.location_name}
          />
        </div>
        <div className="flex flex-col space-y-10 mt-10 w-full">
          <div>
            <p className="text-dark text-sm mb-2">select starting date</p>
            <input
              type="datetime-local"
              name="startDate"
              className="bg-[#8456EC] w-full p-6 rounded-lg"
              onChange={handleChange}
              value={details.startDate}
            />
          </div>
          <div>
            <p className="text-dark text-sm mb-2">select ending date date</p>
            <input
              type="datetime-local"
              name="endDate"
              className="bg-[#8456EC] w-full p-6 rounded-lg"
              onChange={handleChange}
              value={details.endDate}
            />
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.setItem(EVENT_KEY, JSON.stringify(details));
            next(details);
          }}
          type="button"
          className="bg-gradient-to-r from-[#8456EC] w-1/2 to-[#E87BF8] p-4 rounded-xl w-full mt-[2.125rem]"
          disabled={!Object.values(details).every(Boolean)}
        >
          <span className="text-white">🎉 Next</span>
        </button>
      </form>
    </div>
  );
}

export default Edit;
