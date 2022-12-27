import GoodsCard from './GoodsCard'
import BookService from "../../API/BookService";
import { useState, useEffect } from 'react';
import { Fetching } from "../../hooks/fetching";

const GoodsList = () => {
  const [goods, setGoods] = useState([]);

  const [fetchBooks, loaded, error] = Fetching(async () => {
    const res = await BookService.getBooks('aERWlm0UJQufUiGd3ILBOqkWlqQR41YI');
    setGoods(res.data.results.books);
  }, "Error occured");

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='list'>
      {goods.map((el, index) => <GoodsCard key={index} name={el.title} cost={el.price} img={el.book_image}/>)}
    </div>
  )
}

export default GoodsList;