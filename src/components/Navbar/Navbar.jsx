import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    switch (user.role) {
      case "admin":
        fetch("https://lms-4etp.onrender.com/admin_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
      case "teacher":
        fetch("https://lms-4etp.onrender.com/teacher_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
      case "student":
        fetch("https://lms-4etp.onrender.com/student_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            console.log(user);
            navigate("/");
          }
        });
        break;
      case "parent":
        fetch("https://lms-4etp.onrender.com/parent_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
    }
  }
  return (
    <nav
      className="flex items-center justify-between flex-wrap  p-6"
      style={{ backgroundColor: "#ffff", color:'#1EB2A6' }}
    >
      <Link
        to="/"
        className="heading"
        style={{
          fontSize: "35px",
          fontWeight: "bolder",
          fontFamily: "cursive",
          color: "#1EB2A6",
        }}
        >
        <div>
        ABC SCHOOLS
        {/* <i class="fas fa-graduation-cap"></i> */}
        </div>
      </Link>
      {user ? (
        <h1 style={{fontSize:'20px', fontFamily:'cursive', fontWeight:'bold'}} className=" hover:text-black-200 ">
          Hi {user.username} &#128522;
        </h1>
      ) : null}
      {user ? (
        <button style={{fontFamily:'inherit', fontWeight:'bolder'}}
          className="btn-lg btn-light" data-mdb-ripple-color="light"
          onClick={handleLogout}
        >
          LOGOUT
          <FaPowerOff style={{color:'#1EB2A6'}} className="inline ml-2 mb-1" />
        </button>
      ) : (
        <Link
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "cursive",
            
          }}
          to="/login"
        >
          <FaUserCircle className="inline mr-2  mb-1" />
          Login
        </Link>
      )}
    </nav>
  );
}
export default Navbar;