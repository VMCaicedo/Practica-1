
export async function delUser(number) {
    const response = await fetch(`http://localhost:3000/users/${number}`, {
        method: "DELETE"
    });

    return response.ok;
}