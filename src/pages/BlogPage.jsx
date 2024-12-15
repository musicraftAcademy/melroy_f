import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Header1 = styled.h1`
  color: white;
`;
const Header2 = styled.h2`
  color: white;
`;
const Header3 = styled.h3`
  color: white;
`;
const Header4 = styled.h4`
  color: white;
`;
const Header5 = styled.h5`
  color: white;
`;
const Header6 = styled.h6`
  color: white;
`;
const strong = styled.strong`
  color: white;
`;

const links = styled.a`
  color: white;
`;

const BlogRenderer = () => {
  const params = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../blogs/${params.id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="bg-slate-900">
      <Navigation></Navigation>
      <div className="px-5 sm:px-0 py-5 flex sm:justify-center">
        <Markdown
          options={{
            overrides: {
              h1: { component: Header1 },
              h2: { component: Header2 },
              h3: { component: Header3 },
              h4: { component: Header4 },
              h5: { component: Header5 },
              h6: { component: Header6 },
              a: { component: links },
              strong: { component: strong },
              code: { component: strong },
            },
          }}
          className="prose lg:prose-xl  text-white"
          style={{ width: "100%" }}
        >
          {post}
        </Markdown>
      </div>
    </div>
  );
};

export default BlogRenderer;
