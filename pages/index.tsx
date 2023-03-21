import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Petar Stanev | Software Developer</title>
        <meta name="title" content="Petar Stanev | Software Developer"></meta>
        <meta
          name="description"
          content="Software development portfolio of Petar Stanev."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NEW */}

      <nav className="flex bg-[#edf2f7] justify-between items-center">
        <div className="flex flex-[0_0_4em]">
          <img className="p-[1em]" src="./img/icons/menu.svg" />
        </div>
        <b>Petar Stanev</b>
        <div className="flex flex-[0_0_4em]">
          <img className="p-[1em]" src="./img/icons/moon.svg" />
        </div>
      </nav>
      <main className="text-center h-[79vh] pt-[8em] pb-0 px-[1em]">
        {/* PETAR move h1 style and remove magrin */}
        <h1 className="text-[3.5em] m-0">Petar Stanev</h1>
        <h2 className='text-center text-[1.9em]'>Software Developer</h2>
        <p>
          A Software Developer with 6 years of professional experience currently
          in Thailand. Looking for my next opportunity.рџ‘‹
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_2em] p-[1em]"
          >
            <img src="./img/icons/logo-linkedin.svg" alt="LinkedIn logo" />
          </a>
          <a
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_2em] p-[1em]"
          >
            <img src="./img/icons/logo-github.svg" alt="GitHub logo" />
          </a>
          <a
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[0_0_2em] p-[1em]"
          >
            <img src="./img/icons/mail.svg" alt="Email logo" />
          </a>
        </div>
        <div>
          
        </div>
        <a
          className="inline-flex border text-[#00a3c4] mt-[1em] p-4 rounded-[3em] border-solid border-[#00a3c4]"
          href="/Resume Petar Stanev.pdf"
          target="_blank"
        >
          Resume
          <img className="max-w-[1em] pl-[0.5em] pr-[1em] py-0" src="./img/icons/open-outline.svg" alt="External link logo" />
        </a>
        <div className="flex pt-[6em]">
          <svg className="w-[30px] h-[58px] relative ml-[-15px] mt-5 left-2/4 bottom-0">
            <path className="stroke-[#00a3c4] fill-transparent stroke-[2px] animate-[arrow_2s_infinite]" d="M0 0 L15 16 L30 0" />
            <path className="stroke-[#00a3c4] fill-transparent stroke-[2px] animate-[arrow_2s_infinite]" d="M0 20 L15 36 L30 20" />
            <path className="stroke-[#00a3c4] fill-transparent stroke-[2px] animate-[arrow_2s_infinite] " d="M0 40 L15 56 L30 40" />
          </svg>
        </div>
      </main>
      <section className='flex flex-col px-[1em] py-0' className="flex flex-col px-[1em] py-0 items-center">
        <h2 className='text-center text-[1.9em]'>About Me</h2>
        <img className="w-[10em] border rounded-[10em] border-solid border-[#eceff4]" src="./img/profile-rectangle.jpg" alt="Petar Stanev head photo" />
        <p>
          Hi, I am Petar Stanev Software developer with more than
          <b>6 years</b> of professional experience. Focused on web development
          working as a full-stack developer using <b>Go</b>, <b>C#</b> for
          backend and <b>React</b>,<b>Angular</b> and <b>Typescript</b> for
          frontend. Also have experience in cloud technologies like <b>AWS</b>.
        </p>
      </section>
      <section className='flex flex-col px-[1em] py-0'>
        <h2 className='text-center text-[1.9em]'>Work Experience</h2>
        <article className="p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className='text-[1.4em] text-center mx-0 my-[0.5em]'>
            Software Developer at
            <a
              href="https://www.bet365.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bet 365
            </a>
          </h3>
          <p className='text-center mx-0 my-[0.3em]'>Full Stack Development - Sports website, Members website</p>
          <p className='text-center mx-0 my-[0.3em]'>Typescript, GO, Javascript, SASS, Jenkins</p>
          <p className='text-center mx-0 my-[0.3em]'>Manchester, United Kingdom</p>
          <p className='text-center mx-0 my-[0.3em]'>April 2019 - August 2022(Full time)</p>
        </article>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className='text-[1.4em] text-center mx-0 my-[0.5em]'>
            Software Developer at
            <a
              href="https://www.topcashback.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              TopCashback
            </a>
          </h3>
          <p className='text-center mx-0 my-[0.3em]'>
            Full Stack Development - TopCashback (UK,US,India) website, While
            label websites
          </p>
          <p className='text-center mx-0 my-[0.3em]'>ASP.NET, C#, VB.NET, Angular, jQuery, SQL, NoSQL</p>
          <p className='text-center mx-0 my-[0.3em]'>Manchester, United Kingdom</p>
          <p className='text-center mx-0 my-[0.3em]'>June 2016 - April 2019 (Full time)</p>
        </article>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className='text-[1.4em] text-center mx-0 my-[0.5em]'>
            Software Developer Intern at
            <a
              href="https://devrix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevriX
            </a>
          </h3>
          <p className='text-center mx-0 my-[0.3em]'>Wordpress plugins and themes development</p>
          <p className='text-center mx-0 my-[0.3em]'>PHP, jQuery, HTML/CSS, SQL</p>
          <p className='text-center mx-0 my-[0.3em]'>Sofia, Bulgaria</p>
          <p className='text-center mx-0 my-[0.3em]'>June 2013 - September 2013 (Internship)</p>
        </article>
      </section>
      <section className='flex flex-col px-[1em] py-0'>
        <h2 className='text-center text-[1.9em]'>Education</h2>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className='text-[1.4em] text-center mx-0 my-[0.5em]'>
            Software Engineering with Professional Experience at
            <a
              href="https://www.salford.ac.uk/courses/undergraduate/software-engineering-professional-experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Salford
            </a>
          </h3>
          <p className='text-center mx-0 my-[0.3em]'>Bachelor of Science</p>
          <p className='text-center mx-0 my-[0.3em]'>First Class Honours</p>
          <p className='text-center mx-0 my-[0.3em]'>September 2014 - June 2018</p>
          <p className='text-center mx-0 my-[0.3em]'>Manchester, United Kingdom</p>
        </article>
      </section>
      <section className='flex flex-col px-[1em] py-0'>
        <h2 className='text-center text-[1.9em]'>Projects</h2>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className='text-[1.4em] text-center mx-0 my-[0.5em]'>Hacker news easy</h3>
          <p className='text-center mx-0 my-[0.3em]'>
            Alternative way for browsing Hacker News using simple interface and
            faster interface.
          </p>
          <aside className="flex justify-evenly">
            <a className="flex text-[1.2em]" href="#" target="_blank" rel="noopener noreferrer">
              Live Demo
              <img className="h-[1.2em] pl-[0.3em]"
                src="./img/icons/open-outline.svg"
                alt="External link logo"
              />
            </a>
            <a className="flex text-[1.2em]"
              href="https://github.com/petarstanev/hacker-news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
              <img className="h-[1.2em] pl-[0.3em]" src="./img/icons/logo-github.svg" alt="GitHub logo" />
            </a>
          </aside>
        </article>
      </section>
      <section className='flex flex-col px-[1em] py-0'>
        <h2 className='text-center text-[1.9em]'>Get in touch</h2>
        <aside className="flex justify-evenly">
          <a className="flex text-[1.2em]" href="https://www.linkedin.com/in/petarstanev">
            LinkedIn
            <img className="h-[1.2em] pl-[0.3em]" src="./img/icons/logo-linkedin.svg" alt="LinkedIn logo" />
          </a>
          <a className="flex text-[1.2em]" href="mailto:me@petarstanev.com">
            me@petarstanev.com
            <img className="h-[1.2em] pl-[0.3em]" src="./img/icons/mail.svg" alt="Email logo" />
          </a>
        </aside>
      </section>
      <footer className="bg-[#edf2f7] flex p-[1em]">
        <p className="flex-[1]">В© 2023 Petar Stanev</p>
        <section className='flex flex-[1] justify-end items-center'>
          <a
            className="flex-[0_1_2em] pl-[1em]"
            href="https://www.linkedin.com/in/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/icons/logo-linkedin.svg" alt="LinkedIn logo" />
          </a>
          <a
          className="flex-[0_1_2em] pl-[1em]"
            href="https://github.com/petarstanev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/icons/logo-github.svg" alt="GitHub logo" />
          </a>
          <a
          className="flex-[0_1_2em] pl-[1em]"
            href="mailto:me@petarstanev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/icons/mail.svg" alt="Email logo" />
          </a>
          <a className="flex-[0_1_2em] pl-[1em]" href="#">
            <img
              src="./img/icons/chevron-up-circle-outline.svg"
              alt="Arrow up"
            />
          </a>
        </section>
      </footer>

      {/* OLD  */}
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
