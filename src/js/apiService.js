export default function getImages(queryName, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${queryName}&page=${pageNumber}&per_page=12&key=24098743-7553027393eef521f019e0de7`,
  );
}
