import React, { useState } from "react";

const useToggleEle = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return { open, handleClose, handleOpen };
};

export default useToggleEle;
