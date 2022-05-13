const googleDatabase = [
  "cats.com",
  "girls.com",
  "soup.com",
  "soupy.com",
  "ggw.com",
  "empyreanmed.com",
  "salads.com",
  "flowers.com",
];
const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  if (matches.length > 3) {
    return matches.slice(0, 3);
  }
  return matches;
};

module.exports = { googleSearch };
