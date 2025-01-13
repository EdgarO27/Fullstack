import Image from "next/image";
import {Button} from "@/components/ui/button"
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants"
// es6 const function
const Home = () => <>
{/* we can not return 2 children without wrapping them first*/}
  <BookOverview
      {...sampleBooks[0]}
  />

  <BookList
      title = "Latest Books"
      books = {sampleBooks}
      containerClassName = "mt-28"
      
      />
</>

export default Home;