function Form(form) {
  this.form = form;
  this.visible = false;
  this.toggle = () => {
    this.visible ? this.close() : this.open();
  };
  this.open = () => {
    this.form.style.visibility = 'visible'
    this.visible = true;
  }
  this.close = () => {
    this.form.style.visibility = 'hidden';
    this.visible = false;
    inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }
}

/*  <div id="bookList">
      <div class="book">
        <div class="bookButtons">
          <button>Read</button>
          <button>Remove</button>
        </div>
        <div class="content">
          <p>Title: ipsum</p>
          <p>Author: ipsum</p>
          <p>Pages: ipsum</p>
          <p>Review: ipsum</p>
        </div>
      </div>
    </div>
*/

function addBookToLibrary() {
  const bookList = document.querySelector('#bookList');
  const book = document.createElement('div');
  const bookButtons = document.createElement('div');
  const button_read = document.createElement('button');
  const button_remove = document.createElement('button');
  const content = document.createElement('div');

  book.classList.add('book');
  bookButtons.classList.add('bookButtons');
  button_read.classList.add('read');
  button_remove.classList.add('remove');
  button_read.textContent = 'Read';
  button_remove.textContent = 'Remove';
  content.classList.add('content');

  button_read.addEventListener('click', () => readBook(button_read));
  button_remove.addEventListener('click', () => removeBook(button_remove));

  bookList.appendChild(book);
  book.appendChild(bookButtons);
  book.appendChild(content);
  bookButtons.appendChild(button_read);
  bookButtons.appendChild(button_remove);

  inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    const p = document.createElement('p');
    p.textContent = `${input.id}: ${input.value}`;
    content.appendChild(p);
  });
}

function readBook(read) {
  (read.textContent == 'Read') ? read.textContent = 'Unread' : read.textContent = 'Read';
}

function removeBook(remove) {
  console.log(remove.parentElement.parentElement.remove());
}


function main() {
  const newBook = document.querySelector('#newBook');
  const form = document.querySelector('form');
  const closeForm = document.querySelector('#closeForm');
  const submit = document.querySelector('#submit');
  const bookForm = new Form(form);

  newBook.addEventListener('click', () => bookForm.toggle());
  closeForm.addEventListener('click', () => {
    bookForm.close();
  });
  submit.addEventListener('click', () => {
    event.preventDefault();
    addBookToLibrary();
    bookForm.close();
  });
}

main();