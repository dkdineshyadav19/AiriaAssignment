import React from "react";

export default function Techno() {
  return (
    <div className="our-tech" id="our-technology">
    <div className="tw-p-6">
        <div className="out">Our Technology</div>
    </div>
    <div className="lg:tw-flex tw-items-center tw-justify-between">
        <div className="lg:tw-w-2/5">
            <div className="ai-text mt">Innovation</div>
            <div className="l-text mt"><b></b>
                <ul>• Search Engine: Redefining search dynamics</ul>
                <ul>• Database: Scalable, secure, and self-hosted</ul>
                <ul>• Pipeline: Seamlessly integrating data flows</ul>
                <ul>• LLM: Simplifying models for easy adoption</ul>
            </div>
        </div>
        <div className="lg:tw-w-3/5 lg:tw-ml-40  tw-h-[350px]">
            <div className="md:tw-w-[22rem] tw-w-64 lg:tw-mt-5 tw-mt-8 lg:tw-mx-0 tw-mx-auto"><img
                    src="./Frame.svg" alt=""
                    className="tw-w-full"/></div>
        </div>
    </div>
    <div className="bdm"></div>
    <div className="tw-flex md:tw-justify-between kls md:tw-gap-0 tw-gap-4">
        <div className="tw-mt-0">
            <div className="mos tw-mb-4"></div>
            <p className="bdm--ai-text">Innovation</p>
        </div>
        <div className="tw-mt-4">
            <p className="bdm--ai-text2">Autonomy &amp; Control</p>
        </div>
        <div className="tw-mt-4">
            <p className="bdm--ai-text2">Security and Privacy</p>
        </div>
        <div className="tw-mt-4">
            <p className="bdm--ai-text2">AI &amp; Machine Learning</p>
        </div>
    </div>
</div>

  );
}
