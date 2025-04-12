import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <section>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>-
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/hobbies">Hobbies</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </section>
  )
}
