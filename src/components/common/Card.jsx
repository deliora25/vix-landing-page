import PropTypes from "prop-types";

const Card = ({ renderTitle, description, renderButton, image }) => {
  return (
    <div className="h-full w-full border rounded-lg border-gray-500 p-6 mx-auto max-w-full shadow-gray-400 shadow-sm">
      <div className="flex flex-1 flex-wrap w-full h-full space-y-4 md:flex-row flex-col md:space-x-4 lg:space-x-8">
        <div className="flex flex-col text-start w-full h-full sm:space-y-8 space-y-4 sm:flex-1">
          <div>{renderTitle}</div>
          <p className="text-gray-400 w-full md:w-full">{description}</p>
          {renderButton()}
        </div>
        <div className="w-full sm:w-auto sm:flex-1 h-auto sm:flex sm:items-center md:max-h-[400px] md:max-w-[400px] max-h-full max-w-full">
          <img
            src={image}
            alt="alt-image"
            className="rounded-lg text-gray-300 w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  renderTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  renderButton: PropTypes.func.isRequired,
  image: PropTypes.string,
};

export default Card;
