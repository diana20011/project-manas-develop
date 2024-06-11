import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import { useEffect, useState } from "react";
import { ImageType } from "../../utils/interface";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../.fireBase/FireBase";
import { useWindowSize } from "../../utils/WindowSize";
function Partners() {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    pageTokenExample();
  }, []);
  const { width } = useWindowSize();
  console.log(width);

  async function pageTokenExample() {
    try {
      const ref = collection(db, "partners");
      const snapShot: any = await getDocs(ref);
      setData(snapShot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="partners ">
      <div className="container">
        <h1 className="text-center font-large text-zinc-500 text-4xl mb-[2.5pc]">
          ПАРТНЕРЫ
        </h1>
        {width >= 717 ? (
          <div className="partnets__content">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              slidesPerView={3}
              mousewheel={true}
              // scrollbar={{ draggable: true }}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
              {data?.map((el: ImageType, inx: number) => (
                <SwiperSlide key={inx}>
                  <div className="container__image__slider w-[344px] h-[191px]">
                    <img
                      className="swiper__img w-[full] h-[full] object-center"
                      src={el.image}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="partnets__content grid grid-cols-1 gap-4 max-w-[95%] m-auto">
            {data?.map((el: ImageType, inx: number) => (
              <div
                key={inx}
                className="container__image__slider h-[250px] mb-4"
              >
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-full object-center"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Partners;
