class NotAskedWordQuestion extends Error {
    constructor() {
        super("We can only support word questions");
    }
}

export default NotAskedWordQuestion;
