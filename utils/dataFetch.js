export const dataFetch = async (setStatus, setResult, url, location) => {
  try {
    setStatus("loading");
    const response = await fetch(url);
    console.log(response);
    const result = await response.json();
    if (location !== undefined) {
      setResult(result.data); //v budoucnu se má používat location
      console.log("Fetched: ", result.data);
    } else {
      setResult(result);
      console.log("Fetched: ", result);
    }
    setStatus("success");
  } catch (error) {
    setStatus("error");
    console.log(error);
  }
};
