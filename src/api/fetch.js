import axios from "axios";

 export const fetchData = async (url, setState) => {
    axios({
      method: 'GET',
      url: url,
    }).then(res => {
      setState(res.data)
    }).catch(e => {
      console.error(e.message);
    })
  }