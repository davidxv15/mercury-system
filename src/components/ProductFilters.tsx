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
    <section
      value={searchTerm}
      className="mb-6 grid gap-4 rounded-xl">
      <input>
      </input>
    </section>
  )
})