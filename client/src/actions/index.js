export function loadItems() {
  return function (dispatch) {
    fetch("/items")
    .then((res) => {
      return res.json();
    }).then((items) => {
      dispatch(itemsLoaded(items));
    });
  };
}
function itemsLoaded(items) {
  return {
    type: "ITEMS_LOADED",
    value: items
  };
}

export function updateItem(item) {
  return function (dispatch) {
    fetch("/items/" + item._id, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(item)
    }).then(() => dispatch(loadItems()));
  };
}

export function createItem(item) {
  return function (dispatch) {
    fetch("/items", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(item)
    }).then(() => dispatch(loadItems()));
  };
}


export function deleteItem(item) {
  console.log(item);
  return function (dispatch) {
    fetch("/items/" + item._id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then(() => dispatch(loadItems()));
  };
}
