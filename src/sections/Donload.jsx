import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex flex-col items-center max-lg:flex-row">
            <div className="flex-1 flex items-center max-lg:mr-6 mb-10">
              <img
                src="/images/icon2.ico"
                width={160}
                height={55}
                alt="icon"
                className="mr-4"
              />
              <p className="body-1 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we’ve got you covered.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <ul className="flex gap-4">
              {links.map(({ id, url, icon }, index) => (
                <li key={id} className="relative flex items-center">
                  {index > 0 && (
                    <img
                      src="/images/lines.svg"
                      alt="lines"
                      className="absolute left-[-25px] size-13/20 object-contain"
                    />
                  )}
                  <a
                    href={url}
                    className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                  >
                    <span className="absolute -top-2 rotate-90">
                      <Marker />
                    </span>
                    <span className="download_tech-icon">{icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
