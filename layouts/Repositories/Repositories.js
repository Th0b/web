//Hooks
import { useEffect, useState } from "react";
import { dataFetch } from "utils/dataFetch";
//Components
import Repository from "./components/Repository";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
//Constants
import Constants from "constants"
//Styles
import styles from "./styles/Repositories.module.sass";

export default function Repositories() {
  const [repositories, setRepositories] = useState();
  const [status, setStatus] = useState("");
  const url = Constants.GITHUB_API;

  useEffect(() => {
    dataFetch(setStatus, setRepositories, url);
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && (
        <div className={styles.repositories}>
          {repositories &&
            repositories.map((repository) => (
              <Repository
                key={repository.id}
                name={repository.name}
                url={repository.html_url}
                description={repository.description}
                lastUpdate={repository.pushed_at}
              />
            ))}
        </div>
      )}
    </>
  );
}
