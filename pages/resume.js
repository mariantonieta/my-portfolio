import React from "react";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineCaretUp } from "react-icons/ai";
import { MdClear, MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import { dataImage } from "./api/data";

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-zinc-100 px-10 dark:bg-neutral-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-2xl font-mono font-extrabold">
              MariantonietaChacon
            </h1>
            <FaMoon
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl hover:scale-105 duration-200"
            />
            <ul className="hidden md:flex">
              <li></li>
              <li>
                <Link
                  className="bg-gradient-to-r hover:scale-105 duration-200 from-purple-400 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r hover:scale-105 duration-200  from-purple-500 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r hover:scale-105 duration-200  from-purple-500 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-neutral-900 dark:text-slate-50  md:hidden "
            >
              {nav ? <MdClear size={30} /> : <MdOutlineMenu size={30} />}
            </div>

            {nav && (
              <ul className="flex flex-col justify-center items-center absolute bottom-0 top-0 left-0 w-full h-screen bg-purple-200 dark:bg-zinc-800">
                <li className="m-4">
                  <Link
                    className="bg-gradient-to-r  from-purple-400 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="m-4">
                  <Link
                    className="bg-gradient-to-r  from-purple-500 text- to-purple-600 text-white dark:text-neutral-900 px-4 py-2 border-none rounded-md ml-8"
                    href="/resume"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="m-4">
                  <Link
                    className="bg-gradient-to-r  from-purple-500 text- to-purple-500 text-white px-4 py-2 border-none  rounded-md ml-8"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </nav>
          <h3 className="text-md py-2 font-mono leading-8 text-violet-800 dark:text-violet-300">
            In these projects I have worked with Javascript using their
            frameworks (ReactJs and Angular). On the server side with NodeJS
            using Express. And Mysql and NoSql for the database.
          </h3>

          <Link
            className="justify-center dark:text-neutral-900 text-center bg-purple-600 hover:bg-violet-500 text-slate-200 font-bold py-2 px-4 rounded inline-flex items-center"
            href="/contact"
          >
            Contact with me
          </Link>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 p-10 gap-8 px-10 sm:px-0">
            {dataImage.imgPortfolio.map((img, index) => {
              return (
                <div className="shadow-md rounded-lg" key={index}>
                  <Link href={img.url}>
                    <Image
                      className="rounded-md mt-6 duration-200 hover:scale-105"
                      src={`/${img.image}`}
                      width={img.width}
                      height={img.height}
                      alt={img.alt}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="bg-neutral-200 text-center gap-5 px-10  dark:bg-zinc-800">
        <Link
          className="justify-center text-center  hover:bg-violet-300 text-purple-600 font-bold py-3 px-8 rounded inline-flex items-center"
          href="/"
        >
          <AiOutlineCaretUp />
        </Link>
        <div className="container pt-6 ">
          <div className="flex justify-center">
            <Link
              className="justify-center text-center  hover:bg-violet-300 text-purple-600 font-bold py-3 px-8 rounded inline-flex items-center"
              href="https://github.com/mariantonieta"
            >
              <AiFillGithub />
            </Link>
            <Link
              className="justify-center text-center hover:bg-violet-300 text-purple-600 font-bold py-3 px-8 rounded inline-flex items-center"
              href="https://www.linkedin.com/in/mariantonietac23/"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
        <div className="bg-neutral-200 p-4 text-center font-mono text-neutral-700 dark:bg-zinc-800 dark:text-neutral-200">
          © 2023 Copyright: Mariantonieta Chacon
        </div>
      </footer>
    </div>
  );
};

export default Resume;
