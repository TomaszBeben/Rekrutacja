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

// export const fetchData = async (url, setState) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     setState(data)

//   } catch(err) {
//     console.error(err)
//   }
// }
