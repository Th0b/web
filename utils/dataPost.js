export async function dataPost(setStatus, url, data) {
  try {
    setStatus("loading");
    const header = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(data);
    const response = await fetch(url, {
      method: "POST",
      headers: header,
      body: body,
    });
    const result = await response.json();
    if (result.status === 200) setStatus("success");
    else new Error("Another type of error");
  } catch (error) {
    setStatus("error");
    console.log(error);
  }
}
