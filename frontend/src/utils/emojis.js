const funEmojis = [
    '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '☺️', '🙂',
    '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣',
    '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜',
    '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁',
    '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩',
    '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬',
    '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🤥',
    '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻',
    '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽',
    '🙀', '😿', '😾', '👶', '👦', '👧', '🧑', '👱', '👨', '🧔'
    // Add more emojis as needed
];

export const getRandomEmoji = () => {
    return funEmojis[Math.floor(Math.random() * funEmojis.length)];
}