import "./App.css";
import Header from './components/Header.js';
import Pagination from './components/Pagination.js';
import Blogs from './components/Blogs.js';

export default function App() {
  
  // useEffect(()=>{
  //   async function Foo(){
  //     // let data="";
  //     const data = await axios.get(baseUrl);
  //     // const data = await fetch(baseUrl);
  //       console.log(data);
  //     } Foo();},[]
  // );
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
      {/* {Foo()} */}
    </div>
  );

}
