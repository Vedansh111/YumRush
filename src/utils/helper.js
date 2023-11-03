export const filterdata = (searchText, allres) => {

    return allres?.filter((s) => {
        return s.info?.name?.toLowerCase().includes(searchText.toLowerCase()) || s.info?.cuisines.join("").toLowerCase().includes(searchText);
    })
}
