$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        // var eaten = $(this).data('eaten');
        // console.log("testtttt", eaten);
        var burgEaten = {
            burger_eaten: true
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

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#add-burger").val().trim(),
            burger_eaten: false
        };

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
