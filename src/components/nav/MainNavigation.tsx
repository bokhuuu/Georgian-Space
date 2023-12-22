import { NavLink } from "react-router-dom";

interface MainNavLinks {
  to: string;
  label: string;
}

interface MainNavLinkProps {
  MainNavLinks: MainNavLinks[];
}

const MainNavigation = ({ MainNavLinks }: MainNavLinkProps) => {
  return (
    <>
      <nav>
        <ul>
          {MainNavLinks.map((MainNavLink) => (
            <li key={MainNavLink.to}>
              <NavLink to={MainNavLink.to}>{MainNavLink.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
