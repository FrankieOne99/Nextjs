import Image from "next/image";

import style from "./hero.module.css";

import heroImg from "@/public/images/site/blog.webp";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div classname={style.image}>
        <Image src={heroImg} alt="This is our logo" width={500} height={400} />
      </div>
      <h1>Hi, welcome to my page</h1>
      <p>Lorem ipsum docet in lorem et gravina bendolorum in eclesiam magna</p>
    </section>
  );
};

export default Hero;
