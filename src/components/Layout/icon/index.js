import React from "react";
import s from "../Layout.module.scss";

const Index = ({menuResponsiveShow,setmenuResponsiveShow}) => {

    const handleFlagShowMenu = () => {
        setmenuResponsiveShow((prev) => !prev);
      };
  return (
    <>
      <div
        className={s["burger-icon"]}
        style={
          menuResponsiveShow
            ? { visibility: "hidden", opacity: 0, transition: "all 0.5s" }
            : { visibility: "visible", opacity: 1, transition: "all 0.5s" }
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
          color="lightgray"
          // style={{position:'absolute',top:20,right:20,cursor:'pointer',zIndex:10000}}

          onClick={() => handleFlagShowMenu()}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div
        className={s["burger-icon"]}
        style={
          !menuResponsiveShow
            ? { visibility: "hidden", opacity: 0, transition: "all 0.5s" }
            : { visibility: "visible", opacity: 1, transition: "all 0.5s" }
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
          onClick={() => handleFlagShowMenu()}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </>
  );
};

export default Index;
