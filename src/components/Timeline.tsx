import { IEducation } from "../interfaces";

const TimeLine = ({ date, title, text }: IEducation) => {
  return (
    <article className="timeLine">
      <div className="timeLine__date">{date}</div>
      <div className="timeLine__description">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default TimeLine;
