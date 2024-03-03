"use client";

import Link from "next/link";
import "./Header.css";

export const Header = () => {
  const navigation = [
    {
      name: "Signup",
      navigate: "/",
    },
    {
      name: "Signin",
      navigate: "/",
    },
    {
      name: "About us",
      navigate: "/",
    },
  ];

  return (
    <>
      <div className="nav">
        <Link className="link" href={"/"}>
          logo
        </Link>
        <ul className="ul-for-nav">
          {navigation.map((item, index) => {
            return (
              <>
                <li className="ul-li" key={index}>
                  <Link
                    className="link"
                    key={index + "ass"}
                    href={`${item.navigate}`}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

// export default Header;
