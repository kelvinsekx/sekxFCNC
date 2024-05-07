import * as React from "react";
import { ModalA } from "./modalA";

import { Modal } from "./parts";

export function ModalParent() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <fieldset className="my-4 border-2 border-black/60 py-2 px-4">
      <legend className="py-4 text-2xl">Live Examples</legend>
      <button
        onClick={() => setIsActive((pre) => !pre)}
        className="bg-green-200 text-green-800 border-2 border-green-800 py-1 px-4 rounded-md"
      >
        ModalA
      </button>
      <ModalA isActive={isActive} cb={() => setIsActive(false)} />
    </fieldset>
  );
}
export function ModalsWithAnimation() {
  const [isActive, setIsActive] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  return (
    <fieldset className="my-4 border-2 border-black/60 py-2 px-4">
      <legend className="py-4 text-2xl">Modals with Animation</legend>
      <div className="space-x-2">
        <button
          onClick={() => setIsActive((pre) => !pre)}
          className="bg-green-200 text-green-800 border-2 border-green-800 py-1 px-4 rounded-md"
        >
          FadeInDown
        </button>
        <button
          onClick={() => setIsActive2((pre) => !pre)}
          className="bg-green-200 text-green-800 border-2 border-green-800 py-1 px-4 rounded-md"
        >
          ZoomIn
        </button>
      </div>
      <Modal
        isActive={isActive}
        cb={() => setIsActive(false)}
        onanimateout="animate-modal-ease-out"
        onanimatein="animate-modal-ease-in"
      >
        <div>
          <h1>Header: Title</h1>
          <p>Body: Lorem ipsum dolor sit a.</p>
          <p>Footer: Soluta ipsum</p>
        </div>
      </Modal>
      <Modal
        isActive={isActive2}
        cb={() => setIsActive2(false)}
        onanimateout="animate-modal-zoom-out"
        onanimatein="animate-modal-zoom-in"
      >
        <div>
          <h1>Header: Title</h1>
          <p>Body: Lorem ipsum dolor sit a.</p>
          <p>Footer: Soluta ipsum</p>
        </div>
      </Modal>
    </fieldset>
  );
}
