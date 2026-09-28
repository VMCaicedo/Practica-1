function FriendsList() {
    this.names = [];

    const numberOfFriends = parseInt(process.argv[3]);

    for (let i = 0; i < numberOfFriends; i++) {
        this.names.push(process.argv[4 + i]);
    }
}

const friends = new FriendsList();

console.log(friends.names);

