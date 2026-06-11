import { Fragment } from "react/jsx-runtime";

const Posts = ({ posts }) => {
  const postLs = posts.map((post, index) => {
    return (
      <Fragment key={index}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </Fragment>
    );
  });
  return (
    <>
      <h3>Danh sách bài viết</h3>
      {postLs}
    </>
  );
};

export default Posts;
