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
    <section className="mb-6 grid gap-4 rounded-2xl border border-zinc-700">
      <input
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      className="roundeed-xl"
      />

      <select
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-xl border border-xl">
        
        <option value="All">All Categories</option>

        {categories.map((category) => (

          <option value={category}></option>

        ))}
        </select>
    </section>
  );
})