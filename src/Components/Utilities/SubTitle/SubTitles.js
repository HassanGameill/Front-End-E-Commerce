import { Link } from "react-router-dom";
import "./subTitles.css";

function SubTitles({ title, btnTitle, pathText }) {
  return (
    <div className="d-flex justify-content-between pt-4">

      {
        btnTitle ? (
          <Link to={`${pathText}`} style={{textDecoration: "none", color: "#222"}}>
            <div className="shopping-now">{btnTitle}</div>
          </Link>
        ) : null
      }

      <div className="sub-title">{title}</div>
    </div>
  );
}

export default SubTitles;
