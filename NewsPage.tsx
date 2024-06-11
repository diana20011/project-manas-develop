import { useEffect, useState } from "react";
import { db } from "../.fireBase/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import parse from "node-html-parser";
import { FaEye, FaMessage } from "react-icons/fa6";
import Header from "../components/header/header";
import HeaderNav from "../components/HeaderNav/HeaderNav";
export function NewsPage() {
  const [data, setData] = useState<any>({});
  const { id } = useParams();
  const docRef = doc(db, "users", `${id}`);
  async function getOneNews() {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (e) {
      console.log("Error getting document:", e);
    }
  }
  useEffect(() => {
    getOneNews();
    return () => {};
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      <HeaderNav />
      <div className="newspage">
        <div className="container">
          <div className="newspage__content">
            <div className="newspage__content__title">
              <h1>{data.title}</h1>
            </div>
            <div className="newspage__content__image mt-9">
              <div className="newspage__content__image__child">
                <img src={data.image} alt="" />
              </div>
              <div className="newspage__content__image__next__news">
                <div className="newspage__content__image__next__news__top">
                  <h3>другие новости</h3>
                </div>
                <div className="newspage__content__image__next__news__bottom">
                  <p>
                    "Ата энелер мектебинин" негизинде "Үй-бүлөдөгү окууну
                    уюштуруу " деген темада сабак өтүлдү
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] mt-[5px]">01.05.2024</p>
                    <div className="flex justify-between gap-8">
                      <div className="flex justify-between gap-2 items-center">
                        <FaEye fontSize={14} color="#c55a11" />
                        <p>10</p>
                      </div>
                      <div className="flex justify-between gap-2 items-center">
                        <FaMessage fontSize={14} color="#c55a11" />
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newspage__content__description mt-[3pc]">
              {data.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: parse(data.description).toString(),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
