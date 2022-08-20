import axios from "axios"

export const fetchTopUsers = () => {
axios.get('http://127.0.0.1:5000/top5users').then(res => {
    data = res;
})
.catch(function (err) {
    console.error(err);
}
)}