$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var name = $(this).data("burger_name");
        var eaten = $(this).data('eaten');
        // console.log("testtttt", eaten);
        var burgEaten = {
            id: id,
            burger_name: name,
            burger_eaten: eaten
        };
        console.log(burgEaten);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgEaten
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".submit-new").on("click", function(event) {
        event.preventDefault();

        var newBurger = {

            burger_name: $("#add-burger").val().trim(),
            burger_eaten: 0
        };
        console.log(newBurger);

        //post request not working
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger added!");
                location.reload();
            }
        )
    })

})
