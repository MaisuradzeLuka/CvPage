import Box from "./Box";

interface IExperience {
  date: string;
  info: {
    company: string;
    description: string;
    job: string;
  };
}

const Experience = ({
  date,
  info: { company, description, job },
}: IExperience) => {
  return (
    <article className="exp">
      <div className="exp__title">
        <h3 className="exp__title__company">{company}</h3>
        <p className="exp__title__date">{date}</p>
      </div>
      <Box title={job}>{description}</Box>
    </article>
  );
};

export default Experience;
