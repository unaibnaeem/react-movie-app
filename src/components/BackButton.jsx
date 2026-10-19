import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="ml-4 w-fit rounded-md bg-sky-800 px-3 py-1 text-white lg:ml-12"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}

export default BackButton;
