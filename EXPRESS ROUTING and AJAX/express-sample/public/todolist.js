$(function () {
     
    let newtodobox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todolist = $('#todolist')

    addtodoBtn.click(function () {
        let newtodo = newtodobox.val()
     // AJAX = Asynchronous Javascript Add XML
        $.post( 
            '/todo/',           // 1 path
            {task: newtodo},    // 2 body
            function (data) {   // 3 callback function 
                todolist.empty();
                for (todo of data) {
                   todolist.append("<li>" + todo.task + "</li>") 
                }
            }
        )
    })
})
