"use client";

import React, { useEffect, useRef } from "react";

export const ModalA = ({ isActive = false, cb }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isActive) {
      openModal();
    }
  }, [isActive]);

  const closeModal = () => {
    modalRef.current.classList.remove("flex");
    modalRef.current.classList.add("hidden");
  };

  const openModal = () => {
    modalRef.current.classList.add("flex");
    modalRef.current.classList.remove("hidden");
  };

  const toggleModal = () => {
    if (getComputedStyle(modalRef.current).display == "flex") {
      closeModal();
      cb();
    } else {
      openModal();
    }
  };

  const toggleWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  return (
    <div
      className={`fixed right-0 top-0 h-full w-full shadow-lg shadow-indigo-500/40 bg-red-500/20 hidden justify-center z-[999]`}
      onClick={toggleWrapper}
      ref={modalRef}
    >
      <div className="bg-white w-fit h-fit py-10 px-5 m-auto">
        <span className="cursor-pointer text-2xl" onClick={toggleModal}>
          &times;
        </span>
        <div>
          <h1>Header: Title</h1>
          <p>Body: Lorem ipsum dolor sit a.</p>
          <p>Footer: Soluta ipsum</p>
        </div>
      </div>
    </div>
  );
};
