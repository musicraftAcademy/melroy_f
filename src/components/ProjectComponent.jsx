/* eslint-disable react/prop-types */
export default function ProjectComponent(props) {
  return (
    <a href={props.projectLink}>
      <img src={props.img} className="" alt="" />
      <h3 className="text-3xl font-bold">{props.projectTitle}</h3>
      <h5 className="text-1xl text-gray-400">{props.projectPosition}</h5>
      <p>{props.projectDescription}</p>
    </a>
  );
}
