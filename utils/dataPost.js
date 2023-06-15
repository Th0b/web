export const dataPost = async (setStatus, url, data) => {
  try {
    setStatus("loading");
    const body = JSON.stringify(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body,
    });
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    setStatus("success");
  } catch (error) {
    console.log(error);
    setStatus("error");
  }
};
