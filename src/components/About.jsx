export default function About() {
  return (
    <>
      <div className="flex justify-center p-10 md:flex  mx-5 md:w-1/2 md:mx-10 lg:mx-20 ">
        <div className="leftSide space-y-10 text-xl text-gray-700">
          <div className="space-y-4">
            <h1 className="text-3xl ">Overview</h1>
            <div>
              <p className=" text-gray-700">
                In this guide, you'll learn how to build a responsive weather
                application using ReactJS and Tailwind CSS. The app will allow
                users to search for weather information by city and display
                real-time weather data fetched from a Weather API. You'll
                implement this using React's useState for state management,
                props for data passing, conditional rendering to manage UI
                updates, and async/await for handling asynchronous API requests.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl">Prerequisites</h1>
            <div>
              <p className=" ">
                <li> Basic understanding of ReactJS and JavaScript.</li>
                <li> Familiarity with Tailwind CSS for styling.</li>
                <li>
                  An API key from a Weather API provider (e.g., OpenWeatherMap,
                  WeatherAPI).
                </li>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl">Project Setup</h1>
            <div>
              <p className=" text-gray-700">
                
                  <li>
                    <strong>Initialize the React App:</strong> Start by creating a new React
                    project using create-react-app.
                  </li>
                  <li>
                    <strong>Install Tailwind CSS:</strong> Follow the Tailwind CSS installation
                    guide to set up Tailwind in your React project.
                  </li>
                  <li>
                    <strong>Obtain an API Key:</strong> Register with a weather data provider and
                    get your API key. This key will be used to make requests to
                    the Weather API.
                  </li>
                
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="">Testing and Running the App</h1>
            <div>
              <p className=" text-gray-700">
               <p><strong>Development Server:</strong> Run the development server and test the application by searching for various cities to see their weather data displayed.</p>
               <p><strong>Error Handling:</strong> Ensure that the application handles errors gracefully, such as when a city is not found or there's a network issue.</p>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="">Deployment</h1>
            <div>
              <p className=" text-gray-700">
              <strong>Deploying:</strong> Once you're satisfied with the application, deploy it using services like Vercel, Netlify, or GitHub Pages. These platforms make it easy to get your React app live with minimal setup.
              </p>
            </div>
          </div>


        </div>

        
      </div>
    </>
  );
}
