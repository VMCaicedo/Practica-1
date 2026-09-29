// Task 3: addUser(first_name, last_name, email)

export async function addUser(first_name, last_name, email) {
    // Obtener los usuarios actuales
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    // Obtener el ID más alto
    const maxId = users.reduce((max, user) => {
        return Math.max(max, Number(user.id));
    }, 0);

    // Crear el nuevo usuario
    const newUser = {
        id: maxId + 1,
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    // Enviar el nuevo usuario al servidor
    const result = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    // Regresar la respuesta
    return await result.json();
}

