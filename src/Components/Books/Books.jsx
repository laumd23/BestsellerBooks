import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Books = () => {
  const { fullBooks, deleteBook } = useContext(GlobalContext);
  if (!fullBooks) {
    return <h1>cargando...</h1>
  }

  const detailHandler = (book) => {
    Modal.info({
      title: `${book.title}`,
      content: (
        <div>
          <h4>Description</h4>
          <div>{book.description}</div>
        </div>
      ),
      onOk() { },
    });
  }

  return (
    <div>
      {
        fullBooks.map((category, index) => {
          return (
            <div key={index} className='lists-full-overview'>
              <div className='category-title'>
                <h2>{category.list_name}</h2>
              </div>
              <div className='books-by-category'>
                {category.books.map((bookLibrary, index) => {
                  return (
                    <div key={index} className='book-container'>
                      <h4>{bookLibrary.title}</h4>
                      <img src={bookLibrary.book_image} alt="portada libro" onClick={() => detailHandler(bookLibrary)} />
                      <div className='author-link-container'>
                        <div className='author'>Autor: {bookLibrary.author}</div>
                        <a href={bookLibrary.amazon_product_url}> Cómpralo por Amazon</a>
                      </div>
                      <div className='icon-delete'>
                        <DeleteOutlined onClick={() => deleteBook(bookLibrary.primary_isbn10)} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Books;
