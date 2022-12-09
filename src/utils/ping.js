import axios from "axios";
const ping = (URL, setResult, freq) => {
  if (!freq) {
    axios.get(URL).then((response) => {
      setResult(response.data);
    });
    return;
  }
  setInterval(() => {
    axios.get(URL).then((response) => {
      setResult(response.data);
    });
  }, freq);
};

export default ping;