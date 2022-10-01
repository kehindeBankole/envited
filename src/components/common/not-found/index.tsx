
import { useNavigate } from 'react-router-dom'

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container mx-auto ">
        <div className="grid place-items-center ">
          <p className="text-primary-dark mt-8 font-medium"> Oops! Page not found.</p>
          <small className="w-[50ch] text-center text-light mt-2">
            There’s nothing here... The link you followed is probably broken or the page has been
            removed. We’re sorry you had to see this.
          </small>
        </div>
      </div>
    </div>
  )
}

export default NotFound
