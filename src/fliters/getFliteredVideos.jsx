export const getFliteredVideos = (
  sortedproducts,
  bestseller,
  fiction,
  nonfiction,
  selfhelp,
  recommended
) => {
  const filteredlist = [];
  if (
    bestseller === false &&
    fiction === false &&
    nonfiction === false &&
    selfhelp === false &&
    recommended == false
  ) {
    return sortedproducts;
  }
  if (bestseller) {
    let newList = sortedproducts.filter(
      (item) => "bestseller" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (fiction) {
    let newList = sortedproducts.filter(
      (item) => "fiction" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (nonfiction) {
    let newList = sortedproducts.filter(
      (item) => "nonfiction" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (selfhelp) {
    let newList = sortedproducts.filter(
      (item) => "selfhelp" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (recommended) {
    let newList = sortedproducts.filter(
      (item) => "recommended" === item.category.toLowerCase()
    );

    filteredlist.push(...newList);
  }
  console.log("filtered list", filteredlist);
  return filteredlist;
};
