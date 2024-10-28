import Form from "next/form"
import SearchFormReset from "./SearchFormReset"
import { SearchIcon } from "lucide-react"
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        defaultValue={query}
        name="query"
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button className="search-btn text-white" type="submit">
          <SearchIcon className="size-5" />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
