import { ReactNode } from "react";
import { Link } from "react-router-dom";

export type NavLinkProps = {
  label?: string | ReactNode;
  href: string;
  items?: NavLinkProps[];
  children?: ReactNode;
};

export const NavLink = ({ label, href, children }: NavLinkProps) => {
//   let color = "transparent";

  //   if (router.asPath === href) {
  //     color = "presight.black";
  //   }

  return (
    <Link
      to={href}
    //   fontFamily={"heading"}
    //   fontWeight={500}
    //   px={{ base: 2, md: 4 }}
    //   py={{ base: 1, md: 2 }}
    //   _hover={{
    //     textDecoration: "none",
    //   }}
 
    >
      {label ? label : children}

    </Link>
  );
};

export default NavLink;
