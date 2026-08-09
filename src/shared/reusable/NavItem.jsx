import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink to={to} className="relative group">
      {({ isActive }) => (
        <>
          {children}

          <span
            className={`
              absolute
              left-0
              -bottom-1
              h-[1px]
              w-full
              bg-black
              origin-left
              transition-transform
              duration-300
              ease-out
              ${
                isActive
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }
            `}
          />
        </>
      )}
    </NavLink>
  );
};

export default NavItem;