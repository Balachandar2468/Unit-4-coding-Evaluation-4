import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20,display:"flex" , gap:"20px",textDecoration:"None" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <div>
      <Link to="/">Home</Link>

      </div>
      <div>
      <Link to="/about">About</Link>

      </div>
      <div>
      <Link to="/products">Product</Link>

      </div>

      <div>
      <Link to="/products/men">Men</Link>

      </div>
      <div>
      <Link to="/products/women">Women</Link>

      </div>
      <div>
      <Link to="/products/kids">Kids</Link>

      </div>
      <div>
      <Link to="/products/homedecor">Homedecor</Link>

      </div>

    </nav>
  );
};
