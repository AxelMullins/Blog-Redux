import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <div key={post.id} className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 50)}</p>
      <PostsAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </div>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
