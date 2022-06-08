import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      dispatch(addPost(title, body, userId));
      setTitle("");
      setBody("");
      setUserId("");
    }
  };

  const canSave = Boolean(title && body && userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="users">Select user</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit" disabled={!canSave} className="btn-form">
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
