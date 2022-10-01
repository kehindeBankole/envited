import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../components/common/not-found";
const CreateEvent = lazy(() => import("../components/pages/create-event"));
const Landing = lazy(() => import("../components/pages/landing"));
const Event = lazy(() => import("../components/pages/event"));
function AllRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen grid place-items-center w-full">loading</div>
        }
      >
        {" "}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/event" element={<Event />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AllRoutes;
