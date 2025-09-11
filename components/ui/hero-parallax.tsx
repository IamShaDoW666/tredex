"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from 'next/image'; // Added this import
import { Highlighter } from "../magicui/highlighter";
import Link from "next/link";
import { TextAnimate } from "../magicui/text-animate";


export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[210vh] md:h-[280vh] md:y-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse md:mb-20 space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const sloganRef = React.useRef<HTMLHeadingElement>(null);
  return (
    <div className="max-w-7xl relative mx-auto py-40 px-4 w-full left-0 top-0">
      <TextAnimate className="text-7xl md:text-9xl italic font-bold dark:text-primary mb-4" duration={0.4} animation="blurInUp" by="character" once>
        TREDEX
      </TextAnimate>
      <h2 ref={sloganRef} className="text-4xl md:text-6xl font-bold dark:text-white ml-4">
        Trends <br /> <Highlighter strokeWidth={2} animationDuration={700} action="underline" color="var(--primary)">Start Here.</Highlighter>
      </h2>
      <p className="max-w-xl text-xl md:text-2xl mt-8 dark:text-neutral-200">
        Your journey is unique, and your sneakers should be too find the pair that tells your story.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product rounded-lg border-2 overflow-hidden h-56 md:h-96 md:w-[24rem] w-[12rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image // Changed from img to Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className=" object-left-top absolute h-full w-full inset-0"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-background pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 font-bold text-foreground dark:text-black">
        {product.title}
      </h2>
    </motion.div>
  );
};
