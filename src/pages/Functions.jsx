import { ImBooks } from "react-icons/im";
import MainPage from "../components/library/MainPage";
import ExMainPage from "../components/exercise/ExMainPage";
import { FaSearch, FaTasks } from "react-icons/fa";
import DiMainPage from "../components/dictionary/DiMainPage";
import MainDiscuss from "../components/discussion/MainDiscuss";
import { IoIosPeople } from "react-icons/io";
import MainSharing from "../components/sharing/MainSharing";
import { BsFillStarFill } from "react-icons/bs";
import MainVideo from "../components/video/MainVideo";
import { RxVideo } from "react-icons/rx";

export const Functions=[
    {id:1,link:'/home/library',element:<MainPage/>,icons:<ImBooks/>,name:'图书馆'},
    {id:2,link:'/home/exercise',element:<ExMainPage/>,icons:<FaTasks/>,name:'考试'},
    {id:3,link:'/home/dictionary',element:<DiMainPage/>,icons:<FaSearch/>,name:'词典'},
    {id:4,link:'/home/sharing',element:<MainSharing/>,icons:<BsFillStarFill/>,name:'分享知识'},
    {id:5,link:'/home/discussion',element:<MainDiscuss/>,icons:<IoIosPeople/>,name:'聊天吧'},
    {id:6,link:'/home/video',element:<MainVideo/>,icons:<RxVideo/>,name:'电影'},
]