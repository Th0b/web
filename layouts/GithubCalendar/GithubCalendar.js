//Components
import GitHubCalendar from "react-github-calendar";

export default function GithubCalendar() {
  const labels = {
    months: [
      "Led",
      "Úno",
      "Bře",
      "Dub",
      "Kvě",
      "Čvn",
      "Čvc",
      "Srp",
      "Zář",
      "Říj",
      "Lis",
      "Pro",
    ],
    weekdays: [
      "Ne", // Sunday first!
      "Po",
      "Út",
      "St",
      "Čt",
      "Pá",
      "So",
    ],
    totalCount: "{{count}} příspěvků v roce {{year}}",
    legend: {
      less: "Méně",
      more: "Více",
    },
  };
  const dateFormat = "D.M.Y";
  const weekStart = 1;
  return (
    <>
      <GitHubCalendar
        username="Th0be"
        labels={labels}
        dateFormat={dateFormat}
        weekStart={weekStart}
        style={{margin: "30px 0 10px 0"}}
      />
    </>
  );
}
