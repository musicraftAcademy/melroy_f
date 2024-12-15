import Navigation from "../components/Navigation";
import BlogComponent from "../components/BlogComponent";
import metadata from "../blogs/metadata.json";


const styles = {
	bgImg: {
		backgroundImage: `url("https://i.imgur.com/B4XIZ41.jpeg")`,
		backgroundAttachment: "fixed",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
}


export default function Blog() {
  metadata.map((data) => console.log(data));
  return (
    <>
				<div className="py-10" style={styles.bgImg}>
					<Navigation></Navigation>
					<h2 className="font-bold text-5xl text-center py-5 text-white">
						Blogs
					</h2>
				</div>
      <div className="py-2 px-10 bg-slate-900 h-svh ">
        <div className="py-10 grid sm:grid-cols-3 gap-4">
          {metadata.map((blog) => {
            return (
              <BlogComponent
                key="1"
                img={blog.img}
                title={blog.title}
                description={blog.description}
              ></BlogComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}
