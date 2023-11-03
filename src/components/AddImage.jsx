import img from "../images/addimage.jpeg";

const AddImage = () => {
  return (
    <div
      className={`rounded-md text-sm md:text-lg shadow-sm bg-gray-50 border-dotted border-2 border-gray-400
      flex justify-center items-center flex-col font-semibold col-span-1 row-span-1 group  `}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default AddImage;
