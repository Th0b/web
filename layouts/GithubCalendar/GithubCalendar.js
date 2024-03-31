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

  return (
    <>
      <GitHubCalendar
        username="Th0be"
        labels={labels}
        year={new Date().getFullYear()}
        weekStart="1"
        colorScheme="light"
        errorMessage="Data se nepodařilo načíst"
        style={{ margin: "30px 0 10px 0" }}
      />
    </>
  );
}
