import News from "../../components/news/News.tsx";
import Swiperhero from "../../components/SwiperHero/Swiperhero";
import Numbers from "../../components/numbers/numbers.tsx";
import { useState } from "react";
import Header from "../../components/header/header.tsx";
import HeaderNav from "../../components/HeaderNav/HeaderNav.tsx";
import Sertificate from "../../components/sertificate/Sertificate.tsx";
import Partners from "../../components/partners/Partners.tsx";

function Home() {
  const [close, setClose] = useState<boolean>(false);
  const [input, setInput] = useState<boolean>(false);
  return (
    <>
      <Header setInput={setInput} />
      <HeaderNav
        close={close}
        setClose={setClose}
        input={input}
        setInput={setInput}
      />
      <Swiperhero />
      <News />
      <Numbers />
      <Partners />
      <Sertificate />
    </>
  );
}

export default Home;
