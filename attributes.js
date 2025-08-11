const allElements = document.querySelectorAll('*');
const attributesMap = {};

allElements.forEach(element => {
  const elementAttributes = {};
  if (element.attributes.length > 0) {
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      elementAttributes[attr.name] = attr.value;
    }
    attributesMap[element.tagName] = attributesMap[element.tagName] || [];
    attributesMap[element.tagName].push(elementAttributes);
  }
});

console.log("All Attributes by Element Tag:", attributesMap);