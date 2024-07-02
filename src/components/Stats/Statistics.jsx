import AnimatedNumber from "../logic/AnimatedNumber";
import { Statistic } from "semantic-ui-react";
import teamsData from "../../assets/teams.json";
import RoundedButton from "../Button/RoundedButton";
import SocialMediaLinks from "../SocialMediaLinks";

export default function Statistics() {
  const dollarFormatter = new Intl.NumberFormat("US", {
    style: "currency",
    currency: "USD",
  });
  const teams = teamsData.teams;
  const advisors = teamsData.advisors;

  const statistics = [
    {
      key: "pizza",
      label: "worth of pizza served",
      value: 22500,
      steps: 50,
      formatter: (x) => dollarFormatter.format(x),
    },
    {
      key: "sponsors",
      label: "Sponsors",
      value: 12,
      steps: 1,
      formatter: (x) => x,
    },
    {
      key: "teams",
      label: "Committees",
      value: Object.keys(teams).length,
      steps: 1,
      formatter: (x) => x,
    },
    {
      key: "officers",
      label: "Officers",
      value: Object.values(teams).reduce((total, team) => {
        return total + team.length;
      }, 0),
      steps: 1,
      formatter: (x) => x,
    },
    {
      key: "advisors",
      label: "Advisors",
      value: Object.keys(advisors).length,
      steps: 1,
      formatter: (x) => x,
    },
  ];
  return (
    <div className="statistics">
      {statistics.map(({ key, label, value, steps, formatter }) => (
        <Statistic key={key} className="stat-container">
          <Statistic.Value className="stat-value">
            <AnimatedNumber
              number={value}
              steps={steps}
              formatter={formatter}
            />
          </Statistic.Value>
          <Statistic.Label className="stat-label">{label}</Statistic.Label>
        </Statistic>
      ))}
      <RoundedButton name="Learn More" />
    </div>
  );
}
