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
const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  if (matches.length > 3) {
    return matches.slice(0, 3);
  }
  return matches;
};

module.exports = { googleDatabase, googleSearch };
