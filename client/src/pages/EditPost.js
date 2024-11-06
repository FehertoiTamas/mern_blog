import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState("")

  function updatePost(e) {
    e.preventDefault();
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        placeholder={'Title'}
        value={title}
        onChange={(e) => { setTitle(e.target.value) }} />
      <input
        type="summary"
        placeholder={'Summary'}
        value={summary}
        onChange={(e) => { setSummary(e.target.value) }} />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form >
  )
}

export default EditPost