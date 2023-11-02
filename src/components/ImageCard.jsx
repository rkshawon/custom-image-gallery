import PropTypes from "prop-types";
import { useState } from "react";

const ImageCard = ({ id, imageSrc, getSelectedItems }) => {
  const [checked, setChecked] = useState("");
  return (
    <>
      <div
        className={`sm:scale-150 w-3 z-10 h-3 text-xl top-2 left-2 sm:top-4 sm:left-4 absolute rounded-sm cursor-pointer bg-white ${
          checked !== id &&
          "opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        }`}
        onClick={() => {
          checked === "" ? setChecked(id) : setChecked("");
          getSelectedItems(id);
        }}
      >
        {checked === id && (
          <input type="checkbox" defaultChecked className="absolute" />
        )}
      </div>
      <div
        className={`absolute h-full w-full rounded-md ${
          checked === id && "bg-gray-300 opacity-50 "
        } ${
          checked !== id &&
          "opacity-0 bg-black group-hover:opacity-60 transition-opacity duration-700"
        }   `}
      ></div>
      <img
        src={imageSrc}
        alt=""
        className="rounded-md"
        style={{ width: "100%" }}
      />
    </>
  );
};

ImageCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  getSelectedItems: PropTypes.func.isRequired,
};

export default ImageCard;
