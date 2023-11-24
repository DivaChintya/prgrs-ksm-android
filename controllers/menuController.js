//controllers/menuController.js
const Menu = require('../models/menuModel');
const bodyParser = require('body-parser');

// Get all menu
const getAllMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        console.log(menus);
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new menu
const createMenu = async (req, res) => {
    try {
        console.log(req.body);
        const newMenu = new Menu(req.body);
        await newMenu.save();
        res.json(newMenu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update menu name
const updateMenuName = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Updating menu name for menuId: ${menuId}, New name: ${req.body.name}`);
        
        const updatedMenu = await Menu.findByIdAndUpdate(menuId, { name: req.body.name }, { new: true });
        
        console.log(`Updated menu:`, updatedMenu);
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Update menu price
const updateMenuPrice = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Updating menu price for menuId: ${menuId}, New price: ${req.body.price}`);
        
        const updatedMenu = await Menu.findByIdAndUpdate(menuId, { price: req.body.price }, { new: true });
        
        console.log(`Updated menu:`, updatedMenu);
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Update menu description
const updateMenuDescription = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Updating menu description for menuId: ${menuId}, New description: ${req.body.description}`);
        
        const updatedMenu = await Menu.findByIdAndUpdate(menuId, { description: req.body.description }, { new: true });
        
        console.log(`Updated menu:`, updatedMenu);
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Update menu category
const updateMenuCategory = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Updating menu category for menuId: ${menuId}, New category: ${req.body.category}`);
        
        const updatedMenu = await Menu.findByIdAndUpdate(menuId, { category: req.body.category }, { new: true });
        
        console.log(`Updated menu:`, updatedMenu);
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Update menu PCS
const updateMenuPCS = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Updating menu PCS for menuId: ${menuId}, New PCS: ${req.body.pcs}`);
        
        const updatedMenu = await Menu.findByIdAndUpdate(menuId, { pcs: req.body.pcs }, { new: true });
        
        console.log(`Updated menu:`, updatedMenu);
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Delete menu
const deleteMenu = async (req, res) => {
    try {
        const { menuId } = req.params;
        console.log(`Deleting menu for menuId: ${menuId}`);
        
        await Menu.findByIdAndDelete(menuId);
        
        res.json({ message: 'Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMenu,
    createMenu,
    updateMenuCategory,
    updateMenuPrice,
    updateMenuName,
    updateMenuDescription,
    updateMenuPCS,
    deleteMenu
};
