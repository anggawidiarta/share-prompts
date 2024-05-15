import Image from "next/image";
import Feed from "@/components/Feed";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="text-center text-black desc">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <button className={styles.page__button}>Learn More</button>
      {/* <Feed /> */}
    </section>
  );
}