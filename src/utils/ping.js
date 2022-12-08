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

/*
This is how you'd use this ping

 useEffect(() => {
    // regular axios request
    ping("http://localhost:8080/collections/bruh-pills", setResponse);

    ping("http://localhost:8080/collections/bruh-pills", setResponse, 2000);
  }, []);

return <h1>{JSON.stringify(response.floorPrice?.price)}</h1>;

*/
