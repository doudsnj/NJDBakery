//removeRow objective: enable the user to remove any row they've filled out by clicking a button on that row
function removeRow() {
    console.log('in top of removeRow function');
    //When any remove row button is clicked, find its classes and split them out into an array
    $('.remove-row__button').click(function () {
        alert('Handler for .click() called.');
        let listOfClasses = $(this)[0].className.split(/\s+/);
        //START - from Nathan
        // let row = classList.find(class => {
        //     return class.includes('row')
        //});
        // let rowNum = row.substring(3);
        //END - from Nathan

        //look through the array of classes on the button that was clicked, and find the one that includes the word 'entry'
        for (var i = 0; i < listOfClasses.length; i++) {
            if ((listOfClasses[i].includes)('entry')) {
                let rowNumber = (listOfClasses[i].substring(5));
                let elementToFind = 'entry' + rowNumber;
                console.log(elementToFind);
                //determine if the row that's going to be deleted has the 'newest' class on it
                //RECENT:
                let classListOfElementToFind = document.getElementsByClassName(elementToFind)[0].className.split(/\s+/);
                //let classListOfElementToFind = $('.' + elementToFind)[0].className.split(/\s+/);
                for (var i = 0; i < classListOfElementToFind.length; i++) {
                    if ((classListOfElementToFind[i].includes)('newest')) {
                        //if it does, then remove that row, find the last child in that same div, find it's row number, and remove all elements with that row number
                        $(`.${elementToFind}`).remove();
                        let lastChildElement = $('.order-form__product-field--container input:last-child');
                        let lastChildClassList = $(lastChildElement)[0].className.split(/\s+/);
                        for (var i = 0; i < lastChildClassList.length; i++) {
                            if ((lastChildClassList[i].includes)('entry')) {
                                let rowNumber = (lastChildClassList[i].substring(5));
                                let nameOfClass = '.entry' + rowNumber;
                                $(nameOfClass).addClass('newest');
                            };
                        };
                        //if it's not the newest row, then simply delete that row
                    } else {
                        var elToRemove = $(`.${elementToFind}`)[0];
                        elToRemove.remove();
                    }
                }


            }
        }
    }
    )
};
