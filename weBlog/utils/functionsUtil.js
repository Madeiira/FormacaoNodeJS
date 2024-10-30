function truncateText(text, percentage) {
    const limit = Math.floor(text.length * (percentage / 100));
    return text.substring(0, limit) + '...'; // Adiciona '...' para indicar que o texto foi truncado
}

// Functions exports
module.exports = truncateText;


