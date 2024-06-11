import { Link } from "react-router-dom";
import "./HeaderNav.scss";
import flagkgz from "../../assets/flagkgz.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import flagrussia from "../../assets/flagrussia.svg";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../SIdebar/Sidebar";

function HeaderNav({ close, setClose, input, setInput }: any) {
  // const [input, setInput] = useState<boolean>(false);
  // useEffect(() => {
  //   const handleClick = () => {
  //     if (input === true) {
  //       setInput(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClick);

  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, [input]);

  console.log(input);

  return (
    <div>
      <nav className="header__nav">
        <div className="header__nav__burger">
          <GiHamburgerMenu
            onClick={() => setClose(true)}
            style={{ color: "white" }}
          />
          <h3>Меню</h3>
        </div>
        <Sidebar close={close} setClose={setClose} />
        <div className="header__nav__link">
          Мектеп
          <div className="header__nav__link__dropdown">
            <Link to="" className="header__nav__link__dropdown-link">
              Биз жөнүндө
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Кызматкерлер
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Сыймыктанабыз
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Окуу-тарбиялык иштер
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Усулдук кызматы
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Маалыматтык — китепкана кызматы
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Социалдык-психологиялык кызмат
            </Link>
          </div>
        </div>

        <Link to="" className="header__nav__link-news">
          Жаңылыктар
        </Link>

        <div className="header__nav__link__pupils">
          Окуучуларга
          <div className="header__nav__link__pupils__dropdown">
            <Link to="" className="header__nav__link__dropdown-link">
              Мектептин окуучуларынын кеңеши{" "}
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Сабактардын жүгүртмѳсү{" "}
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Маалыматтык — китепкана кызматы
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Ийримдер жана секциялар{" "}
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Пайдалуу маалыматтар{" "}
            </Link>
          </div>
        </div>
        <div className="header__nav__link__parents">
          Ата-энелерге
          <div className="header__nav__link__parents__dropdown">
            <Link to="" className="header__nav__link__dropdown-link">
              Ата-энелер мектеби
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Ата-энелер үчүн маалымат
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Ички тартиби
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Мектепке кабыл алуу жөнүндө
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Мектептин формасы
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              Коомдук бирикме / фонддо
            </Link>
          </div>
        </div>
        <Link to="" className="header__nav__link-advice">
          Камкорчулук кеңеш
        </Link>
        <Link to="" className="header__nav__link-gallery">
          Галерея
        </Link>
        <Link to="" className="header__nav__link__Accreditation">
          Аккредитация
          <div className="header__nav__link__Accreditation__dropdown">
            <Link to="" className="header__nav__link__dropdown-link">
              1. Программалык аккредитация
            </Link>
            <Link to="" className="header__nav__link__dropdown-link">
              2. Институционалдык аккредитация
            </Link>
          </div>
        </Link>
        <Link to="" className="header__nav__link__more">
          <div style={{ display: "flex", alignItems: "center" }}>
            Еще
            <IoMdArrowDropdown />
          </div>
          <div className="header__nav__link__more__dropdown">
            <Link to="" className="header__nav__link__dropdown-link">
              Байланышуу
            </Link>
            <Link to="" className="header__nav__link__dropdown-gallery">
              Галерея
            </Link>
            <Link to="" className="header__nav__link__dropdown-advice">
              Камкорчулук кеңеш
            </Link>
          </div>
        </Link>

        {input ? (
          <input
            className="header__nav__input"
            type="text"
            placeholder="Поиск"
          />
        ) : (
          <>
            <div className="header__nav__flags">
              <img src={flagkgz} style={{ width: "25px" }} alt="" />
              <img src={flagrussia} style={{ width: "23px" }} alt="" />
              <IoIosSearch
                onClick={() => setInput(true)}
                className="header__nav__search"
                size={25}
                style={{ color: "white", maxWidth: "100%" }}
              />
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default HeaderNav;
