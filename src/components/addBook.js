const addBook = () => (
  <>
    <h3>Add New Book</h3>
    <form className="add">
      <input type="text" placeholder="Enter Book title Here" />
      <select name="cars" id="cars">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="button" type="button">Add Book</button>
    </form>
  </>
);

export default addBook;
