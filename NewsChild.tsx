import { useNavigate } from "react-router-dom";
import { NewsType } from "../../utils/interface";
function NewsChild({ el }: NewsType) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/news/${el.id}`)}
      className="news__content__child max-w-[500px] h-[100%]"
      key={el.id}
    >
      <div className="news__content__child__image">
        <img src={el.image} alt="" />
      </div>
      <div className="news__content__child__text">
        <p>{el.title}</p>
      </div>
    </div>
  );
}

export default NewsChild;
