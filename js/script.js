const studentList = document.getElementsByClassName("student-item");
const studentLimit = 9;
let resultsFound = true;







//function get set number of pages
 const numberOfPages = (array, pageMax) => {
    const totalPages = Math.ceil(array.length / studentLimit);
    return totalPages;
};

//Show Page function
const showPage = (array, pageNum) => {
    //set index numbers to adjust for items in array with 0 based index
    const startIndex = (pageNum * studentLimit) - studentLimit;
    const endIndex = (pageNum * studentLimit) - 1;

    const li = document.querySelector('li');
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
    }
    for (let i = 0; i < array.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            array[i].style.display = 'block';
        }
    }
};

/***
 Create the `appendPageLinks function` to generate, append, and add
 functionality to the pagination buttons.
 ***/
const appendPageLinks = (list) => {
    //get page from HTML
    const page = document.querySelector('.page');
    const div = document.createElement("div");
    const pageList = document.createElement("ul");
    div.classList.add('pagination');
    page.appendChild(div);
    div.appendChild(pageList);
    const pagesNeeded = numberOfPages(studentList, studentLimit);
    for (let i = 1; i <= pagesNeeded; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = i.toString();
        //set page 1 to active
        if (a.textContent === '1') {
            a.classList.add('active');
        }
        a.setAttribute('href', '#');
        pageList.appendChild(li);
        li.appendChild(a);
    }
    setEventHandlers();
};
const removePagination = () => {
    const pagination = document.querySelector('.pagination');
    console.log(pagination);
    pagination.innerHTML = '';
}

const setEventHandlers = () => {
    const anchorTags = document.querySelectorAll("a");
    anchorTags.forEach(element => {
        addEventListener("click", (e) => {
            updateActiveLink(anchorTags);
            e.target.classList.add('active');
            showPage(studentList, e.target.textContent);
      })
   })
}

const updateActiveLink = (tagList) => {
   tagList.forEach(element => {
      if (element.classList.contains('active')) {
            element.classList.remove('active');
      }
   })
}



showPage(studentList, 1);
appendPageLinks(studentList);