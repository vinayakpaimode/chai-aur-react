import React,{useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const followers = useLoaderData();

//     const [followers, setFollowers] = React.useState([]);
//     useEffect(() => {
//         fetch('https://api.github.com/users/vinayakpaimode')
//             .then(response => response.json())
//             .then(data => {
//                 // Handle the fetched data
//                 console.log(data);
//                 setFollowers(data);
//             });
//     }, []);

  return (
      <div className="  text-xl m-4 font-bold bg-gray-200 p-4"> 
      <img src={followers?.avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
        <br />
        Github Followers : {followers?.followers}
        <br />
        Github Public Repos : {followers?.public_repos}
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vinayakpaimode');
    const data = await response.json();
    return data;
};