const men = require('../models/men');
const women = require('../models/women');
const kids = require('../models/kids');

let getProducts =  async (req, res) => {
    try {
        let { search } = req.query;
        if(search !== ""){
        let query = {};
        if (search) {
            let breakSearch = search.split(" ")

            query.$or = breakSearch.map(splitedWord=>({  
                $or: [
                { title: { $regex: splitedWord, $options: 'i' } },
                { category: { $regex: splitedWord, $options: 'i' } },
                { subcategory: { $regex: splitedWord, $options: 'i' } },
            ]
        }))
        }

        const menProducts = await men.find(query);
        const womenProducts = await women.find(query);
        const kidsProducts = await kids.find(query);

        let allProducts = [...menProducts, ...womenProducts, ...kidsProducts];
        res.json(allProducts);
    }else{
        const menProducts = await men.find();
        const womenProducts = await women.find();
        const kidsProducts = await kids.find();

        let allProducts = [...menProducts, ...womenProducts, ...kidsProducts];
        res.json(allProducts);
    }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


let getKidsProducts = async (req, res) => {
    try {
      let { search } = req.query;
      if (search !== "") {
        let query = {};
        if (search) {
          const searchArray = search.split(',');
          query.$or = searchArray.map(splitedWord => ({
            $or: [
              { title: { $regex: splitedWord, $options: 'i' } },
              { color: { $regex: splitedWord, $options: 'i' } },
              { size: { $regex: splitedWord, $options: 'i' } },
              { category: { $regex: splitedWord, $options: 'i' } },
              { subcategory: { $regex: splitedWord, $options: 'i' } },
            ]
          }));
        }
  
        const kidsProducts = await kids.find(query);
        res.json(kidsProducts);
      } else {
        const kidsProducts = await kids.find();
        res.json(kidsProducts);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  let getMenProducts = async (req, res) => {
    try {
      let { search } = req.query;
      if (search !== "") {
        let query = {};
        if (search) {
          const searchArray = search.split(',');
          query.$or = searchArray.map(splitedWord => ({
            $or: [
              { title: { $regex: splitedWord, $options: 'i' } },
              { color: { $regex: splitedWord, $options: 'i' } },
              { size: { $regex: splitedWord, $options: 'i' } },
              { category: { $regex: splitedWord, $options: 'i' } },
              { subcategory: { $regex: splitedWord, $options: 'i' } },
            ]
          }));
        }
  
        const menProducts = await men.find(query);
        res.json(menProducts);
      } else {
        const menProducts = await men.find();
        res.json(menProducts);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  let getWomenProducts = async (req, res) => {
    try {
      let { search } = req.query;
      if (search !== "") {
        let query = {};
        if (search) {
          const searchArray = search.split(',');
          query.$or = searchArray.map(splitedWord => ({
            $or: [
              { title: { $regex: splitedWord, $options: 'i' } },
              { color: { $regex: splitedWord, $options: 'i' } },
              { size: { $regex: splitedWord, $options: 'i' } },
              { category: { $regex: splitedWord, $options: 'i' } },
              { subcategory: { $regex: splitedWord, $options: 'i' } },
            ]
          }));
        }
  
        const womenProducts = await women.find(query);
        res.json(womenProducts);
      } else {
        const womenProducts = await women.find();
        res.json(womenProducts);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  




module.exports = {
    getProducts,
    getKidsProducts,
    getMenProducts,
    getWomenProducts
}
