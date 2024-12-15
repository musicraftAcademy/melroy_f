import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const styles = {
	bgImg: {
		backgroundImage: `url("https://images.unsplash.com/photo-1733103373160-003dc53ccdba?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
		backgroundAttachment: "fixed",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},

	fancyText: {
		fontFamily: `"Quintessential"`,
		fontWeight: 400,
		fontStyle: "normal",
	},
};

export default function About() {
	return (
		<>
			<div className="py-10" style={styles.bgImg}>
				<Navigation></Navigation>
				<h2 className="font-bold text-5xl text-center py-5 text-white">
					ABOUT ME
				</h2>
			</div>
			<div className="py-2 px-10 bg-slate-900 text-white">
				<h3 style={styles.fancyText} className="text-3xl text-center py-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					animi praesentium magnam earum consectetur molestias in dolores
					itaque, doloremque exercitationem voluptatibus nesciunt.
				</h3>
				<img
					src="https://i.imgur.com/B4XIZ41.jpeg"
					alt=""
					className="sm:w-1/2 sm:m-auto"
				/>
				<div className="flex flex-col sm:flex-row gap-5 py-10 my-10">
					<img
						src="https://images.unsplash.com/photo-1733000546765-b3cbea52e6c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						className="sm:w-1/3"
					/>
					<div className="flex flex-col justify-around">
						<h4 className="text-center sm:text-left font-bold text-3xl text-blue-300">BIG HEADLINE</h4>
						<p className="text-center sm:text-left text-1xl sm:text-2xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Assumenda laborum rem suscipit, quas totam ea eligendi aliquam
							minus eveniet magni tempora quo, error voluptate illum deserunt
							exercitationem. Cumque, totam repellendus Lorem ipsum dolor sit,
							amet consectetur adipisicing elit. Assumenda laborum rem suscipit,
							quas totam ea eligendi aliquam minus eveniet magni tempora quo,
							error voluptate illum deserunt exercitationem. Cumque, totam
							repellendus Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Assumenda laborum rem suscipit, quas totam ea eligendi
							aliquam minus eveniet magni tempora quo, error voluptate illum
							deserunt exercitationem. Cumque, totam repellendus Lorem ipsum
							dolor sit, amet consectetur adipisicing elit. Assumenda laborum
							rem suscipit, quas totam ea eligendi aliquam minus eveniet magni
							tempora quo, error voluptate illum deserunt exercitationem.
							Cumque, totam repellendus
						</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-5 py-10 my-10">
					<div className="flex flex-col justify-around">
						<h4 className="text-center sm:text-left font-bold text-3xl text-blue-300">BIG HEADLINE</h4>
						<p className="text-center sm:text-left text-1xl sm:text-2xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Assumenda laborum rem suscipit, quas totam ea eligendi aliquam
							minus eveniet magni tempora quo, error voluptate illum deserunt
							exercitationem. Cumque, totam repellendus Lorem ipsum dolor sit,
							amet consectetur adipisicing elit. Assumenda laborum rem suscipit,
							quas totam ea eligendi aliquam minus eveniet magni tempora quo,
							error voluptate illum deserunt exercitationem. Cumque, totam
							repellendus Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Assumenda laborum rem suscipit, quas totam ea eligendi
							aliquam minus eveniet magni tempora quo, error voluptate illum
							deserunt exercitationem. Cumque, totam repellendus Lorem ipsum
							dolor sit, amet consectetur adipisicing elit. Assumenda laborum
							rem suscipit, quas totam ea eligendi aliquam minus eveniet magni
							tempora quo, error voluptate illum deserunt exercitationem.
							Cumque, totam repellendus
						</p>
					</div>
					<img
						src="https://images.unsplash.com/photo-1733000546765-b3cbea52e6c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						className="sm:w-1/3"
					/>
				</div>
				{/* <div className="flex justify-center gap-5 py-5">
          <div className="text-center w-1/2">
            <h4 className="font-bold text-2xl text-blue-300">BIG HEADLINE</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda laborum rem suscipit, quas totam ea eligendi aliquam
              minus eveniet magni tempora quo, error voluptate illum deserunt
              exercitationem. Cumque, totam repellendus Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Assumenda laborum rem suscipit,
              quas totam ea eligendi aliquam minus eveniet magni tempora quo,
              error voluptate illum deserunt exercitationem. Cumque, totam
              repellendus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Assumenda laborum rem suscipit, quas totam ea eligendi
              aliquam minus eveniet magni tempora quo, error voluptate illum
              deserunt exercitationem. Cumque, totam repellendus Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda laborum
              rem suscipit, quas totam ea eligendi aliquam minus eveniet magni
              tempora quo, error voluptate illum deserunt exercitationem.
              Cumque, totam repellendus
            </p>
          </div>
        </div> */}
				<div className="py-5 my-10">
					<h3 className="font-bold text-4xl text-white text-center">
						MY VISION
					</h3>
					<div
						className="flex items-center flex-col sm:flex-row gap-4 justify-center py-5
          "
					>
						<img
							src="https://i.imgur.com/dqyNjKz.jpeg"
							alt=""
							className="sm:w-1/4"
						/>
						<img
							src="https://images.unsplash.com/photo-1733077151689-5aa813706c08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
							className="sm:w-1/4"
						/>
						<img
							src="https://images.unsplash.com/photo-1733077151689-5aa813706c08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="sm:w-1/4"
							alt=""
						/>
					</div>
					<p className="text-1xl sm:text-2xl text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
						at temporibus? Pariatur explicabo animi quasi laboriosam corporis
						ea. Provident nihil repudiandae perferendis, nam commodi delectus
						obcaecati atque facilis reprehenderit at. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quibusdam corrupti deserunt nobis
						alias. Illum cumque, repellat deserunt obcaecati, hic nam quasi
						dolor, quidem eos nostrum eveniet facere laborum aliquid! Esse.
					</p>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
