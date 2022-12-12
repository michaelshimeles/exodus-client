import axios from "axios";
const pingPost = (URL, body, setResult, freq) => {
  if (!freq) {
    axios
      .post(URL, body)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  // clearInterval()

  const intervalId = setInterval(() => {
    axios
      .post(URL, body)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, freq);

  return intervalId
};

export default pingPost;
