import GoodsCard from './GoodsCard'
import BookService from "../../API/BookService";
import { useState, useEffect } from 'react';

const GoodsList = () => {
  const [goods, setGoods] = useState([]);

  const fetchBooks = async () => {
    const res = await BookService.getBooks('aERWlm0UJQufUiGd3ILBOqkWlqQR41YI');
    setGoods(res.data.results.books);
  };

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