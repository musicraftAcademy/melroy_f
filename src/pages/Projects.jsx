import projectData from "../assets/projects.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectComponent from "../components/ProjectComponent";

export default function Projects() {
  console.log(projectData);
  return (
		<>
    <div className="bg-white text-black h-screen">
      <Navigation></Navigation>
      <h2 className="font-bold text-5xl text-center py-5 text-black">
        Projects
      </h2>
      <p className="text-center font-bold text-1xl">
        These are some of the projects i&apos;ve worked on over the past years
      </p>
      <div className="sm:grid grid-cols-3 gap-4 px-10 py-10">
        {projectData.map((project) => {
          return (
            <ProjectComponent
              key="1"
              img={project.img}
              projectLink={project.projectLink}
              projectTitle={project.projectTitle}
              projectPosition={project.projectPosition}
              projectDescription={project.projectDescription}
            />
          );
        })}
      </div>
    </div>
			<Footer />
		</>
  );
}
