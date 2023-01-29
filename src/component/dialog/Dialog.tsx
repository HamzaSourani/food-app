import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { props } from "./type";

const Dialog: FC<PropsWithChildren<props>> = ({ children, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else if (!open) document.body.style.overflow = "auto";
  }, [open]);

  return (
    <div>
      {open && (
        <div className="  absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      )}
      <dialog
        open={open}
        className={
          " open:absolute open:top-1/3 open:z-50 open:m-auto open:p-4 open:border open:shadow open:rounded-xl"
        }
      >
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;
