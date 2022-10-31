const express = require('express');
const { 
  getAllChocolates, 
  getChocolatesByBrand, 
  getChocolateById, 
  getChocolateByName,
  updateChocolate,
} = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  const quantidadeChocolate = chocolates.length;
  res.status(200).json({ totalChocolates: quantidadeChocolate });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getChocolateByName(name);
  if (chocolates.length === 0) { res.status(404).json([]); }
  res.status(200).json(chocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await updateChocolate(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(201).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;