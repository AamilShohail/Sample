import React from "react";
import { createPortal } from "react-dom";
import PortalChild from "./PortalChild";

export default function PortalDemo() {
  return createPortal(
    <div>
      <h1>This is portal demo</h1>
      <PortalChild />
    </div>,
    document.getElementById("portal-root")
  );
}
