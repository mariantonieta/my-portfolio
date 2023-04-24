import Head from "next/head";
import { FaMoon } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub, AiOutlineCaretUp } from "react-icons/ai";
import { MdOutlineMenu, MdClear } from "react-icons/md";
import Image from "next/image";
import anto from "../public/anto.png";
import { useState } from "react";
import { skills } from "./api/skills";
import { dataImage } from "./api/data";
import Link from "next/link";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Head>
        <title>Mariantonieta Portfolio</title>
        <meta name="description" content="portfolio mariantonieta" />
      </Head>
      <div className={darkMode ? "dark" : " "}>
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
                    className="bg-gradient-to-r hover:scale-105 duration-200 from-purple-400 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8 dark:text-black"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-gradient-to-r hover:scale-105 duration-200  from-purple-500 text- to-purple-600 text-white px-4 py-2 border-none rounded-md ml-8  dark:text-black"
                    href="/resume"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-gradient-to-r hover:scale-105 duration-200  from-purple-600 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8  dark:text-black "
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-neutral-900 dark:text-slate-50 md:hidden "
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

            <div className="md:flex flex-auto  p-8 md:p-0 ">
              <div className="p-2 py-5 mx-12">
                <h1 className="text-xl  text-purple-600 font-mono dark:text-purple-400 md:text-4xl">
                  {`Hi, I'm Mariantonieta Chacon.`}
                </h1>
                <h3 className="font-mono text-xl text-purple-500 py-5 md:text-3xl dark:text-purple-400">
                  {`I'm a FullStack Web Developer.`}
                </h3>
                <p className="text py-3 leading-8 text-purple-900 dark:text-purple-300 md:text-xl max-w-lg mx-auto font-mono">
                  I love Javascript
                </p>

                <div className="text-5xl mt-10 p-8 self-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div class=" flex space-x-4">
                    <Link
                      className="justify-center text-center  hover:bg-violet-400 text-purple-600 font-bold py-2 px-4 rounded inline-flex items-center"
                      href="https://github.com/mariantonieta"
                    >
                      <AiFillGithub />
                    </Link>
                    <a
                      className="justify-center text-center hover:bg-violet-400 text-purple-600 font-bold py-2 px-4 rounded inline-flex items-center"
                      href="https://www.linkedin.com/in/mariantonietac23/"
                    >
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative md:w-90 sm:px-2">
                <Image src={anto} alt="Mariantonieta" />
              </div>
            </div>
          </section>
          <section>
            <div className="w-full">
              <h3 className="font-mono md:max-lg:flex text-3xl py-1 text-purple-900 dark:text-purple-400">
                About me
              </h3>
              <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <p className=" py-2 font-mono  text-violet-800 dark:text-violet-300">
                  {` Hello everybody! I'm passionate about web programming. I
                  started studying on my own and I realized that it is my
                  favorite hobby, and I hope it will become my dream job.`}
                  <br />
                  My favorite language is JavaScript, as it allows me to create
                  efficient and scalable solutions, than to this, I can
                  implement unique and creative ideas to solve problems on the
                  web.
                  <br />I am convinced that web programming is the future, and I
                  am excited to be part of exciting projects in the web
                  programming world.
                </p>
              </div>
            </div>
            <div className="flex-auto flex space-x-4 px-20">
              <Link download="Mariantonieta.pdf" href="Mariantonieta.pdf">
                <button className="justify-center text-center bg-purple-600 hover:bg-violet-500 text-slate-200 font-bold py-2 px-4 rounded inline-flex items-center dark:text-black">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>CV</span>
                </button>
              </Link>
              <br></br>

              <Link
                className="justify-center text-center dark:text-black bg-purple-600 hover:bg-violet-500 text-slate-200 font-bold py-2 px-4 rounded inline-flex items-center"
                href="/contact"
              >
                Contact with me
              </Link>
            </div>
            <h3 className="text-3xl font-mono text-center  pt-8 pb-2  text-purple-900 dark:text-purple-500">
              Skills
            </h3>
            <div className="container mx-auto">
              <div className="grid grid-cols-5 md:grid-flow-row">
                {skills.skillsImg.map((img, index) => {
                  return (
                    <div
                      className="flex mt-10 items-center justify-center"
                      key={index}
                    >
                      <Image
                        src={`/${img.img}`}
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl font-mono text-center  pt-8 pb-2   text-purple-900 dark:text-purple-500 ">
                Portfolio
              </h3>
              <p className="text-md py-2 px-20 font-mono leading-8 text-violet-800 dark:text-violet-300">
                In all of these projects, I was able to apply my knowledge in
                web application development to offer specific solutions for each
                client.
              </p>
            </div>
            <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-5 px-10 sm:px-0">
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
    </div>
  );
}
