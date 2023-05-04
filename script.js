function extractTitleAndAuthor(books) {
    return books.map(({title, author}) => ({title, author}));
  }
  const books = [
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    {title: '1984', author: 'George Orwell'}
  ];
  
  const titleAndAuthor = extractTitleAndAuthor(books);
  console.log(...titleAndAuthor);
  function extractTitleAndAuthor(books) {
    const titleAndAuthor = books.map(({title, author}) => {
      return {title, author};
    });
    return titleAndAuthor;
  }
  function extractTitleAndAuthor(books) {
    const titleAndAuthor = books.map(({title, author}) => ({title, author}));
    return titleAndAuthor;
  }
  function extractTitleAndAuthor(books, ...args) {
    const titleAndAuthor = books.map(({title, author}) => ({title, author}));
    console.log(...titleAndAuthor, ...args);
    return titleAndAuthor;
  }
  