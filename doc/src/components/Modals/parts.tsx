"use client";

import React, { useEffect, useRef } from "react";

export function Modal({
  isActive = false,
  cb,
  onanimatein,
  onanimateout,
  children,
}: React.ComponentPropsWithoutRef<"div"> & {
  isActive: boolean;
  cb: () => any;
  onanimatein?: string;
  onanimateout?: string;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isActive) {
      openModal();
    }
  }, [isActive]);

  const syncAddClasses = (arr: Array<string>) => {
    arr.forEach((classname) => modalRef.current.classList.add(classname));
  };
  const syncRemoveClasses = (arr: Array<string>) => {
    arr.forEach((classname) => modalRef.current.classList.remove(classname));
  };

  const closeModal = () => {
    syncAddClasses([onanimateout]);
    syncRemoveClasses([onanimatein]);
    setTimeout(() => {
      syncRemoveClasses(["flex"]);
      syncAddClasses(["hidden"]);
    }, 156);
  };

  const openModal = () => {
    syncAddClasses(["flex", onanimatein]);
    syncRemoveClasses(["hidden", onanimateout]);
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
    <Modal.MainWrapper ref={modalRef} toggleWrapper={toggleWrapper}>
      <Modal.Content>
        <Modal.CloseAction toggleModal={toggleModal} />
        {children}
      </Modal.Content>
    </Modal.MainWrapper>
  );
}

const CloseAction = ({ toggleModal }: { toggleModal: () => any }) => {
  return (
    <span className="cursor-pointer text-2xl" onClick={toggleModal}>
      &times;
    </span>
  );
};
Modal.CloseAction = CloseAction;

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white w-fit h-fit py-10 px-5 m-auto">{children}</div>
);
Modal.Content = Content;

const MainWrapper = React.forwardRef(
  (
    {
      children,
      toggleWrapper,
    }: React.ComponentPropsWithRef<"div"> & {
      toggleWrapper: (e: React.MouseEvent<HTMLDivElement>) => void;
    },
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      className={`fixed right-0 top-0 h-full w-full shadow-lg shadow-indigo-500/40 bg-red-500/20 hidden justify-center z-[999]`}
      onClick={toggleWrapper}
      ref={ref}
    >
      {children}
    </div>
  )
);
Modal.MainWrapper = MainWrapper;
