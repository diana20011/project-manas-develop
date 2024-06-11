import { useEffect, useState } from "react";
import { db } from "../../.fireBase/FireBase";
import { collection, getDocs } from "firebase/firestore";
import { ImageType } from "../../utils/interface";

function Sertificate() {
  const [data, setData] = useState<[] | any>([]);
  // qwerty
  useEffect(() => {
    pageTokenExample();
  }, []);

  async function pageTokenExample() {
    try {
      const ref = collection(db, "sertificate");
      const snapShot: any = await getDocs(ref);
      setData(snapShot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="sertificate mt-9 bg-[#F5F5F5] pt-[4pc] pb-[4pc]">
      <div className="container">
        <h1 className="text-center font-large text-zinc-500 text-4xl mb-[2.5pc]">
          СЕРТИФИКАТЫ
        </h1>
        <div className="seritficate__Content flex justify-center gap-4 items-center">
          {data.length > 3
            ? data.slice(0, 2)?.map((el: ImageType, inx: number) => (
                <div key={inx} className="seritficate__content__child">
                  <div className="w-[312px]">
                    <img src={el.image} alt="" />
                  </div>
                </div>
              ))
            : data?.map((el: ImageType, inx: number) => (
                <div key={inx} className="seritficate__content__child">
                  <div className="w-[312px]">
                    <img src={el.image} alt="" />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Sertificate;
