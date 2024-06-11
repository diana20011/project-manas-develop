import { BiSolidSchool } from "react-icons/bi";
import "./numbers.scss";
import { MdEmojiPeople } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../.fireBase/FireBase";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function Numbers() {
  const [data, setData] = useState<any>([]);
  const elementRef = useRef(null);
  useEffect(() => {
    async function Getnumbers() {
      try {
        const ref = collection(db, "we numbers");
        const snapShot: any = await getDocs(ref);
        setData(
          snapShot.docs
            .map((doc: any) => ({ id: doc.id, ...doc.data() }))
            .at(-1)
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
      <div className="numbers" ref={elementRef}>
        <div className="container">
          <div className="number__content">
            <div className="number__content__title">БИЗ САНДАБЫЗ</div>
            <div className="number__content__box">
              <ul className="number__content__box__infos">
                <li className="number__content__box__infos__info">
                  <BiSolidSchool
                    size={45}
                    className="number__content__box__infos__info-icon"
                  />
                  <div className="number__content__box__infos__info-link">
                    <h3 className="number__content__box__infos__info-link__title">
                      {<CountUp start={0} end={data.year} duration={2.5} />}
                    </h3>
                    <span className="number__content__box__infos__info-link__text">
                      жыл
                    </span>
                  </div>
                </li>
                <li className="number__content__box__infos__info">
                  <MdEmojiPeople
                    size={45}
                    className="number__content__box__infos__info-icon"
                  />
                  <div className="number__content__box__infos__info-link">
                    <h3 className="number__content__box__infos__info-link__title">
                      {<CountUp start={0} end={data.people} duration={2.5} />}
                    </h3>
                    <span className="number__content__box__infos__info-link__text">
                      Окуучулардын саны
                    </span>
                  </div>
                </li>
                <li className="number__content__box__infos__info">
                  <FaGraduationCap
                    size={45}
                    className="number__content__box__infos__info-icon"
                  />
                  <div className="number__content__box__infos__info-link">
                    <h3 className="number__content__box__infos__info-link__title">
                      {
                        <CountUp
                          start={0}
                          end={data.peopleFinishSchool}
                          duration={2.5}
                        />
                      }
                    </h3>
                    <span className="number__content__box__infos__info-link__text">
                      БҮТҮРҮҮЧҮЛӨР (ЖЫЛЫНА)
                    </span>
                  </div>
                </li>
                <li className="number__content__box__infos__info">
                  <IoMdBookmarks
                    size={45}
                    className="number__content__box__infos__info-icon"
                  />
                  <div className="number__content__box__infos__info-link">
                    <h3 className="number__content__box__infos__info-link__title">
                      {<CountUp start={0} end={data.libriary} duration={2.5} />}
                    </h3>
                    <span className="number__content__box__infos__info-link__text">
                      БҮТҮРҮҮЧҮЛӨР (ЖЫЛЫНА)
                    </span>
                  </div>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Numbers;
