//Hooks
import { useEffect, useState } from "react";
import { dataFetch } from "utils/dataFetch";
//Components
import Repository from "./components/Repository";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
//Constants
import * as Constants from "constants"
//Styles
import styles from "./styles/Repositories.module.sass";

export default function Repositories() {
  const [repositories, setRepositories] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = Constants.GITHUB_API;

  useEffect(() => {
    dataFetch(setError, setLoading, setRepositories, url);
  }, []);

  return (
    <>
      <FetchProcess error={error} loading={loading} />
      {!error && !loading && (
        <div className={styles.repositories}>
          {repositories &&
            repositories.map((repository) => (
              <>
                <Repository
                  name={repository.name}
                  url={repository.html_url}
                  description={repository.description}
                  lastUpdate={repository.pushed_at}
                />
              </>
            ))}
        </div>
      )}
    </>
  );
}
