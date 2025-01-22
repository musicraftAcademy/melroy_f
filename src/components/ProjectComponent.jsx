/* eslint-disable react/prop-types */
export default function ProjectComponent(props) {
  return (
    <a 
      href={props.projectLink} 
      className="block p-6 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-200 transition duration-300"
    >
      <h3 className="text-3xl font-bold text-yellow-900 mb-2">{props.projectTitle}</h3>
      <h5 className="text-lg text-gray-500">{props.projectPosition}</h5>
      {props.projectDescription && (
        <p className="text-gray-700 mt-4">{props.projectDescription}</p>
      )}
    </a>
  );
}
