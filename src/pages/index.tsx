import { Inter } from "next/font/google";

import sites from "../data/sites";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen flex justify-between flex-col items-center p-20 ${inter.className}`}
    >
      <header className="flex flex-col text-center gap-2 mb-20">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Linear Inspirations
        </h1>

        <h3 className="text-gray-500">
          A collection of websites inspired by Linear
        </h3>
      </header>

      <section className="grid xl:grid-cols-2 gap-20">
        {sites.map((site) => (
          <div className="flex flex-col gap-4 items-center" key={site.name}>
            <div
              className="relative group hover:scale-105 
            transform transition duration-1000 hover:duration-200 hover:ease-in-out
            "
            >
              <div
                style={{
                  // @ts-ignore
                  "--tw-gradient-from": site.colors[0],
                  "--tw-gradient-to": site.colors[1],
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)] rounded-lg blur-[120px] opacity-25 group-hover:opacity-75 group-hover:blur-xl 
                hover:duration-1000
                hover:ease-in-out
                group-hover:animate-pulse
                "
              ></div>
              <a href={site.link} target="_blank" rel="noopener noreferrer">
                <div className="relative bg-transparent rounded-lg divide-x divide-gray-600">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="rounded-2xl"
                  />
                </div>
              </a>
            </div>
            <span className="text-2xl">{site.name}</span>
          </div>
        ))}
      </section>

      {/* <footer className="w-full bg-slate-600 text-center items-center p-5 border-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10">
        <a
          className="text-white"
          href="http://birobirobiro.dev"
          target="_blank"
        >
          birobirobiro.dev
        </a>
      </footer> */}
    </main>
  );
}
