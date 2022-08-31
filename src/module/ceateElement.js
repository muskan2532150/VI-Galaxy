const create = (el, classes, parent) => {
  const createEle = document.createElement(el);
  if (classes !== undefined) {
    classes.forEach((element) => createEle.classList.add(element));
  }
  parent.appendChild(createEle);

  return createEle;
};

export default create;
