import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { BiSolidSchool } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { FaPeopleGroup, FaPhone } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";

function Sidebar({ close, setClose }: any) {
  return (
    <>
      <section className="sidebar">
        <div className={close ? "sidebar__content" : "sidebar__closes"}>
          <IoMdCloseCircle
            onClick={() => setClose(false)}
            size={25}
            className="sidebar__content__close"
          />
          <div className="sidebar__info">
            <div className="sidebar__info__links">
              <div className="sidebar__info__links__box">
                <BiSolidSchool />
                Мектеп
              </div>
              <div className="sidebar__info__links__dropdown">
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Биз жөнүндө
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Кызматкерлер
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Сыймыктанабыз
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Окуу-тарбиялык иштер
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Усулдук кызматы
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Маалыматтык — китепкана кызматы
                </Link>
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Социалдык-психологиялык кызмат
                </Link>
              </div>
            </div>
            <Link to="" className="sidebar__info__news">
              <div className="sidebar__info__news__box">
                <HiSpeakerphone />
                Жаңылыктар
              </div>
            </Link>
            <div className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <MdEmojiPeople />
                Окуучуларга
              </div>
              <div className="sidebar__info__students__dropdown">
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Мектептин окуучуларынын кеңеши
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Сабактардын жүгүртмѳсү
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Ийримдер жана секциялар
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Пайдалуу маалыматтар
                </Link>
              </div>
            </div>
            <div className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <MdPeopleAlt />
                Ата-энелерге
              </div>
              <div className="sidebar__info__students__dropdown">
                <Link to="" className="sidebar__info__links__dropdown-link">
                  Ата-энелер мектеби
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Ата-энелер үчүн маалымат
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Ички тартиби
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Мектепке кабыл алуу жөнүндө
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Мектептин формасы
                </Link>
                <Link to="" className="sidebar__info__students__dropdown-link">
                  Коомдук бирикме / фонддор
                </Link>
              </div>
            </div>
            <Link to="" className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <FaPeopleGroup />
                Камкорчулук кеңеш
              </div>
            </Link>
            <Link to="" className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <RiGalleryFill />
                Галлерея
              </div>
            </Link>
            <div className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <RiGalleryFill />
                Аккредитация
              </div>
              <Link to="" className="sidebar__info__students__dropdown-link">
                1. Программалык аккредитация
              </Link>
              <Link to="" className="sidebar__info__students__dropdown-link">
                2. Институционалдык аккредитация
              </Link>
            </div>
            <Link to="" className="sidebar__info__students">
              <div className="sidebar__info__students__box">
                <FaPhone />
                Байланышуу
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
