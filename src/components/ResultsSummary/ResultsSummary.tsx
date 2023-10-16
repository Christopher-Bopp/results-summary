import "../../theme.css";
import "./ResultsSummary.css";
import reactionIcon from "../../assets/images/icon-reaction.svg";
import memoryIcon from "../../assets/images/icon-memory.svg";
import verbalIcon from "../../assets/images/icon-verbal.svg";
import visualIcon from "../../assets/images/icon-visual.svg";

const ResultsSummary = () => {
  return (
    <section className="results__summary">
      <h2 className="results__summaryTitle">Summary</h2>
      <ul
        className="results__valuesContainer"
        aria-label="Test sections and scores"
      >
        <li className="results__value result__value--red">
          <span className="results__sectionScoreLabel">
            <img
              src={reactionIcon}
              alt="reaction icon"
              className="results__sectionIcon"
            />
            <h3>Reaction</h3>
          </span>
          <p className="result__scoreBlock">
            <span>80</span>
            <span className="result__scoreOutOf"> / 100</span>
          </p>
        </li>
        <li className="results__value result__value--yellow">
          <span className="results__sectionScoreLabel">
            <img
              src={memoryIcon}
              alt="memory icon"
              className="results__sectionIcon"
            />
            <h3>Memory</h3>
          </span>
          <p className="result__scoreBlock">
            <span>92</span>
            <span className="result__scoreOutOf"> / 100</span>
          </p>
        </li>
        <li className="results__value result__value--green">
          <span className="results__sectionScoreLabel">
            <img
              src={verbalIcon}
              alt="verbal icon"
              className="results__sectionIcon"
            />
            <h3>Verbal</h3>
          </span>
          <p className="result__scoreBlock">
            <span>61</span>
            <span className="result__scoreOutOf"> / 100</span>
          </p>
        </li>
        <li className="results__value result__value--blue">
          <span className="results__sectionScoreLabel">
            <img
              src={visualIcon}
              alt="visual icon"
              className="results__sectionIcon"
            />
            <h3>Visual</h3>
          </span>
          <p className="result__scoreBlock">
            <span>73</span>
            <span className="result__scoreOutOf"> / 100</span>
          </p>
        </li>
      </ul>
      <button className="results__continue">Continue</button>
    </section>
  );
};

export default ResultsSummary;
