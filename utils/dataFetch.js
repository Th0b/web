export async function dataFetch(
  setError,
  setLoading,
  setResult,
  url,
  location
) {
  try {
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
    setError(true);
    console.log(error);
  } finally {
    setLoading(false);
  }
}
