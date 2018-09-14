
export default {
    // findState: "https://api.nps.gov/api/v1/parks?limit=20&start=21&fields=&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH",
    // campgrounds: "https://api.nps.gov/api/v1/campgrounds?stateCode=AZ&limit=35&start=1&fields=addresses&contacts&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH" ,
    // parks:"https://api.nps.gov/api/v1/parks?stateCode=AZ&limit=35&start=1&fields=addresses&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH"
}


// Axios.get(url).then(stateCodeResponse1 => {
//     axios.get(`url?parkCode=${stateCodeResponse1.data[0].parkCode`}).then(response2 => {
//         axios.get(`url/campsites/?={response2.data.campsites}`).then(response).then(response2)
//     })
// })