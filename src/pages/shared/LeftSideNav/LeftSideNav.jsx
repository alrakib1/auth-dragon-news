import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h3 className="text-2xl text-center">All Categories</h3>
      {categories.map((category) => (
        <NavLink to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold" key={category.id}>
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
