import "./styles/DownloadStyles.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { Element } from "react-scroll";

export const Download = () => {
  return (
    <section className="download">
      <h2 className="download-title">
        <Element name="download-section" id="download-section">
          Download
        </Element>
      </h2>
      <p className="download-text">
        You can download the desktop application for Windows
      </p>
      <div className="download-buttons">
        <a href="https://github.com/Waxer59/DinamicJs-Desktop/releases" target="_blank">
          <BiDownload />
          &nbsp; Download
        </a>
      </div>

      <section className="download-web-version">
        <p className="download-text">
          Or if you don't want to install anything you can use the web version
          clicking the button below
        </p>
        <div className="download-buttons">
          <a href="https://dinamicjs.netlify.app/" target="_blank">
            <BsBoxArrowUpRight />
            &nbsp; Web version
          </a>
        </div>
      </section>
    </section>
  );
};
