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
    if (location === undefined) setResult(result);
    else setResult(result.data); //v budoucnu se má používat location
  } catch (err) {
    setError(true);
  } finally {
    setLoading(false);
  }
}
