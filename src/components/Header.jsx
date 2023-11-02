import PropTypes from "prop-types";

const Header = ({ totalSelected, deleteItems }) => {
  return (
    <div className="px-8 py-5 border-b-2">
      {totalSelected == 0 ? (
        <h2 className="text-xl font-bold"> Gallery</h2>
      ) : (
        <div className="flex justify-between items-end">
          <h2 className="font-bold text-xl">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={true}
                className="w-3 h-3 text-xl mr-2 scale-150 rounded-sm"
              />

              <span className="text-xl">{totalSelected} File Selected</span>
            </label>
          </h2>
          <div
            className="font-semibold text-red-700 cursor-pointer hover:border-red-700 border-white border-b-[1px] leading-[14px]"
            onClick={() => deleteItems()}
          >
            {totalSelected > 1 ? "Delete files" : "Delete file"}
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  totalSelected: PropTypes.number,
  deleteItems: PropTypes.func,
};

export default Header;
