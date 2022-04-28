import fetch from "node-fetch";

const dataUrl = "https://www.monogo.pl/competition/input.txt";

const response = await fetch(dataUrl);
const dataText = await response.text();
const dataJSON = JSON.parse(dataText);

const { selectedFilters, products, colors, sizes } = await dataJSON;

const newColors = colors.map((color) => ({ id: color.id, color: color.value }));
const newSizes = sizes.map((size) => ({ id: size.id, size: size.value }));

const formatIdDataType = (array) =>
  array.map((obj) => {
    obj.id = parseInt(obj.id);
    return obj;
  });

const groupProducts = (products, colors, sizes, key) => {
  const groupedData = [
    ...formatIdDataType(products),
    ...formatIdDataType(colors),
    ...formatIdDataType(sizes),
  ].sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });

  const reducedData = Object.values(
    groupedData.reduce((accumulator, currentValue) => {
      (accumulator[currentValue[key]] =
        accumulator[currentValue[key]] || []).push(currentValue);
      return accumulator;
    }, {})
  ).map((productArr) =>
    productArr.reduce((acc, curVal) => ({ ...acc, ...curVal }), {})
  );

  return reducedData;
};

const filterData = (filters, data) => {
  const filtersToApply = Object.keys(filters);
  let filteredData = data;

  const useFilter = (filterName, key) =>
    (filteredData = filteredData.filter((product) => {
      const filter = filters[filterName];
      return filter.includes(product[key]);
    }));

  filtersToApply.forEach((filterName) => {
    switch (filterName) {
      case "colors":
        useFilter("colors", "color");
        break;

      case "sizes":
        useFilter("sizes", "size");
        break;

      default:
        break;
    }
  });

  return filteredData.filter((product) => product.price > 200);
};

const getMinMultiplyMaxValue = (data) => {
  const dataSortedByPrice = data.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });

  const minValue = dataSortedByPrice[0].price;
  const maxValue = dataSortedByPrice[dataSortedByPrice.length - 1].price;

  return Math.round(maxValue * minValue);
};

const getSolutionArray = (value) => {
  const valueAsArray = Array.from(String(value), (num) => Number(num));

  const solution = valueAsArray.reduce((acc, num, index) => {
    if (index % 2 === 0) acc.push(num);
    else acc[acc.length - 1] += num;

    return acc;
  }, []);

  return solution;
};

const reducedData = groupProducts(products, newColors, newSizes, "id");
const filteredData = filterData(selectedFilters, reducedData);
const minMultiplyMaxValue = getMinMultiplyMaxValue(filteredData);
const solutionArray = getSolutionArray(minMultiplyMaxValue);

const MonogoOfficeAddressNumber = 14;
const monogoCompanyName = "Monogo";

const solution =
  solutionArray.findIndex((item) => item === MonogoOfficeAddressNumber) *
  minMultiplyMaxValue *
  monogoCompanyName.length;

console.log("solution:", solution);
