import axios from "axios";
const ping = (URL, setResult, freq) => {
  if (!freq) {
    axios
      .get(URL)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  setInterval(() => {
    axios
      .get(URL)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, freq);
};

export default ping;
