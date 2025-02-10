import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]); 
    const [selectCategory, setSelectCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/products.json');
                const data = await res.json();
                setProducts(data);
                setFilteredItems(data); 
            } catch (err) {
                console.log('Error fetching data', err);
            }
        };
        fetchData();
    }, []);

    // Filtering items
    const filterItems = (category) => {
        const filtered = category === 'all'
            ? products
            : products.filter((item) => item.category.toLowerCase() === category.toLowerCase()); // ✅ Fix case issues

        setFilteredItems(filtered);
        setSelectCategory(category);
    };

    // Show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectCategory('all');
    };
    // sorting functionalaity
    const handleSort=(option)=>{
        setSortOption(option)

        // logic for sorting
        let sortedItems=[...filteredItems]
        console.log(sortedItems)
switch(option){
    case 'A-Z':sortedItems.sort((a,b)=>a.title.localeCompare(b.title));
    break;
    case 'Z-A':sortedItems.sort((a,b)=>b.title.localeCompare(a.title));
    break;
    case 'low-to-high':sortedItems.sort((a,b)=>a.price-b.price);
    break;
    case 'high-to-low':sortedItems.sort((a,b)=>b.price-a.price);
    break;
    default:
        break; 
}
setFilteredItems(sortedItems)
    }
   
    // handleSort('default');

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 mb-12'>
            <h2 className="title">Or subscribe to the newsletter</h2>

            {/* Product Cards */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    {/* Filter Buttons */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 flex-wrap'>
                        <button onClick={showAll} className='cursor-pointer'>All Products</button>
                        <button onClick={() => filterItems("Dress")} className='cursor-pointer'>Clothing</button>
                        <button onClick={() => filterItems("Hoodies")} className='cursor-pointer'>Hoodies</button>
                        <button onClick={() => filterItems("Bag")} className='cursor-pointer'>Bag</button>
                    </div>

                    {/* Sorting Options */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='text-white h-4 w-4' />
                        </div>
                        <select 
                        id='sort'
                        onChange={(e)=>handleSort(e.target.value)}
                        value={sortOption}
                        className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>
                <Card filteredItems={filteredItems} />
            </div>
        </div>
    );
};

export default Products;
