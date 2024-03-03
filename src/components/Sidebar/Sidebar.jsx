"use client";

import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [responsive, setresponsive] = useState(false);

  function inputhandler(e) {
    console.log("type value in serchbar:- ", e.target.value);
  }

  // DEFINE DEBOUNCE
  let timer;
  const debounce = (e) => {
    // clear interval
    clearTimeout(timer);
    timer = setTimeout(inputhandler(e), 1000);
    return timer;
  };

  const btnhandler = () => {
    setresponsive(true);
    if (responsive == true) {
      setresponsive(false);
    }
    if (responsive) {
      document.getElementById("aside-id").style.width = "90%";
      document.getElementById("input-id").style.display = "block";
    }
    if (responsive == false) {
      document.getElementById("aside-id").style.width = "0px";
      document.getElementById("input-id").style.display = "none";
    }
  };
  return (
    <>
      <aside className="aside" id="aside-id">
        <input
          id="input-id"
          className="sidebar-input"
          type="text"
          placeholder="type anything"
          onChange={(e) => debounce(e)}
        />

        {/* BUTTON USE FOR MAKE RESPONSIVE */}
      </aside>
      <button
        onClick={() => btnhandler()}
        type="button"
        className={`btn-responsive ${responsive ? "change-css" : ""}`}
      >
        {responsive ? "show" : "hide"}
      </button>
    </>
  );
};

export default Sidebar;
