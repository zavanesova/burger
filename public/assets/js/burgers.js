$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");
        var burgEaten = {
            burger_eaten: eaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgEaten
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#add-burger").val().trim(),
            burger_eaten: false
        };

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
