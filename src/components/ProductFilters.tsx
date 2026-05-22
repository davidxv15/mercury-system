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
    <section className="mb-6 grid gap-4 rounded-xl">
      <input
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      className="roundeed-xl">
      </input>
    </section>
  )
})