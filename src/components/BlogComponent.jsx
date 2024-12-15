export default function BlogComponent(props) {
  const link = String(props.title).replace(" ", "-");
  const title = String(
    String(props.title).charAt(0).toUpperCase() + String(props.title).slice(1)
  );
  return (
    <a href={`/blog/${link}`}>
      <div className="">
        <img src={props.img} alt="" className="" />
        <h3 className="text-white font-bold text-2xl">{title}</h3>
        <h5 className="text-white">{props.description}</h5>
      </div>
    </a>
  );
}
