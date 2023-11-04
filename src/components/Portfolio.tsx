import { useState } from "react";
import { portfolioListData, tabsDada } from "../data/portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [tabClicked, setTabClicked] = useState("all");
  const [portfolioData, setPortfolioData] = useState(portfolioListData);

  const handleClick = (filterId: string) => {
    setTabClicked(filterId);

    setPortfolioData(
      portfolioListData.filter(
        (item) => item.filter === filterId || filterId === "all"
      )
    );
  };

  return (
    <div className="portfolio">
      <ul className="portfolio__tabs">
        {tabsDada.map((elem) => {
          return (
            <span className="portfolio__tabs__tabsItem" key={elem.id}>
              <li
                onClick={() => handleClick(elem.filterId)}
                className={tabClicked === elem.filterId ? "tabClicked" : ""}
              >
                {elem.text}
              </li>
            </span>
          );
        })}
      </ul>

      <div className="portfolio__grid">
        {portfolioData.map((elem) => {
          return (
            <div className="portfolio__grid__gridItem" key={elem.id}>
              <img src={elem.imgSrc} alt="porfolio item" />
              <div
                className="portfolio__grid__gridItem__popup"
                id="gridItemOverlay"
              >
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
                <Link to={elem.projectSrc} target="_blank">
                  View source
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
