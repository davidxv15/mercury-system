interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
}

function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: ProductFiltersProps) {
  return (
    <section className="mb-6 grid gap-4 rounded-2xl border border-zinc-700 bg-zinc-800 p-4 md:grid-cols-2">
      <input
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      className="roundeed-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-stone-200 outline focus:border-sky-500"
      />

      <select
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-stone-200 outline-none focus:border-emerald-500">
        
        <option value="All">All Categories</option>

        {categories.map((category) => (

          <option key={category} value={category}>
            {category}
          </option>

        ))}
        </select>
    </section>
  );
}

export default ProductFilters;