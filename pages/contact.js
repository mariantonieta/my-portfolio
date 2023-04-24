import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdClear, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineCaretUp } from "react-icons/ai";
import Image from "next/image";
import anto2 from "../public/anto2.png";
import { useState } from "react";
const Contact = () => {
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
                  className="bg-gradient-to-r  dark:text-neutral-900 hover:scale-105 duration-200 from-purple-400 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r dark:text-neutral-900 hover:scale-105 duration-200  from-purple-500 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r dark:text-neutral-900 hover:scale-105 duration-200  from-purple-500 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8"
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
              <ul className="flex flex-col justify-center items-center absolute bottom-0 top-0 left-0 w-full h-screen bg-purple-200  dark:bg-zinc-800">
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
                    className="bg-gradient-to-r  from-purple-500 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/resume"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="m-4">
                  <Link
                    className="bg-gradient-to-r  from-purple-500 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </nav>

          <div class="min-h-screen">
            <div class="container">
              <div class="flex flex-col lg:flex-row rounded-sm mx-auto shadow-lg overflow-hidden">
                <div class="w-full lg:w-1/2 flex flex-col items-center mt-5 justify-center p-12 bg-no-repeat bg-cover bg-center">
                  <Image
                    src={anto2}
                    width={150}
                    className="m-7"
                    alt="Mariantonieta"
                  />
                  <div>
                    <h3 className="text-lg font-mono  text-purple-700  dark:text-purple-400">
                      If you are looking for a person with a passion for
                      programming and a strong technical background, do not
                      hesitate to contact me. I will be happy to work with you
                      and help your company achieve its goals.
                      <br />I am willing to learn and face new challenges that
                      will allow me to develop my full potential.
                    </h3>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 py-16 px-12">
                  <h1 class="mb-4 font-extrabold text-gray-0900 dark:text-white md:text-3xl lg:text-4xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
                      Contact with me
                    </span>
                  </h1>

                  <form
                    action="https://formsubmit.co/mariantonietachacondibacco@gmail.com"
                    method="POST"
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  >
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 dark:text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="Nombre"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          placeholder="Full Name"
                          className="bg-gray-200  dark:bg-neutral-700  dark:text-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="text"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500  dark:text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="Email"
                        >
                          Email
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 dark:bg-neutral-700 dark:text-white appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                          type="email"
                          placeholder="your@email.com"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500  dark:text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="Mensaje"
                        >
                          Message
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <textarea
                          placeholder="text"
                          className="bg-gray-200  dark:bg-neutral-700  dark:text-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          name=""
                          required
                        />
                      </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3"></div>
                      <label className="md:w-2/3 block  dark:text-white text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                          Accept, contact with me!
                        </span>
                      </label>
                    </div>
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/3"></div>
                      <div className="md:w-2/3">
                        <button
                          className="shadow dark:text-neutral-900 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Send
                        </button>
                        <input
                          type="hidden"
                          name="_next"
                          value="http://localhost:3000"
                        />
                        <input type="hidden" name="_captcha" value="false" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-neutral-200 text-center text-white dark:bg-zinc-800">
        <Link
          className="justify-center text-center  hover:bg-violet-300 text-purple-600 font-bold py-3 px-8 rounded inline-flex items-center"
          href="/"
        >
          <AiOutlineCaretUp />
        </Link>
        <div className="container pt-6">
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

export default Contact;
