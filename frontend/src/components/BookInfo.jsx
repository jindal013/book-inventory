export const BookInfo = ({title, info}) => {
  return (
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-500">{title}</span>
      <span>{info}</span>
    </div>
  )
}

export const BookInfoCard = ({book}) => {
  return (
    <div className="flex flex-col border-2 border-sky-400 w-fit rounded-xl p-4">
      <BookInfo title={'Id'} info={book._id}/>
      <BookInfo title={'Title'} info={book.title}/>
      <BookInfo title={'Author'} info={book.author}/>
      <BookInfo title={'Publish Year'} info={book.publishYear}/>
      <BookInfo title={'Create Time'} info={new Date(book.createdAt).toString()}/>
      <BookInfo title={'Last Update Time'} info={new Date(book.updatedAt).toString()}/>
    </div>
  )
}