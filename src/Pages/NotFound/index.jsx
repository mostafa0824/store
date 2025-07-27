import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md md:max-w-lg">
        {/* Emoji or Icon */}
        <div className="text-8xl mb-6">😕</div>
        {/* or use an icon library like react-icons */}
        {/* <div className="text-8xl mb-6"><FiAlertTriangle className="inline" /></div> */}

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        The requested page was not found.
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-8">
          It appears that the page you are looking for does not exist, has been deleted, or you entered the address incorrectly.
        </p>
        
        {/* Action Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition duration-300">
          Return to the main page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;