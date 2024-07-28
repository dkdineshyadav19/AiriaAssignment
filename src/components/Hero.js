import React from "react";

export default function hero() {
  return (
    <>
      <main>
        <div className="landing-page">
          <div className="top-section">
            <div className="background-image"></div>
            <div className="header-section">
              <div className="tw-flex tw-items-center tw-justify-between">
                <div>
                  <img src="./logo_landing.svg" alt="" className="logo" />
                </div>
                <div className="tw-hidden md:tw-flex tw-items-center tw-gap-8">
                  <div className="tw-cursor-pointer">How it works</div>
                  <div className="tw-cursor-pointer">Technology</div>
                  <div className="tw-cursor-pointer">Values</div>
                  <div className="tw-cursor-pointer">Blog</div>
                  <div className="tw-cursor-pointer">Careers</div>
                  <button className="started-btn">GetStarted</button>
                </div>
                <div className="tw-block md:tw-hidden">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="MenuIcon"
                  >
                    <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                  </svg>
                </div>
              </div>
              <div className="main-text tw-mt-7 md:tw-mt-0">
                <div className="brit-text">
                  <div>AI Search that</div>
                  <div className="word-container md:tw-w-[1000px]">
                    <span className="class1">reads intent</span>
                  </div>
                </div>
                <div className="yes tw-mt-3">
                  Airia is an enterprise search engine designed to help users
                  find exactly
                  <br /> what they need without the hassle of using the right
                  keywords.
                </div>
                <button className="req-btn tw-mt-5">Request Demo</button>
              </div>
            </div>
            <div class="mt-[50px] tw-flex tw-justify-center tw-items-center tw-h-screen bg-[#10121D]  tw-h-[475px] tw-relative border-2 border-purple-400 rounded-[50px] p-4">
              <div class="tw-absolute tw-top-[60px] tw-rounded-2xl tw-overflow-hidden">
              <div class="flex w-full">
                <input type="text" placeholder="Describe what you want" class="border border-gray-300 rounded-l-lg px-4 py-2 bg-[#10121D] text-white w-[962px] h-[60px] rounded-r-none" />
                <button class="bg-purple-600 text-white rounded-r-lg px-4 py-2 hover:bg-purple-700 w-[120px] h-[60px]">
                    Search
                </button>
            </div>
            <div class="mt-[50px] w-full flex flex-col items-start">
                    <div class="flex flex-col gap-2">
                        <div class="bg-[#43454F] w-[855px] h-[25px]"></div>
                        <div class="bg-[#43454F] w-[492px] h-[15px] rounded-full"></div>
                        <div class="bg-[#43454F] w-[681px] h-[15px] rounded-full"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
