"use client";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

type propTypes = {
  children: React.ReactNode;
};

const LayoutContainer = ({
  children
}: propTypes) => {


    const ContentComponent = ({isMain}:{isMain:boolean}) => {
        return (
          <>
            <div>
              <Header />
            </div>
            <div className="min-h-[80vh] bg-gray-100 py-20">
                {children}
            </div>
            <div>
              <Footer />
            </div>
          </>
        );
      };

  return (
    <div>
      <ContentComponent isMain={false}/>
    </div>
  )
}

export default LayoutContainer
