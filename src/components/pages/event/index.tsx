import { TiPen } from "react-icons/ti";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EVENT_KEY } from "../../../constants";
import { IEvent } from "../../../types";
import Edit from "./EditModal";

function Event() {
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const eventDetails = JSON.parse(localStorage[EVENT_KEY]) as IEvent;

  return (
    <div className="container mx-auto md:py-10 lg:flex itmes-center  justify-center lg:h-screen">
      {!params.get("stage") ? (
        <div className="lg:flex justify-between lg:w-4/5 self-center">
          <div
            className="w-full aspect-[7/6] lg:aspect-[4/3] relative mb-3 md:mb-[2.25rem] bg-[#8456EC] lg:w-[31.25rem]  lg:h-[31.25rem] order-1 "
            data-test-id="feed-background-image"
            style={{
              backgroundImage: `url(${
                eventDetails?.image ??
                "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T000750Z&X-Amz-Expires=86400&X-Amz-Signature=ef1e87c8dae020f2dde2cae43b7cb792cdbf08306e5121d58cb3a460d6b83fe1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <button
              className="absolute p-4 rounded-full bg-white bottom-[-1.5rem] right-4"
              onClick={() => {
                setSearchParams({ stage: "edit" });
              }}
            >
              <TiPen />
            </button>
          </div>
          <div className="details px-5 md:p-0 order-0">
            <h2 className="text-dark text-[1.75rem] md:text-5xl font-bold">
              {eventDetails?.event_name ?? "Birthday Bash"}
            </h2>
            <p className="text-[#828282] text-sm md:text-lg">
              Hosted by{" "}
              <span className="font-bold">{eventDetails?.host_name}</span>
            </p>
            <div className="flex flex-col space-y-[2.063rem] mt-8">
              <div className="flex space-x-4">
                <div className="shadow-[0px_0px_5px_rgba(0, 0, 0, 0.1)] bg-white rounded-lg grid place-items-center w-14 h-14">
                  <img src="/calendar.svg" className="object-contain" />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-dark font-bold">
                      {new Date(`${eventDetails.startDate}`).toLocaleDateString(
                        "ng-NG",
                        {
                          day: "numeric",
                          month: "short",
                        }
                      )}{" "}
                      {new Date(`${eventDetails.startDate}`).toLocaleString(
                        "en-US",
                        { hour: "2-digit", minute: "2-digit", hour12: true }
                      )}
                    </p>
                    <p className="text-light text-sm">
                      to{" "}
                      <span className="font-bold">
                        {" "}
                        {new Date(`${eventDetails.endDate}`).toLocaleDateString(
                          "ng-NG",
                          {
                            day: "numeric",
                            month: "short",
                          }
                        )}{" "}
                        {new Date(`${eventDetails.endDate}`).toLocaleString(
                          "en-US",
                          { hour: "2-digit", minute: "2-digit", hour12: true }
                        )}
                      </span>{" "}
                      UTC +10
                    </p>
                  </div>
                  <img src="/arrow_front.svg" />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="shadow-[0px_0px_5px_rgba(0, 0, 0, 0.1)] bg-white rounded-lg grid place-items-center w-14 h-14">
                  <img src="/location.svg" className="object-contain" />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-dark font-bold">
                      {eventDetails?.location_name}
                    </p>
                    <p className="text-light text-sm">
                      Suburb, State, Postcode
                    </p>
                  </div>
                  <img src="/arrow_front.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Edit
          event={eventDetails}
          next={(event) => {
            localStorage.setItem(EVENT_KEY, JSON.stringify(event));
            navigate(-1);
          }}
        />
      )}
    </div>
  );
}

export default Event;
