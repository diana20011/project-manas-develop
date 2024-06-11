import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./swiperhero.scss";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../.fireBase/FireBase";
import { NewsType } from "../../utils/interface";
function Swiperhero() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function Getnumbers() {
      try {
        const ref = collection(db, "users");
        const snapShot: any = await getDocs(ref);
        setData(
          snapShot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.log(error);
      }
    }
    Getnumbers();
    return () => {};
  }, []);

  console.log(data);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {data.map((el: NewsType, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="container">
              <h1 className="swiper__title">{el.title}</h1>
              <h2 className="swiper__pretitle">{el.pretitle}</h2>
              <img className="swiper__img" src={el.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swiperhero;
