//Hooks
import { useEffect, useState } from "react";
import { dataFetch } from "utils/dataFetch";
//Components
import Repository from "./components/Repository";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
//Styles
import styles from "./styles/Repositories.module.sass";

export default function Repositories() {
  const [repositories, setRepositories] = useState();
  const [status, setStatus] = useState("");
  const url = "https://api.github.com/users/th0be/repos";
  // const url = "/api/proxy?apiTarget=github";

  useEffect(() => {
    dataFetch(setStatus, setRepositories, url, "data");
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && (
        <div className={styles.repositories}>
          {repositories &&
            repositories.map((repository) => {
              if (!repository.fork) {
                return (
                  <Repository
                    key={repository.id}
                    name={repository.name}
                    url={repository.html_url}
                    description={repository.description}
                    lastUpdate={repository.pushed_at}
                  />
                );
              }
            })}
        </div>
      )}
    </>
  );
}
