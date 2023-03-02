import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';
import './form.scss';


const Form = () => {
  const { getAddBook, fullBooks} = useContext(GlobalContext);
  const navigate = useNavigate();

  const dataHandler = (e) => {
    e.preventDefault();
    const object = new FormData(e.target);
    const data = Object.fromEntries(object);

    const index = fullBooks.findIndex(category =>
      category.list_name === data.list_name,
    )

    fullBooks[index].books.push(data);

    getAddBook(data);
    
    window.scrollTo(0, 0);
    navigate('/home')
  };

  return (
    <div className='app'>
      <div className='form-container'>
        <div><h2>Leave your opinion!</h2></div>
        <div className='comments-container'>
          <form onSubmit={dataHandler}>
            <select name="list_name">
              {fullBooks.map((category, index) => {
                return <option key={index} value={category.list_name}>{category.list_name}</option>
              })}
            </select>
            <label htmlFor="title">Book Title</label>
            <input type="text" placeholder="Title" id="title" name="title" required />
            <label htmlFor="book_image">Url Image</label>
            <input type="url" placeholder="Url Image" id="book_image" name="book_image" required />
            <label htmlFor="bookName">Author</label>
            <input type="text" placeholder="Book name" id="bookName" name="bookName" required />
            <label htmlFor="amazon_product_url">Amazon Url</label>
            <input type="url" placeholder="Amazon Product" id="amazon_product_url" name="amazon_product_url" required />
            <label htmlFor="description">Description</label>
            <textarea placeholder="Description" id="description" name="description" cols="30" rows="10" required></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
