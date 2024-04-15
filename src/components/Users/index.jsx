import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import PageContainer from "../PageContainer";
import { Link } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
      let fromStorage = localStorage.getItem("isDark");
      setIsDark(fromStorage === "true" ? true : false);
    });
  }, []);

  return (
    <PageContainer>
      <div className={isDark ? "darkContainer" : null}>
        <button
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          {isDark ? "🔘" : "⚫"}
        </button>

        {users?.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="link">
            <h1>
              <button
                onClick={() =>
                  setUsers(users.filter((_user) => _user.id !== user.id))
                }
              >
                x
              </button>
              {user.username}
            </h1>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default Users;