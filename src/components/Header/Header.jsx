"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";

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
          <Image
            width={60}
            height={60}
            src={
              "https://www.carvach.com/images/landing_page/api-management.svg"
            }
          />
        </Link>
        <ul className="ul-for-nav">
          {navigation.map((item, index) => {
            return (
              <>
                <li className="ul-li" key={index}>
                  <Link className="link" href={`${item.navigate}`}>
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
