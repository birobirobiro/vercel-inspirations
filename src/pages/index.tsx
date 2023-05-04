import { Inter } from "next/font/google";

import sites from "../data/sites";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen flex flex-col items-center p-16 ${inter.className}`}
    >
      <header className="flex flex-col text-center gap-3 mb-16">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Vercel Inspirations
        </h1>

        <h3 className="text-gray-500">
          A collection of websites inspired by{" "}
          <a className="text-gray-400" href="https://vercel.com">
            Vercel
          </a>
        </h3>

        <h4 className="text-gray-500">
          - create by{" "}
          <a
            className="text-gray-400"
            href="https://birobirobiro.dev"
            target="_blank"
          >
            birobirobiro
          </a>
        </h4>
      </header>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-20 pb-10">
        {sites.map((site) => (
          <div className="flex flex-col gap-6 items-center" key={site.name}>
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
                className="absolute -inset-0.5 bg-gradient-to-r from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)] rounded-lg blur-2xl opacity-50 group-hover:opacity-75 group-hover:blur-xl 
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
            <span className="text-2xl text-gray-400">{site.name}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
