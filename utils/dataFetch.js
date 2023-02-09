export async function dataFetch(setStatus, setResult, url, location) {
  try {
    setStatus("loading");
    const response = await fetch(url);
    const result = await response.json();
    if (location !== undefined) {
      setResult(result.data); //v budoucnu se má používat location
      console.log("Fetched: ", result.data);
    } else {
      setResult(result);
      console.log("Fetched: ", result);
    }
  } catch (error) {
    setStatus("error");
    console.log(error);
  } finally {
    setStatus("success");
  }
}
