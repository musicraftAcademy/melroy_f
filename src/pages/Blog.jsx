import Navigation from "../components/Navigation";
import BlogComponent from "../components/BlogComponent";
import Footer from "../components/Footer";
import metadata from "../blogs/metadata.json";

const styles = {
	bgImg: {
	  backgroundImage: `url("https://i.imgur.com/bk5Obix.jpeg")`,
	  backgroundAttachment: "fixed",
	  backgroundPosition: "left top",
	  backgroundRepeat: "no-repeat",
	  backgroundSize: "cover",
	},
  };

export default function Blog() {
  metadata.map((data) => console.log(data));
  return (
		<>
			<div style={styles.bgImg} className=" min-h-screen bg-white text-white">
				<Navigation></Navigation>
				<h2 className="font-bold text-5xl text-center py-5 text-yellow-400">
					Blogs
				</h2>
			<div className="px-10">
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
			</div>
			<Footer />
		</>
  );
}
