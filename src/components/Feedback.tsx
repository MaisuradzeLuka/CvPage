import Info from "./Info";

interface IFeedback {
  feedback: string;
  reporter: { photoUrl: string; name: string; citeUrl: string };
}

const Feedback = ({
  feedback,
  reporter: { photoUrl, name, citeUrl },
}: IFeedback) => {
  return (
    <article className="feedback">
      <div className="feedback__title">
        <img src={photoUrl} alt={name} className="feedback__title__profImg" />{" "}
        <p className="feedback__title__paragraph">
          {name}
          <cite>
            <a href={citeUrl}>somesite.com</a>
          </cite>
        </p>
      </div>
      <Info>{feedback}</Info>
    </article>
  );
};

export default Feedback;
