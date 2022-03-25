function showUsers(users) {
    console.log(users);
    let elements = users.map(user => 
        $('<li />').text(user.first_name)
        .append( $('<img />').attr('src', user.avatar))
    );
    $(".user-list").append(elements);
}

fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then((json) => showUsers(json.data));
