import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="last-airia  tw-bg-[#080818] md:tw-bg-[#000]"
      >
        <div className="tw-flex tw-justify-between tw-items-center md:tw-gap-0 tw-gap-2 tw-mt-1 md:tw-mt-4">
          <div>
            <img src="./logo_landing.svg" alt="" className="logo" />
          </div>
          <div className="tw-flex md:tw-gap-8 tw-gap-2 tw-items-center">
            <div className="listext tw-cursor-pointer">How it works</div>
            <div className="listext tw-cursor-pointer">Technology</div>
            <div className="listext tw-cursor-pointer">Values</div>
            <div className="listext tw-cursor-pointer">Blog</div>
            <div className="listext tw-cursor-pointer">Careers</div>
          </div>
        </div>
        <div className="bdbottom"></div>
        <div className="tw-flex tw-justify-between tw-items-center mb-60">
          <div className="copy-right">2024 © All rights reserved.</div>
          <div className="tw-flex tw-gap-8 tw-items-center">
            <div className="tw-w-4 tw-cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgBtVaLlYMgELQES6CElGAJdqAl0AF0oB0kHVgCdmAJpgNK2HM48DiOn8/LvMdzg+zMsixrmiYDImqPIY6hjrHTD7Sd48dgzVXAyRLU4lktZKPSdB3w4SVyQfchcpH/F3gs52daOOfUti0xxswTv1NY19Ws2/fdnwYX8wVeoePj8SClFGmtDQHsECCNkDsoP/qoM0QgAHIQwQ7JY8Ie2mzup2k604Nn3/fGhhDE8b4ACQGVW9F13RklSJdlMUJCCKqAgkC25l0qEDVsHPo4jlSJvalZhVRgJ6FdgyoBAKTzPP+xawTepUWuolxJFsrThy4esiPbts0csEuPb2ewQkAm5e0l88txGAaS8tsFpVtIFXc9P4pYOfo3290H7C4B5m6zCt8gylQP8m82bIhE8Ew2O5AnnE74DREUQTC/m93H27UnIuk+ZFP4qn3ukxmcyesC+Uo3/l1wS+Dv6m3nkNI2x/EFF3faQ3WG+NYAAAAASUVORK5CYII="
                alt="twitter"
                className="tw-w-full"
              />
            </div>
            <div className="tw-w-4 tw-cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBtVaBcYMwDBS5DMAIHoFO0G6QbNCOQCeAbsAGYYNmg5AJcp0AOgHeQH1dleJrHCeG+O/+0Mm2XpaMgSgAZs7BCjyAPU8Y1VeChmIhizTAvdjdLaRZjRwPWVPeCl7xclShzB+F0ldztyw9+AIW4InjIbGMK9BeywD2lufh4GbvH/SLxyBfI8bW0xIpz6h2TvNRisDGM3AEW7U3msQ7aNUnJ+UD7EADvoGvnjjPUgLfmd+dZ8Cu1Wccn/kfCb7GE6df0cwSqLBb3sYzzaxpHj7BArQQ6bIss+AA+2Ki7OCb4lHoM6dwBawI9JQOXyJwpHTYi0BD6bBfSYPo9zw/Gq00PhNLz/WJpoZZml6qcyMHZ7FxbJ9f1j6JwN8Ip7yuHZGal6OmEDjlJ9MRkSs85prueMHfRakB3F0N6pOSBu+yHzs+v/olp9YqAAAAAElFTkSuQmCC"
                alt="linkedin"
                className="tw-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
