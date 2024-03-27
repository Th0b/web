export const dataFetch = async (setStatus, setResult, url, location) => {
  try {
    setStatus("loading");
    const response = await fetch(url);
    const result = await response.json();
    setResult(result);
    console.log("Fetched: ", result);
    setStatus("success");
  } catch (error) {
    setStatus("error");
    console.log(error);
  }
};
