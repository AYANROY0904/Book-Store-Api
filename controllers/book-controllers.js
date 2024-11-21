const Book = require("../models/book")
const getAllBooks = async (req, res) => {
  try{
    const allBooks = await Book.find({});
  if(allBooks?.length>0){
    res.status(200).json({
      success : true,
      message : "Books fetched successfully",
      data: allBooks
    })

  }else{
    res.status(404).json({
      success : false,
      message : "No books found",
    })

  };
  }catch(e){
    console.log(e);
    res.status(500).json({
      success : false,
      message : "something went wrong!!!",
    })
  }
};
const getSingleBookById = async (req, res) => {
  try{
    const getCurrentBookById = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookById);
    if(!bookDetailsById){
      res.status(404).json({
        success : false,
        message : "Book not found",
      })
    }else{
      res.status(200).json({
        success : true,
        data: bookDetailsById,
        message : "Book found successfully",
      })
    }

  }catch{
    console.log(e);
    res.status(500).json({
      success : false,
      message : "something went wrong!!!",
    })
 }
};
const addNewBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        console.error(error); // Log the error details
        res.status(400).json({ error: error.message });
      }
  };
const updateBook = async (req, res) => {
  try{
    const updatedBookData = req.body;
    const updatedBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      updatedBookId,
       updatedBookData,
        {new : true}
      );
      if(!updatedBook){
        res.status(404).json({
          success : false,
          message : "Book not found",
        })
      }else{
        res.status(200).json({
          success : true,
          data : updatedBook,
          message : "Book updated successfully",
        })
      }

  }catch{

  }
};
const deleteBook = async (req, res) => {
  try{
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);
    if(!deletedBook){
      res.status(404).json({
        success : false,
        message : "Book not found",
      })
    }else{
      res.status(200).json({
        success : true,
        data : deletedBook,
        message : "Book deleted successfully",
      })
    }
  }catch{
    console.log(e); 
    res.status(500).json({
      success : false,
      message : "something went wrong!!!",
    })
 }
};

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
};