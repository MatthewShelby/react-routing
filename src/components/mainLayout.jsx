import React from "react"
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
      return (
            <div>
                  

                  <h1 className="header">Header from main Layout</h1>
                  {children}
                  <Outlet/>
                  <h2 className="header">Footer from main Layout</h2>

            </div>
      )
};

export default MainLayout;
