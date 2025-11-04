export function randomLoveEmoji() {
  const loveEmojis = ['❤️', '😍', '🥰', '💖', '💕', '💝', '💞', '💓', '💗'];
  const randomIndex = Math.floor(Math.random() * loveEmojis.length);
  return loveEmojis[randomIndex];
}
